#!/usr/bin/env node
/**
 * Project Setup Script
 * Initializes a new project from the template with guided prompts
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

const log = (color, message) =>
  console.log(`${colors[color]}${message}${colors.reset}`);

async function promptUser(question) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readline.question(question, (answer) => {
      readline.close();
      resolve(answer.trim());
    });
  });
}

async function updatePackageJson(projectName, description, author) {
  const packagePath = path.join(process.cwd(), 'package.json');

  try {
    const packageContent = await fs.readFile(packagePath, 'utf8');
    const packageData = JSON.parse(packageContent);

    packageData.name = projectName.toLowerCase().replace(/\s+/g, '-');
    packageData.description = description;
    packageData.author = author;
    packageData.version = '1.0.0';

    // Remove template-specific scripts
    delete packageData.scripts['setup:project'];

    await fs.writeFile(packagePath, JSON.stringify(packageData, null, 2));
    log('green', '✅ Updated package.json');
  } catch (error) {
    log('red', `❌ Error updating package.json: ${error.message}`);
  }
}

async function updateReadme(projectName, description) {
  const readmePath = path.join(process.cwd(), 'README.md');

  const readmeContent = `# ${projectName}

${description}

## 🚀 Getting Started

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
\`\`\`

## 📁 Project Structure

This project follows the Professional Web Presence Template structure. See \`TEMPLATE-README.md\` for detailed documentation.

## 🛠 Development

### Available Commands

\`\`\`bash
npm run dev              # Start development server
npm run build            # Build for production
npm run validate         # Run all quality checks
npm run lint             # Lint JavaScript
npm run format           # Format code
npm test                 # Run tests
\`\`\`

### Quality Gates

Every commit runs:
- Code formatting (Prettier)
- Linting (ESLint, Stylelint, HTMLHint)  
- Unit tests (Vitest)
- Build verification

## 🚀 Deployment

This project is configured for GitHub Pages deployment. Push to the main branch to trigger automatic deployment.

## 📚 Documentation

See the \`docs/\` directory for:
- Business analysis
- Design specifications  
- Technical documentation
- User guides

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all quality checks pass
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.
`;

  try {
    await fs.writeFile(readmePath, readmeContent);
    log('green', '✅ Created README.md');
  } catch (error) {
    log('red', `❌ Error creating README.md: ${error.message}`);
  }
}

async function updateViteConfig(projectName) {
  const configPath = path.join(process.cwd(), 'vite.config.js');

  try {
    let configContent = await fs.readFile(configPath, 'utf8');
    const repoName = projectName.toLowerCase().replace(/\s+/g, '-');

    // Update the base path for GitHub Pages
    configContent = configContent.replace(
      'const base = isProduction ? "/legs/" : "/";',
      `const base = isProduction ? "/${repoName}/" : "/";`,
    );

    await fs.writeFile(configPath, configContent);
    log('green', '✅ Updated vite.config.js');
  } catch (error) {
    log('red', `❌ Error updating vite.config.js: ${error.message}`);
  }
}

async function createBusinessAnalysis(projectName, description) {
  const docsDir = path.join(process.cwd(), 'docs');
  const businessFile = path.join(docsDir, 'business-analysis.md');

  try {
    // Read the template
    const templatePath = path.join(
      docsDir,
      'templates',
      'business',
      'business-analysis-template.md',
    );
    let templateContent = await fs.readFile(templatePath, 'utf8');

    // Replace placeholder content
    templateContent = templateContent.replace(
      /Example: "We provide expert guidance[^"]*"/g,
      `"${description}"`,
    );

    templateContent = `# ${projectName} - Business Analysis

${templateContent}`;

    await fs.writeFile(businessFile, templateContent);
    log('green', '✅ Created business analysis document');
  } catch (error) {
    log('yellow', `⚠️  Could not create business analysis: ${error.message}`);
  }
}

async function initializeGit() {
  try {
    // Check if already a git repository
    try {
      execSync('git rev-parse --git-dir', { stdio: 'ignore' });
      log('yellow', '⚠️  Git repository already exists');
      return;
    } catch {
      // Not a git repo, initialize it
    }

    execSync('git init', { stdio: 'ignore' });
    execSync('git add .', { stdio: 'ignore' });
    execSync('git commit -m "chore: initialize project from template"', {
      stdio: 'ignore',
    });
    log('green', '✅ Initialized Git repository');
  } catch (error) {
    log('red', `❌ Error initializing Git: ${error.message}`);
  }
}

async function setupHusky() {
  try {
    execSync('npm run prepare', { stdio: 'ignore' });
    log('green', '✅ Set up Git hooks with Husky');
  } catch (error) {
    log('yellow', `⚠️  Could not set up Git hooks: ${error.message}`);
  }
}

async function main() {
  log('cyan', '🚀 Professional Web Presence Template Setup');
  log('blue', '==========================================\n');

  log('bright', 'This script will help you set up your new project.');
  log('bright', 'Please answer a few questions to customize your setup.\n');

  // Gather project information
  const projectName = await promptUser('📝 Project name: ');
  const description = await promptUser('📋 Project description: ');
  const author = await promptUser('👤 Author name: ');

  log('blue', '\n🔧 Setting up your project...\n');

  // Update project files
  await updatePackageJson(projectName, description, author);
  await updateReadme(projectName, description);
  await updateViteConfig(projectName);
  await createBusinessAnalysis(projectName, description);

  // Initialize development environment
  await initializeGit();
  await setupHusky();

  log('green', '\n🎉 Project setup complete!\n');

  log('bright', 'Next steps:');
  log('blue', '1. Complete the business analysis in docs/business-analysis.md');
  log('blue', '2. Create your design system using docs/templates/design/');
  log('blue', '3. Start development with: npm run dev');
  log('blue', '4. Set up your GitHub repository and enable Pages\n');

  log('cyan', 'Happy building! 🚀');
}

if (require.main === module) {
  main().catch((error) => {
    log('red', `❌ Setup failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { main };

# Real Estate Investment Website

A modern, component-based real estate investment website built with vanilla JavaScript and Vite.

## 🚀 Features

- **Component Architecture**: Modular Web Components using Shadow DOM
- **Responsive Design**: Mobile-first responsive design with CSS Grid and Flexbox
- **Performance Optimized**: Vite build system with code splitting and asset optimization
- **Content Management**: JSON-based content system for easy updates
- **Testing**: Unit tests with Vitest and E2E tests with Playwright
- **CI/CD**: Automated testing, linting, and deployment with GitHub Actions
- **Semantic Versioning**: Automated releases with conventional commits

## 🏗️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), Web Components, Shadow DOM
- **Build Tool**: Vite 5.x
- **Styling**: CSS with design tokens and custom properties
- **Testing**: Vitest (unit), Playwright (E2E)
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages
- **Code Quality**: ESLint, Prettier, Husky, Commitlint

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd homesite

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run test:ci` - Run tests in CI mode
- `npm run test:e2e` - Run E2E tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Component Development

Components are located in `src/components/` and follow this structure:

```
components/
├── BaseComponent.js     # Base class for all components
├── Header/
│   ├── Header.js        # Component logic
│   ├── header.html      # Template
│   └── header.css       # Styles
```

## 🎯 Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Please format your commits as:

```
<type>[optional scope]: <description>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `ci`: CI/CD changes

### Examples

```bash
feat(components): add property search functionality
fix(styles): resolve mobile responsive issues
docs: update README with deployment instructions
```

## 🚢 Deployment

### Automatic Deployment

The project automatically deploys to GitHub Pages when changes are pushed to the `main` branch:

1. **GitHub Actions** runs tests and builds the project
2. **Semantic Release** creates version tags based on commit messages
3. **GitHub Pages** serves the built site

### Manual Deployment

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

## 📋 Versioning

This project uses **Semantic Versioning** (SemVer) with automated releases:

- **Major** (1.0.0): Breaking changes (commit with `BREAKING CHANGE:` or `!`)
- **Minor** (0.1.0): New features (`feat:` commits)
- **Patch** (0.0.1): Bug fixes and improvements (`fix:`, `docs:`, etc.)

Releases are automatically created based on conventional commit messages.

## 🧪 Testing

### Unit Tests

```bash
npm run test          # Run once
npm run test:watch    # Watch mode
npm run test:coverage # With coverage
```

### E2E Tests

```bash
npm run test:e2e
```

## 📁 Project Structure

```
homesite/
├── .github/workflows/    # GitHub Actions
├── .husky/              # Git hooks
├── public/              # Static assets
├── src/
│   ├── components/      # Web Components
│   ├── css/            # Global styles
│   ├── data/           # JSON content
│   ├── pages/          # HTML pages
│   ├── tests/          # Test files
│   └── utils/          # Utility functions
├── .commitlintrc.json  # Commit message rules
├── .releaserc.json     # Semantic release config
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Make your changes following the commit convention
4. Push to your branch: `git push origin feat/amazing-feature`
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏠 Live Demo

Visit the live site: [https://kaw393939.github.io/homesite/](https://kaw393939.github.io/homesite/)

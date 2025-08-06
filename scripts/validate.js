#!/usr/bin/env node
/**
 * Validation Script - Run all code quality checks locally
 * This matches exactly what runs in CI and pre-commit hooks
 */

const { execSync } = require('child_process');
const chalk = require('chalk');

const commands = [
  {
    name: 'Code Formatting',
    command: 'npm run format:check',
    fix: 'npm run format',
  },
  {
    name: 'JavaScript Linting',
    command: 'npm run lint',
    fix: 'npm run lint:fix',
  },
  {
    name: 'CSS Linting',
    command: 'npm run lint:css',
    fix: 'npm run lint:css:fix',
  },
  {
    name: 'HTML Validation',
    command: 'npm run lint:html',
    fix: null,
  },
  {
    name: 'Build Test',
    command: 'npm run build',
    fix: null,
  },
];

console.log(chalk.blue('🔍 Running code quality validation...\n'));

let hasErrors = false;

for (const check of commands) {
  try {
    console.log(chalk.gray(`Running ${check.name}...`));
    execSync(check.command, { stdio: 'inherit' });
    console.log(chalk.green(`✅ ${check.name} passed\n`));
  } catch (error) {
    console.log(chalk.red(`❌ ${check.name} failed\n`));
    if (check.fix) {
      console.log(chalk.yellow(`💡 Try running: ${check.fix}\n`));
    }
    hasErrors = true;
  }
}

if (hasErrors) {
  console.log(
    chalk.red('❌ Some validation checks failed. Please fix the issues above.'),
  );
  process.exit(1);
} else {
  console.log(chalk.green('🎉 All validation checks passed!'));
  console.log(chalk.blue('You can now commit your changes safely.'));
}

#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('🚀 Student Deployment Script for GitHub Pages\n');

function execCommand(command, description) {
  console.log(`📋 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`❌ Error: ${description} failed`);
    return false;
  }
}

function checkGitStatus() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    return status.trim() !== '';
  } catch (error) {
    return false;
  }
}

async function getCommitMessage() {
  return new Promise((resolve) => {
    rl.question(
      'Enter commit message (or press Enter for default): ',
      (answer) => {
        resolve(answer || 'feat: update site content');
      },
    );
  });
}

async function deploy() {
  try {
    // Check if package.json exists
    try {
      readFileSync('package.json');
    } catch (error) {
      console.error(
        '❌ Error: Not in the correct directory. Please run this from the project root.',
      );
      process.exit(1);
    }

    // Check for changes
    if (!checkGitStatus()) {
      console.log('ℹ️ No changes to commit. Skipping git operations.');
    } else {
      // Add all changes
      if (!execCommand('git add .', 'Adding all changes')) {
        process.exit(1);
      }

      // Get commit message
      const commitMessage = await getCommitMessage();

      // Commit changes
      if (
        !execCommand(`git commit -m "${commitMessage}"`, 'Committing changes')
      ) {
        console.log(
          '💡 Tip: If pre-commit hooks failed, fix the issues and run this script again.',
        );
        process.exit(1);
      }

      // Push to GitHub
      if (!execCommand('git push origin main', 'Pushing to GitHub')) {
        process.exit(1);
      }
    }

    // Build and deploy
    if (
      !execCommand('npm run deploy', 'Building and deploying to GitHub Pages')
    ) {
      process.exit(1);
    }

    console.log('\n✅ Deployment successful!');
    console.log('🌐 Your site is live at: https://kaw393939.github.io/legs/');
    console.log(
      '🕐 Note: It may take a few minutes for changes to appear on the live site.',
    );
  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

deploy();

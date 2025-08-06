# 🚀 Student Deployment Guide

This guide explains the easiest ways to deploy your changes to GitHub Pages.

## Quick Start (Recommended)

Choose one of these simple deployment methods:

### Option 1: One-Command Deployment (Easiest)

```bash
npm run deploy:easy
```

This interactive script will:

- Add all your changes
- Ask for a commit message (or use a default)
- Commit and push to GitHub
- Deploy to GitHub Pages
- Show you the live site URL

### Option 2: Windows Batch File

Double-click `deploy.bat` in the project root folder. This provides the same functionality as Option 1 but with a graphical interface.

### Option 3: Simple NPM Command

```bash
npm run student-deploy
```

This uses a default commit message and deploys everything automatically.

## Your Live Site

After deployment, your site will be available at:
**https://kaw393939.github.io/legs/**

⏳ **Note:** Changes may take 2-5 minutes to appear on the live site.

## Traditional Deployment (Manual Steps)

If you prefer to do it manually:

1. Add changes: `git add .`
2. Commit: `git commit -m "your message"`
3. Push: `git push origin main`
4. Deploy: `npm run deploy`

## Troubleshooting

### Pre-commit Hooks Failed?

If the deployment fails due to code formatting:

1. Run `npm run format` to fix formatting
2. Run the deployment command again

### Git Push Failed?

Make sure you're authenticated with GitHub:

1. Check your Git configuration
2. Ensure you have push access to the repository

### Deployment Succeeded but Changes Don't Appear?

- Wait 5 minutes and refresh the page
- Clear your browser cache
- Check if the build included your files

## File Changes

When you make changes to any files, use one of the deployment methods above to publish them to your live site.

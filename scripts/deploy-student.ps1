#!/usr/bin/env pwsh
# Student Deployment Script for GitHub Pages
# This script handles the complete deployment process in one command

Write-Host "🚀 Starting deployment to GitHub Pages..." -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: Not in the correct directory. Please run this from the project root." -ForegroundColor Red
    exit 1
}

# Add all changes
Write-Host "📁 Adding all changes..." -ForegroundColor Yellow
git add .

# Check if there are any changes to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "ℹ️ No changes to commit. Skipping git operations." -ForegroundColor Blue
} else {
    # Get commit message from user or use default
    $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
    if (-not $commitMessage) {
        $commitMessage = "feat: update site content"
    }
    
    # Commit changes
    Write-Host "💾 Committing changes..." -ForegroundColor Yellow
    git commit -m $commitMessage
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Error: Git commit failed. Please check for pre-commit hook issues." -ForegroundColor Red
        exit 1
    }
    
    # Push to GitHub
    Write-Host "⬆️ Pushing to GitHub..." -ForegroundColor Yellow
    git push origin main
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Error: Git push failed. Please check your Git configuration." -ForegroundColor Red
        exit 1
    }
}

# Build and deploy to GitHub Pages
Write-Host "🔨 Building and deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Deployment successful! Your site is live at https://kaw393939.github.io/legs/" -ForegroundColor Green
    Write-Host "🕐 Note: It may take a few minutes for changes to appear on the live site." -ForegroundColor Cyan
} else {
    Write-Host "❌ Deployment failed. Please check the error messages above." -ForegroundColor Red
    exit 1
}

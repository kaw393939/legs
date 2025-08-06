# Developer Environment Setup Guide

## LEGS Course - Professional Development Foundations

> **Course Philosophy**: "Your development environment is your creative studio. A well-configured environment multiplies your productivity and minimizes friction between ideas and execution."

---

## 🎯 Learning Objectives

By completing this setup, students will:

- Configure a professional development environment identical to industry standards
- Understand the workflow tools that make AI-assisted development effective
- Establish Git practices that prevent common collaboration disasters
- Create muscle memory for productivity-enhancing shortcuts and extensions

---

## 💻 VS Code Installation & Configuration

### Step 1: Install VS Code

**Windows Users:**

```powershell
# Option 1: Direct download from https://code.visualstudio.com/
# Option 2: Using winget (Windows Package Manager)
winget install Microsoft.VisualStudioCode
```

**Mac Users:**

```bash
# Option 1: Direct download from https://code.visualstudio.com/
# Option 2: Using Homebrew
brew install --cask visual-studio-code
```

### Step 2: Essential Extensions for LEGS Course

#### 🔧 **Core Development Extensions**

```json
{
  "recommendations": [
    "ms-vscode.vscode-json",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.live-server",
    "ritwickdey.liveserver",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

#### 🤖 **AI-Powered Extensions**

```json
{
  "ai-extensions": [
    "github.copilot",
    "github.copilot-chat",
    "ms-toolsai.jupyter",
    "tabnine.tabnine-vscode"
  ]
}
```

#### 📝 **Content & Documentation**

```json
{
  "content-extensions": [
    "yzhang.markdown-all-in-one",
    "davidanson.vscode-markdownlint",
    "bierner.markdown-mermaid",
    "shd101wyy.markdown-preview-enhanced"
  ]
}
```

#### 🔄 **Git & Version Control**

```json
{
  "git-extensions": [
    "eamodio.gitlens",
    "mhutchie.git-graph",
    "donjayamanne.githistory",
    "huacnlee.auto-correct"
  ]
}
```

#### 🎨 **Design & UI Development**

```json
{
  "design-extensions": [
    "figma.figma-vscode-extension",
    "bradlc.vscode-tailwindcss",
    "pustelto.bracketeer",
    "oderwat.indent-rainbow"
  ]
}
```

### Step 3: VS Code Settings Configuration

Create or update your `settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "workbench.colorTheme": "GitHub Dark",
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "terminal.integrated.defaultProfile.osx": "zsh",
  "git.autofetch": true,
  "git.enableSmartCommit": true,
  "markdown.preview.breaks": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000
}
```

---

## 🔧 Git Configuration & Workflow

### Step 1: Git Installation

**Windows:**

```powershell
# Install Git for Windows
winget install Git.Git
# Or download from: https://git-scm.com/download/win
```

**Mac:**

```bash
# Install via Homebrew
brew install git
# Or use Xcode Command Line Tools
xcode-select --install
```

### Step 2: Global Git Configuration

```bash
# Set your identity (REQUIRED)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch name
git config --global init.defaultBranch main

# Enable helpful colorization
git config --global color.ui auto

# Set default editor to VS Code
git config --global core.editor "code --wait"

# Enable credential caching (Windows)
git config --global credential.helper manager-core

# Enable credential caching (Mac)
git config --global credential.helper osxkeychain
```

### Step 3: Professional Git Aliases

Add these to make Git workflows faster:

```bash
# Status shortcuts
git config --global alias.st status
git config --global alias.br branch
git config --global alias.co checkout

# Commit shortcuts
git config --global alias.ci commit
git config --global alias.cm "commit -m"
git config --global alias.ca "commit -am"

# Log shortcuts
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.ll "log --pretty=format:'%h %ad %s (%an)' --date=short"

# Advanced shortcuts for AI development
git config --global alias.save "!git add -A && git commit -m 'WIP: save current work'"
git config --global alias.undo "reset HEAD~1 --mixed"
git config --global alias.wipe "!git add -A && git commit -qm 'WIPE SAVEPOINT' && git reset HEAD~1 --hard"
```

---

## 🎓 Git Workflows for AI-Assisted Development

### The LEGS Git Philosophy

> "In AI-assisted development, Git becomes your safety net, your collaboration tool, and your documentation system all in one."

### Workflow 1: The Experimentation Pattern

```bash
# When trying AI-generated solutions
git stash push -m "current working state"
# Try AI solution
git add .
git commit -m "experiment: AI suggestion for feature X"
# If it works: continue
# If it doesn't: git reset --hard HEAD~1
```

### Workflow 2: The Atomic Commit Pattern

```bash
# Make small, focused commits that tell a story
git add src/components/Header.js
git commit -m "feat: add responsive header component

- Implements mobile-first design
- Uses CSS Grid for layout
- Includes accessibility improvements"

git add src/styles/variables.css
git commit -m "style: add golden ratio design tokens

- Defines spacing scale based on φ (1.618)
- Consistent typography ratios
- Supports both light/dark themes"
```

### Workflow 3: The Collaboration Pattern

```bash
# Before starting work each day
git fetch origin
git status
git pull origin main

# When sharing work
git push origin feature-branch
# Create pull request with detailed description
```

### Workflow 4: The Recovery Patterns

#### "Oh no, I broke everything"

```bash
# Soft reset - keeps changes staged
git reset --soft HEAD~1

# Mixed reset - unstages changes but keeps them
git reset HEAD~1

# Hard reset - DESTROYS changes (use carefully!)
git reset --hard HEAD~1

# Nuclear option - restore to last known good state
git reflog
git reset --hard HEAD@{2}  # or whatever looks right
```

#### "I need to switch contexts quickly"

```bash
# Stash with descriptive message
git stash push -m "WIP: header component responsive fixes"

# Work on urgent task
git checkout main
git pull origin main
git checkout -b hotfix/urgent-bug

# Return to original work
git checkout feature-branch
git stash pop
```

---

## 🚀 Professional Development Practices

### Daily Workflow

1. **Start of Day**: `git status`, `git pull origin main`
2. **Before Each Feature**: Create new branch with descriptive name
3. **During Development**: Commit early, commit often, with clear messages
4. **End of Day**: Push work to remote, even if incomplete
5. **Before Merge**: Clean up commit history if needed

### Commit Message Standards

We follow **Conventional Commits** for professional portfolios:

```
feat: add user authentication system
fix: resolve header navigation bug on mobile
docs: update API documentation for user endpoints
style: implement golden ratio spacing system
refactor: extract reusable form validation logic
test: add unit tests for payment processing
chore: update dependencies to latest versions
```

### Branch Naming Convention

```
feature/user-authentication
fix/mobile-nav-bug
docs/api-documentation
style/golden-ratio-implementation
refactor/form-validation
hotfix/critical-payment-bug
```

---

## 🧪 Git Scenario Simulations

### Simulation 1: The Merge Conflict

**Setup**: Two developers modify the same file
**Learning**: How to resolve conflicts professionally
**Tools**: VS Code merge conflict resolver, GitLens

### Simulation 2: The Accidental Commit

**Setup**: Student commits sensitive data or broken code
**Learning**: Various reset strategies and their implications
**Tools**: Git reflog, interactive rebase

### Simulation 3: The Lost Work

**Setup**: Simulate work loss scenarios
**Learning**: Recovery techniques and prevention strategies
**Tools**: Git stash, reflog, backup strategies

### Simulation 4: The Collaboration Challenge

**Setup**: Multiple feature branches, merge conflicts, release preparation
**Learning**: Professional Git workflows in team environments
**Tools**: Pull requests, code review, continuous integration

---

## 🔍 Quality Assurance Checklist

### Before Each Commit

- [ ] Code builds without errors
- [ ] All tests pass
- [ ] Code follows style guidelines
- [ ] Commit message follows convention
- [ ] No sensitive data included
- [ ] Changes are focused and atomic

### Before Each Push

- [ ] Local branch is up to date with main
- [ ] All commits have clear, descriptive messages
- [ ] No merge conflicts exist
- [ ] Documentation is updated if needed

### Before Each Pull Request

- [ ] Branch has descriptive name
- [ ] PR description explains changes and context
- [ ] All checks pass
- [ ] Code review requested from appropriate reviewers

---

## 🎯 Success Metrics

### Week 1 Goals

- [ ] VS Code configured with all required extensions
- [ ] Git installed and configured with professional settings
- [ ] Successfully complete 5 commit scenarios
- [ ] Create first feature branch and pull request

### Ongoing Mastery Indicators

- Commits are atomic and well-described
- No "oops" commits or messy history
- Comfortable with stash/pop workflow
- Can resolve merge conflicts independently
- Uses Git aliases for improved efficiency

---

## 🆘 Troubleshooting Common Issues

### VS Code Issues

**Problem**: Extensions not working  
**Solution**: Reload window (Ctrl+Shift+P → "Developer: Reload Window")

**Problem**: Git integration not showing  
**Solution**: Check Git path in settings, restart VS Code

### Git Issues

**Problem**: Authentication failures  
**Solution**: Set up SSH keys or use credential manager

**Problem**: "Fatal: not a git repository"  
**Solution**: Run `git init` or navigate to correct directory

**Problem**: Merge conflicts seem impossible  
**Solution**: Use VS Code's merge conflict resolver or `git mergetool`

---

## 🎉 You're Ready!

Once you complete this setup, you'll have a professional-grade development environment that will:

- Accelerate your coding with AI assistance
- Prevent common version control disasters
- Enable seamless collaboration
- Build portfolio-worthy project history
- Prepare you for any professional development role

**Next Step**: Complete the "Git Fundamentals Quiz" and create your first project repository!

---

_Last Updated: August 6, 2025_  
_Part of LEGS Course - Week 1 Foundation_

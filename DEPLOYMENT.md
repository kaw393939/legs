# Deployment Guide

## GitHub Pages Setup

To enable GitHub Pages deployment for this project, follow these steps:

### 1. Repository Settings

1. Go to your GitHub repository: `https://github.com/kaw393939/legs`
2. Navigate to **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Required Permissions

Ensure your repository has the following permissions enabled:

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**

### 3. Environment Configuration

The workflow will create a `github-pages` environment automatically. You can configure branch protection rules if needed.

### 4. Domain Configuration (Optional)

If using a custom domain:

1. In **Settings** → **Pages**
2. Add your custom domain under **Custom domain**
3. Enable **Enforce HTTPS**

## Deployment Process

The deployment process is fully automated:

### Triggers

- **Push to main branch**: Automatically builds, tests, and deploys
- **Pull request**: Runs tests and builds (no deployment)

### Workflow Steps

1. **Build & Test**:
   - Install dependencies
   - Run unit tests (`npm run test:ci`)
   - Run linting (`npm run lint`)
   - Build project (`npm run build`)

2. **Deploy** (main branch only):
   - Upload build artifacts to GitHub Pages
   - Deploy to production environment

### Semantic Versioning

Releases are automatically created based on commit messages:

- `feat:` → Minor version bump (0.1.0)
- `fix:` → Patch version bump (0.0.1)
- `BREAKING CHANGE:` → Major version bump (1.0.0)

## Site URL

After deployment, your site will be available at:
`https://kaw393939.github.io/legs/`

## Monitoring

- Check deployment status in **Actions** tab
- View environment deployments in **Environments** tab
- Monitor site uptime and performance

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check test results in Actions log
   - Verify all dependencies are installed
   - Ensure code passes linting

2. **Deployment Issues**:
   - Verify GitHub Pages is enabled
   - Check workflow permissions
   - Ensure base path is correct in `vite.config.js`

3. **404 Errors**:
   - Verify base path configuration
   - Check that all assets are properly referenced
   - Ensure routing works with GitHub Pages

### Manual Deployment

If needed, you can deploy manually:

```bash
npm run build
npm run deploy
```

Note: Manual deployment requires `gh-pages` dependency and proper git configuration.

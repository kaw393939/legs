# Development Workflow

## Getting Started

### Initial Setup

```bash
# Clone the repository
git clone [repository-url]
cd homesite

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Edit environment variables
# VITE_API_URL=http://localhost:3000
# VITE_ANALYTICS_ID=your-analytics-id
```

## Daily Development Workflow

### 1. Starting Development

```bash
# Pull latest changes
git pull origin main

# Install any new dependencies
npm install

# Start development server
npm run dev
```

### 2. Feature Development Process

```bash
# Create feature branch
git checkout -b feature/property-gallery

# Make changes and test locally
npm run dev

# Run tests
npm run test

# Lint and format code
npm run lint
npm run format

# Commit changes
git add .
git commit -m "feat: add property image gallery component"

# Push feature branch
git push origin feature/property-gallery
```

### 3. Code Review Process

1. Create pull request on GitHub
2. Request review from team members
3. Address feedback and make changes
4. Merge when approved

## Component Development Workflow

### Creating New Components

```bash
# 1. Create component directory
mkdir src/components/PropertyGallery

# 2. Create component files
touch src/components/PropertyGallery/PropertyGallery.js
touch src/components/PropertyGallery/PropertyGallery.css
touch src/components/PropertyGallery/PropertyGallery.html
touch src/components/PropertyGallery/PropertyGallery.test.js

# 3. Implement component following BaseComponent pattern
# 4. Register component in components.js
# 5. Create tests
# 6. Add to Storybook (if using)
```

### Component Development Checklist

- [ ] Extends BaseComponent class
- [ ] Has proper HTML template
- [ ] Includes scoped CSS styles
- [ ] Implements error handling
- [ ] Has unit tests
- [ ] Follows accessibility guidelines
- [ ] Documented with JSDoc comments

### Testing Components

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run specific component test
npm run test PropertyGallery

# Run tests with coverage
npm run test:coverage
```

## Content Management Workflow

### Adding New Content

```bash
# 1. Create or update JSON file
src/public/data/content/new-page.json

# 2. Update navigation.json if needed
src/public/data/navigation.json

# 3. Create page template if needed
src/pages/new-page.html

# 4. Test content rendering
npm run dev

# 5. Commit changes
git add .
git commit -m "content: add new service page"
```

### Content Update Process

1. **Edit JSON files** in `/public/data/`
2. **Test locally** with `npm run dev`
3. **Validate JSON** with `npm run validate-content`
4. **Commit changes** with descriptive message
5. **Deploy automatically** via GitHub Actions

### Property Data Workflow

```bash
# Add new property
# 1. Create property JSON file
public/data/properties/property-123.json

# 2. Add property images
public/images/properties/property-123/

# 3. Update properties list
public/data/properties/properties-list.json

# 4. Test property display
npm run dev

# 5. Validate all property data
npm run validate-properties
```

## Build and Deployment Workflow

### Local Build Testing

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Analyze bundle size
npm run analyze
```

### Deployment Process

```bash
# Automatic deployment on push to main
git push origin main

# Manual deployment (if needed)
npm run build
npm run deploy
```

### Pre-deployment Checklist

- [ ] All tests passing
- [ ] No linting errors
- [ ] Content validates
- [ ] Images optimized
- [ ] Performance tested
- [ ] Accessibility verified
- [ ] SEO metadata updated

## Quality Assurance Workflow

### Code Quality Gates

```bash
# Pre-commit hooks (automatic)
npm run lint-staged

# Manual quality checks
npm run lint          # ESLint
npm run format        # Prettier
npm run typecheck     # TypeScript (if using)
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
```

### Performance Testing

```bash
# Lighthouse audits
npm run lighthouse

# Bundle analysis
npm run analyze

# Performance benchmarks
npm run perf
```

### Accessibility Testing

```bash
# Automated accessibility tests
npm run a11y

# Manual testing checklist:
# - Keyboard navigation
# - Screen reader compatibility
# - Color contrast
# - Focus management
```

## Git Workflow

### Branch Strategy

```
main                    ← Production-ready code
├── develop            ← Integration branch
├── feature/           ← New features
├── bugfix/           ← Bug fixes
├── hotfix/           ← Emergency fixes
└── release/          ← Release preparation
```

### Commit Message Convention

```bash
# Format: type(scope): description

feat(components): add property image gallery
fix(search): resolve filter reset issue
docs(readme): update installation instructions
style(header): adjust mobile menu spacing
refactor(utils): simplify data fetching logic
test(contact): add form validation tests
chore(deps): update vite to v5.0.0
```

### Release Process

```bash
# 1. Create release branch
git checkout -b release/v1.2.0

# 2. Update version numbers
npm version patch  # or minor/major

# 3. Update changelog
# Edit CHANGELOG.md

# 4. Test release candidate
npm run build
npm run test:full

# 5. Merge to main
git checkout main
git merge release/v1.2.0

# 6. Tag release
git tag v1.2.0
git push origin v1.2.0

# 7. Deploy to production
# (Automatic via GitHub Actions)
```

## Development Scripts

### Available NPM Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "lint": "eslint src/**/*.js",
    "lint:fix": "eslint src/**/*.js --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "validate-content": "node scripts/validate-content.js",
    "validate-properties": "node scripts/validate-properties.js",
    "optimize-images": "node scripts/optimize-images.js",
    "lighthouse": "lighthouse http://localhost:4173",
    "analyze": "vite-bundle-analyzer",
    "prepare": "husky install"
  }
}
```

### Utility Scripts

```bash
# Content validation
npm run validate-content

# Image optimization
npm run optimize-images

# Generate sitemap
npm run generate-sitemap

# Update property index
npm run update-property-index
```

## Debugging Workflow

### Development Debugging

```bash
# Start dev server with debug mode
DEBUG=true npm run dev

# Enable verbose logging
VITE_LOG_LEVEL=info npm run dev

# Debug specific component
DEBUG_COMPONENT=PropertyCard npm run dev
```

### Production Debugging

```bash
# Build with source maps
npm run build:debug

# Analyze bundle
npm run analyze

# Check for dead code
npm run dead-code
```

### Browser Debugging

```javascript
// Enable debug mode in browser console
localStorage.setItem("debug", "true");

// Debug specific component
window.debugComponent = "PropertyCard";

// View component data
console.log(document.querySelector("property-card").data);
```

## Monitoring and Maintenance

### Daily Checks

- [ ] Check build status
- [ ] Review error logs
- [ ] Monitor performance metrics
- [ ] Validate content accuracy

### Weekly Tasks

- [ ] Update dependencies
- [ ] Review analytics data
- [ ] Check SEO rankings
- [ ] Backup content data

### Monthly Reviews

- [ ] Performance audit
- [ ] Security updates
- [ ] Content strategy review
- [ ] User feedback analysis

This workflow ensures:

- **Consistent development** practices across team
- **Quality code** through automated checks
- **Reliable deployments** with proper testing
- **Maintainable codebase** with clear processes

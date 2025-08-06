# File Structure

## Root Directory Structure

```
homesite/
├── .gitignore                    ← Git ignore patterns
├── package.json                  ← Dependencies and scripts
├── vite.config.js               ← Vite build configuration
├── README.md                    ← Project documentation
├── docs/                        ← Documentation files
│   ├── tech-stack.md
│   ├── component-architecture.md
│   ├── file-structure.md
│   ├── development-workflow.md
│   ├── content-management.md
│   ├── build-system.md
│   └── integration-setup.md
├── project/                     ← Business documents
│   ├── brand.md
│   ├── info.md
│   ├── notes.md
│   └── styleguide.md
├── src/                         ← Source code
├── public/                      ← Static assets
├── dist/                        ← Build output (auto-generated)
└── .vscode/                     ← VSCode settings
```

## Source Code Structure (`/src/`)

```
src/
├── index.html                   ← Main HTML template
├── styles/                      ← Global styles
│   ├── main.css                ← Main stylesheet entry
│   ├── tokens/                  ← Design tokens
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   └── breakpoints.css
│   ├── base/                    ← Foundation styles
│   │   ├── reset.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   └── utilities.css
│   ├── layout/                  ← Layout-specific styles
│   │   ├── grid.css
│   │   ├── containers.css
│   │   └── sections.css
│   └── pages/                   ← Page-specific styles
│       ├── home.css
│       ├── properties.css
│       ├── services.css
│       └── contact.css
├── scripts/                     ← JavaScript files
│   ├── main.js                 ← Main JS entry point
│   ├── components.js           ← Component registration
│   ├── router.js               ← Client-side routing
│   ├── utils/                  ← Utility functions
│   │   ├── dom.js
│   │   ├── fetch.js
│   │   ├── validation.js
│   │   └── analytics.js
│   └── modules/                ← Feature modules
│       ├── search.js
│       ├── filters.js
│       └── contact.js
├── components/                  ← Web Components
│   ├── BaseComponent.js        ← Base component class
│   ├── Header/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Header.html
│   │   └── Header.test.js
│   ├── Hero/
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── Hero.html
│   │   └── Hero.test.js
│   ├── PropertyCard/
│   │   ├── PropertyCard.js
│   │   ├── PropertyCard.css
│   │   ├── PropertyCard.html
│   │   └── PropertyCard.test.js
│   ├── ContactForm/
│   │   ├── ContactForm.js
│   │   ├── ContactForm.css
│   │   ├── ContactForm.html
│   │   └── ContactForm.test.js
│   └── Footer/
│       ├── Footer.js
│       ├── Footer.css
│       ├── Footer.html
│       └── Footer.test.js
├── pages/                       ← Page templates
│   ├── home.html
│   ├── properties.html
│   ├── property-detail.html
│   ├── services.html
│   ├── about.html
│   └── contact.html
└── assets/                      ← Static assets
    ├── images/
    │   ├── hero/
    │   ├── properties/
    │   ├── team/
    │   └── icons/
    ├── fonts/
    └── videos/
```

## Public Directory Structure (`/public/`)

```
public/
├── data/                        ← JSON content files
│   ├── config.json             ← Site configuration
│   ├── navigation.json         ← Navigation structure
│   ├── content/                ← Page content
│   │   ├── home.json
│   │   ├── services.json
│   │   ├── about.json
│   │   └── contact.json
│   ├── properties/             ← Property data
│   │   ├── property-001.json
│   │   ├── property-002.json
│   │   └── properties-list.json
│   └── team/                   ← Team member data
│       ├── team-member-1.json
│       └── team-list.json
├── images/                      ← Optimized images
│   ├── hero/
│   ├── properties/
│   ├── team/
│   └── icons/
├── fonts/                       ← Web fonts
├── favicon.ico
├── robots.txt
├── sitemap.xml
└── manifest.json               ← PWA manifest
```

## Configuration Files

### Package.json Structure

```json
{
  "name": "homesite",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "lint": "eslint src/**/*.js",
    "format": "prettier --write .",
    "prepare": "husky install"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "vitest": "^1.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "husky": "^8.0.0",
    "lint-staged": "^15.0.0"
  }
}
```

### Vite Configuration Structure

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        properties: resolve(__dirname, 'src/pages/properties.html'),
        services: resolve(__dirname, 'src/pages/services.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
      },
    },
  },
  server: {
    open: true,
  },
});
```

## Content Organization

### JSON Data Structure

```
/public/data/
├── config.json                 ← Global site settings
├── navigation.json             ← Menu structure
├── content/                    ← Page-specific content
│   ├── home.json              ← Homepage content
│   ├── services.json          ← Services page content
│   ├── about.json             ← About page content
│   └── contact.json           ← Contact page content
├── properties/                 ← Property listings
│   ├── properties-list.json   ← Property index
│   ├── property-001.json      ← Individual property
│   └── property-002.json      ← Individual property
└── team/                       ← Team information
    ├── team-list.json         ← Team index
    └── member-*.json          ← Individual team members
```

### Component Template Organization

```
/src/components/[ComponentName]/
├── [ComponentName].js          ← Component logic
├── [ComponentName].css         ← Component styles
├── [ComponentName].html        ← Component template
└── [ComponentName].test.js     ← Component tests
```

## File Naming Conventions

### JavaScript Files

- **Components**: PascalCase (e.g., `PropertyCard.js`)
- **Utilities**: camelCase (e.g., `domHelpers.js`)
- **Modules**: kebab-case (e.g., `search-filters.js`)

### CSS Files

- **Components**: Match JS component name (e.g., `PropertyCard.css`)
- **Global styles**: kebab-case (e.g., `design-tokens.css`)
- **Pages**: Match page name (e.g., `property-detail.css`)

### HTML Files

- **Pages**: kebab-case (e.g., `property-detail.html`)
- **Components**: Match component name (e.g., `PropertyCard.html`)

### JSON Files

- **Content**: kebab-case (e.g., `property-listings.json`)
- **Individual items**: ID-based (e.g., `property-001.json`)

### Image Files

- **Descriptive naming**: `hero-luxury-home-001.jpg`
- **Organized by type**: `/images/properties/`, `/images/team/`
- **Optimized versions**: `-small.jpg`, `-medium.jpg`, `-large.jpg`

## Build Output Structure (`/dist/`)

```
dist/                           ← Generated by Vite
├── index.html                  ← Built homepage
├── properties/
│   └── index.html             ← Built properties page
├── services/
│   └── index.html             ← Built services page
├── assets/                     ← Optimized assets
│   ├── index-[hash].js        ← Bundled JavaScript
│   ├── index-[hash].css       ← Bundled CSS
│   └── images/                ← Optimized images
├── data/                       ← Copied JSON files
├── fonts/                      ← Web fonts
└── favicon.ico                ← Site icon
```

## Development Tools Structure

### VSCode Configuration (`.vscode/`)

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "html"
  },
  "files.associations": {
    "*.css": "css"
  }
}
```

### Git Configuration

```gitignore
# Dependencies
node_modules/

# Build outputs
dist/
build/

# Environment files
.env
.env.local

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Log files
*.log
npm-debug.log*

# Cache directories
.cache/
.parcel-cache/
.vite/
```

This file structure provides:

- **Clear separation** between source code, content, and build output
- **Modular organization** with components grouped by functionality
- **Scalable structure** that grows with the project
- **Easy maintenance** with logical file grouping
- **Build optimization** through proper asset organization

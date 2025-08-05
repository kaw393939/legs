# Integration Setup Guide

## Initial Project Setup

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher
- **Git**: For version control
- **VSCode**: Recommended editor with extensions

### VSCode Extensions

```json
// .vscode/extensions.json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-playwright.playwright"
  ]
}
```

### Project Initialization

```bash
# Create project directory
mkdir homesite
cd homesite

# Initialize git repository
git init

# Create initial package.json
npm init -y

# Install Vite and development dependencies
npm install -D vite@^5.0.0 vitest@^1.0.0 eslint@^8.55.0 prettier@^3.1.0

# Create basic project structure
mkdir -p src/{components,scripts,styles,pages,assets}
mkdir -p public/{data,images,fonts}
mkdir -p docs tests

# Create initial files
touch src/index.html src/scripts/main.js src/styles/main.css
touch vite.config.js .gitignore README.md
```

## Configuration Files Setup

### 1. Vite Configuration (`vite.config.js`)

```javascript
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  publicDir: "../public",

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        properties: resolve(__dirname, "src/pages/properties.html"),
        services: resolve(__dirname, "src/pages/services.html"),
        about: resolve(__dirname, "src/pages/about.html"),
        contact: resolve(__dirname, "src/pages/contact.html"),
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
```

### 2. Package.json Scripts

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
    "lint": "eslint src/**/*.js --fix",
    "format": "prettier --write .",
    "validate-content": "node scripts/validate-content.js",
    "optimize-images": "node scripts/optimize-images.js"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "vitest": "^1.0.0",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0"
  }
}
```

### 3. ESLint Configuration (`.eslintrc.js`)

```javascript
export default {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "warn",
    "prefer-const": "error",
    "no-var": "error",
  },
};
```

### 4. Prettier Configuration (`.prettierrc`)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### 5. Git Configuration (`.gitignore`)

```gitignore
# Dependencies
node_modules/

# Build outputs
dist/
build/

# Environment files
.env
.env.local
.env.production

# IDE files
.vscode/settings.json
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

## File Structure Creation

### Create Core Directory Structure

```bash
# Source directories
mkdir -p src/{components,scripts,styles,pages,assets}
mkdir -p src/components/{Header,Hero,PropertyCard,ContactForm,Footer}
mkdir -p src/scripts/{utils,modules}
mkdir -p src/styles/{tokens,base,layout,pages}
mkdir -p src/assets/{images,fonts,videos}

# Public directories
mkdir -p public/{data,images,fonts}
mkdir -p public/data/{content,properties,team}
mkdir -p public/images/{hero,properties,team,icons}

# Development directories
mkdir -p docs tests scripts
mkdir -p tests/{unit,e2e}
```

### Create Base Component Class

```javascript
// src/components/BaseComponent.js
export class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.data = {};
  }

  async connectedCallback() {
    await this.loadTemplate();
    this.loadStyles();
    this.bindEvents();
    this.updateContent();
  }

  async loadTemplate() {
    const componentName = this.constructor.name;
    try {
      const response = await fetch(
        `/components/${componentName}/${componentName}.html`,
      );
      if (response.ok) {
        const template = await response.text();
        this.shadowRoot.innerHTML = template;
      }
    } catch (error) {
      console.error("Failed to load template:", error);
      this.shadowRoot.innerHTML = "<div>Component failed to load</div>";
    }
  }

  loadStyles() {
    const componentName = this.constructor.name;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/components/${componentName}/${componentName}.css`;
    this.shadowRoot.appendChild(link);
  }

  bindEvents() {
    // Override in child components
  }

  updateContent() {
    // Override in child components
  }
}
```

### Create Main Entry Files

#### HTML Entry Point (`src/index.html`)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Premier Real Estate Investments</title>
    <meta
      name="description"
      content="Luxury real estate investment opportunities with expert guidance"
    />

    <link rel="stylesheet" href="/styles/main.css" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <!-- Header -->
    <site-header></site-header>

    <!-- Main Content -->
    <main>
      <hero-section page="home"></hero-section>

      <section class="featured-properties">
        <div class="container">
          <h2>Featured Properties</h2>
          <div class="property-grid">
            <property-card property-id="property-001"></property-card>
            <property-card property-id="property-002"></property-card>
            <property-card property-id="property-003"></property-card>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <site-footer></site-footer>

    <script type="module" src="/scripts/main.js"></script>
  </body>
</html>
```

#### JavaScript Entry Point (`src/scripts/main.js`)

```javascript
// Import components
import "./components.js";

// Import utilities
import { initializeApp } from "./utils/app.js";
import { setupAnalytics } from "./utils/analytics.js";

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
  setupAnalytics();
});
```

#### CSS Entry Point (`src/styles/main.css`)

```css
/* Design Tokens */
@import "tokens/colors.css";
@import "tokens/typography.css";
@import "tokens/spacing.css";
@import "tokens/breakpoints.css";

/* Base Styles */
@import "base/reset.css";
@import "base/typography.css";
@import "base/layout.css";
@import "base/utilities.css";

/* Layout */
@import "layout/grid.css";
@import "layout/containers.css";
@import "layout/sections.css";

/* Pages */
@import "pages/home.css";
@import "pages/properties.css";
@import "pages/services.css";
@import "pages/contact.css";
```

## Component Registration System

### Component Registration (`src/scripts/components.js`)

```javascript
// Import all components
import "../components/Header/Header.js";
import "../components/Hero/Hero.js";
import "../components/PropertyCard/PropertyCard.js";
import "../components/ContactForm/ContactForm.js";
import "../components/Footer/Footer.js";

// Component registry for dynamic loading
export const componentRegistry = {
  "site-header": () => import("../components/Header/Header.js"),
  "hero-section": () => import("../components/Hero/Hero.js"),
  "property-card": () => import("../components/PropertyCard/PropertyCard.js"),
  "contact-form": () => import("../components/ContactForm/ContactForm.js"),
  "site-footer": () => import("../components/Footer/Footer.js"),
};

// Auto-register components when they appear in DOM
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Check if node or its children contain unregistered components
        const components = node.querySelectorAll?.("*") || [];
        components.forEach((element) => {
          const tagName = element.tagName.toLowerCase();
          if (componentRegistry[tagName] && !customElements.get(tagName)) {
            componentRegistry[tagName]();
          }
        });
      }
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
```

## Content Data Setup

### Site Configuration (`public/data/config.json`)

```json
{
  "site": {
    "title": "Premier Real Estate Investments",
    "description": "Luxury real estate investment opportunities",
    "url": "https://yoursite.com",
    "contact": {
      "phone": "(555) 123-4567",
      "email": "info@yoursite.com",
      "address": "123 Main Street, City, State 12345"
    }
  }
}
```

### Navigation Data (`public/data/navigation.json`)

```json
{
  "main": [
    { "label": "Home", "url": "/" },
    { "label": "Properties", "url": "/properties" },
    { "label": "Services", "url": "/services" },
    { "label": "About", "url": "/about" },
    { "label": "Contact", "url": "/contact" }
  ]
}
```

### Sample Property Data (`public/data/properties/property-001.json`)

```json
{
  "id": "property-001",
  "title": "Luxury Waterfront Estate",
  "price": "$2,950,000",
  "location": {
    "city": "Miami Beach",
    "state": "FL"
  },
  "details": {
    "bedrooms": 5,
    "bathrooms": 4.5,
    "sqft": 4200
  },
  "images": ["/images/properties/property-001/exterior.jpg"],
  "status": "available"
}
```

## Development Scripts Setup

### Content Validation Script (`scripts/validate-content.js`)

```javascript
import fs from "fs";
import path from "path";

const validateJSON = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    JSON.parse(content);
    return true;
  } catch (error) {
    console.error(`❌ Invalid JSON in ${filePath}:`, error.message);
    return false;
  }
};

const validateContent = async () => {
  const contentDir = "public/data";
  let isValid = true;

  const validateDirectory = (dir) => {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        validateDirectory(filePath);
      } else if (file.endsWith(".json")) {
        if (!validateJSON(filePath)) {
          isValid = false;
        }
      }
    });
  };

  validateDirectory(contentDir);

  if (isValid) {
    console.log("✅ All content files are valid!");
  } else {
    process.exit(1);
  }
};

validateContent().catch(console.error);
```

### Image Optimization Script (`scripts/optimize-images.js`)

```javascript
import fs from "fs";
import path from "path";

const optimizeImages = async () => {
  console.log("🖼️  Starting image optimization...");

  // For now, just copy images from src to public
  const srcDir = "src/assets/images";
  const destDir = "public/images";

  if (!fs.existsSync(srcDir)) {
    console.log("No source images directory found");
    return;
  }

  const copyDirectory = (src, dest) => {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const files = fs.readdirSync(src);

    files.forEach((file) => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      const stat = fs.statSync(srcPath);

      if (stat.isDirectory()) {
        copyDirectory(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${file}`);
      }
    });
  };

  copyDirectory(srcDir, destDir);
  console.log("✅ Image optimization complete!");
};

optimizeImages().catch(console.error);
```

## Testing Setup

### Basic Test Setup (`tests/setup.js`)

```javascript
import { beforeEach, afterEach } from "vitest";

// Setup DOM environment
beforeEach(() => {
  document.body.innerHTML = "";
});

afterEach(() => {
  document.body.innerHTML = "";
});
```

### Sample Component Test (`tests/unit/Header.test.js`)

```javascript
import { describe, it, expect, beforeEach } from "vitest";
import "../../src/components/Header/Header.js";

describe("Header Component", () => {
  beforeEach(() => {
    document.body.innerHTML = "<site-header></site-header>";
  });

  it("should render header element", () => {
    const header = document.querySelector("site-header");
    expect(header).toBeTruthy();
  });

  it("should have shadow DOM", () => {
    const header = document.querySelector("site-header");
    expect(header.shadowRoot).toBeTruthy();
  });
});
```

## Deployment Setup

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Validate content
        run: npm run validate-content

      - name: Run tests
        run: npm run test

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Final Setup Steps

### 1. Initialize Development Environment

```bash
# Install dependencies
npm install

# Validate setup
npm run validate-content

# Start development server
npm run dev
```

### 2. Create Initial Content

```bash
# Create sample property
cp public/data/properties/property-001.json public/data/properties/property-002.json

# Add sample images
mkdir -p public/images/properties/property-001
# Add property images to directory
```

### 3. Test Build Process

```bash
# Build for production
npm run build

# Preview build
npm run preview

# Run tests
npm run test
```

### 4. Setup Version Control

```bash
# Add all files
git add .

# Initial commit
git commit -m "feat: initial project setup with vanilla JS component architecture"

# Connect to remote repository
git remote add origin [your-repo-url]
git push -u origin main
```

This integration setup provides:

- **Complete project initialization** with all necessary files
- **Component-based architecture** using Web Components
- **File-based content management** with JSON data
- **Build system configuration** with Vite
- **Testing framework** setup with Vitest
- **Deployment pipeline** with GitHub Actions

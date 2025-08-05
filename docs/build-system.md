# Build System Configuration

## Vite Build System Overview

Vite provides fast development and optimized production builds with:

- **Lightning-fast HMR** (Hot Module Replacement)
- **Optimized bundling** with Rollup
- **Modern ES modules** support
- **Automatic code splitting**
- **Asset optimization**

## Main Configuration (`vite.config.js`)

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
        "property-detail": resolve(__dirname, "src/pages/property-detail.html"),
        services: resolve(__dirname, "src/pages/services.html"),
        about: resolve(__dirname, "src/pages/about.html"),
        contact: resolve(__dirname, "src/pages/contact.html"),
      },

      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },

    // Optimize build
    target: "es2020",
    minify: "terser",
    sourcemap: false,

    // Asset handling
    assetsInclude: [
      "**/*.svg",
      "**/*.png",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.gif",
    ],
  },

  server: {
    port: 3000,
    open: true,
    cors: true,

    // Proxy API calls in development
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  preview: {
    port: 4173,
    open: true,
  },

  // Plugin configuration
  plugins: [
    // Add plugins as needed
  ],

  // CSS preprocessing
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/tokens/variables.scss";`,
      },
    },
    postcss: {
      plugins: [
        // PostCSS plugins will be added here
      ],
    },
  },

  // Optimization
  optimizeDeps: {
    include: ["some-large-dependency"],
    exclude: ["some-dev-dependency"],
  },
});
```

## Package.json Configuration

```json
{
  "name": "homesite",
  "version": "1.0.0",
  "type": "module",
  "description": "Real estate investment website",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "build:analyze": "vite build --mode analyze",
    "build:debug": "vite build --mode development",
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "lint": "eslint src/**/*.js --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "optimize-images": "node scripts/optimize-images.js",
    "validate-content": "node scripts/validate-content.js",
    "generate-sitemap": "node scripts/generate-sitemap.js",
    "lighthouse": "lighthouse http://localhost:4173 --output=html --output-path=./lighthouse-report.html",
    "prepare": "husky install"
  },
  "dependencies": {
    // Runtime dependencies (none for vanilla JS)
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "vitest": "^1.0.0",
    "@vitest/coverage-v8": "^1.0.0",
    "playwright": "^1.40.0",
    "eslint": "^8.55.0",
    "@eslint/js": "^0.56.0",
    "prettier": "^3.1.0",
    "husky": "^8.0.3",
    "lint-staged": "^15.2.0",
    "terser": "^5.26.0",
    "lighthouse": "^11.4.0",
    "sharp": "^0.33.0",
    "ajv": "^8.12.0"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

## Environment Configuration

### Environment Variables (`.env.example`)

```bash
# Site Configuration
VITE_SITE_URL=https://yoursite.com
VITE_SITE_NAME=Premier Real Estate Investments

# API Configuration
VITE_API_URL=https://api.yoursite.com
VITE_API_KEY=your-api-key

# Analytics
VITE_GA_ID=UA-XXXXXXXX-X
VITE_GTM_ID=GTM-XXXXXXX

# Social Media
VITE_FACEBOOK_PIXEL=123456789
VITE_LINKEDIN_PARTNER_ID=123456

# Development
VITE_LOG_LEVEL=info
VITE_DEBUG_MODE=false

# Build Configuration
VITE_BUILD_TARGET=es2020
VITE_MINIFY=true
VITE_SOURCEMAP=false
```

### Development Environment (`.env.local`)

```bash
VITE_API_URL=http://localhost:8000
VITE_DEBUG_MODE=true
VITE_LOG_LEVEL=debug
VITE_SOURCEMAP=true
```

## Build Optimization

### Asset Optimization Configuration

```javascript
// vite.config.js - Asset optimization
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for third-party libraries
          vendor: ["some-library"],

          // Component chunks
          components: [
            "src/components/Header/Header.js",
            "src/components/Footer/Footer.js",
          ],

          // Utility chunks
          utils: ["src/scripts/utils/dom.js", "src/scripts/utils/fetch.js"],
        },
      },
    },
  },
});
```

### Image Optimization Script

```javascript
// scripts/optimize-images.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

const optimizeImages = async () => {
  const inputDir = "src/assets/images";
  const outputDir = "public/images";

  const processImage = async (inputPath, outputPath) => {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Generate multiple sizes
    const sizes = [
      { suffix: "-small", width: 400 },
      { suffix: "-medium", width: 800 },
      { suffix: "-large", width: 1200 },
    ];

    for (const size of sizes) {
      const outputName =
        path.basename(outputPath, path.extname(outputPath)) +
        size.suffix +
        path.extname(outputPath);
      const resizedOutputPath = path.join(path.dirname(outputPath), outputName);

      await image
        .resize(size.width, null, { withoutEnlargement: true })
        .jpeg({ quality: 85, progressive: true })
        .toFile(resizedOutputPath);
    }

    // Original optimized version
    await image.jpeg({ quality: 90, progressive: true }).toFile(outputPath);
  };

  // Process all images recursively
  const processDirectory = async (dir) => {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
        const relativePath = path.relative(inputDir, filePath);
        const outputPath = path.join(outputDir, relativePath);

        // Ensure output directory exists
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });

        await processImage(filePath, outputPath);
        console.log(`Optimized: ${relativePath}`);
      }
    }
  };

  await processDirectory(inputDir);
  console.log("Image optimization complete!");
};

optimizeImages().catch(console.error);
```

## CSS Build Configuration

### PostCSS Configuration (`postcss.config.js`)

```javascript
export default {
  plugins: {
    "postcss-import": {},
    "postcss-custom-properties": {
      preserve: false,
    },
    "postcss-nesting": {},
    autoprefixer: {
      browsers: ["> 1%", "last 2 versions"],
    },
    cssnano: {
      preset: [
        "default",
        {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
        },
      ],
    },
  },
};
```

### CSS Processing Pipeline

```css
/* src/styles/main.css */
@import "tokens/colors.css";
@import "tokens/typography.css";
@import "tokens/spacing.css";
@import "tokens/breakpoints.css";

@import "base/reset.css";
@import "base/typography.css";
@import "base/layout.css";
@import "base/utilities.css";

@import "layout/grid.css";
@import "layout/containers.css";
@import "layout/sections.css";

/* Page-specific styles */
@import "pages/home.css";
@import "pages/properties.css";
@import "pages/services.css";
@import "pages/contact.css";
```

## Development Scripts

### Content Validation Script

```javascript
// scripts/validate-content.js
import Ajv from "ajv";
import fs from "fs";
import path from "path";
import { glob } from "glob";

const ajv = new Ajv({ allErrors: true });

// Define schemas
const propertySchema = {
  type: "object",
  required: ["id", "title", "price", "location"],
  properties: {
    id: { type: "string" },
    title: { type: "string", minLength: 1 },
    price: { type: "string" },
    location: {
      type: "object",
      required: ["city", "state"],
      properties: {
        city: { type: "string" },
        state: { type: "string" },
      },
    },
  },
};

const validateContent = async () => {
  let hasErrors = false;

  // Validate all property files
  const propertyFiles = await glob("public/data/properties/property-*.json");

  for (const file of propertyFiles) {
    try {
      const content = JSON.parse(fs.readFileSync(file, "utf8"));
      const valid = ajv.validate(propertySchema, content);

      if (!valid) {
        console.error(`❌ Validation failed for ${file}:`);
        ajv.errors.forEach((error) => {
          console.error(`  - ${error.instancePath}: ${error.message}`);
        });
        hasErrors = true;
      } else {
        console.log(`✅ ${file} is valid`);
      }
    } catch (error) {
      console.error(`❌ Error parsing ${file}:`, error.message);
      hasErrors = true;
    }
  }

  if (hasErrors) {
    process.exit(1);
  } else {
    console.log("🎉 All content files are valid!");
  }
};

validateContent().catch(console.error);
```

### Sitemap Generation Script

```javascript
// scripts/generate-sitemap.js
import fs from "fs";
import { glob } from "glob";

const generateSitemap = async () => {
  const baseUrl = process.env.VITE_SITE_URL || "https://yoursite.com";
  const pages = [];

  // Static pages
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/properties", priority: "0.9", changefreq: "daily" },
    { url: "/services", priority: "0.8", changefreq: "weekly" },
    { url: "/about", priority: "0.7", changefreq: "monthly" },
    { url: "/contact", priority: "0.6", changefreq: "monthly" },
  ];

  pages.push(...staticPages);

  // Dynamic property pages
  const propertyFiles = await glob("public/data/properties/property-*.json");

  for (const file of propertyFiles) {
    const property = JSON.parse(fs.readFileSync(file, "utf8"));
    pages.push({
      url: `/properties/${property.id}`,
      priority: "0.8",
      changefreq: "weekly",
      lastmod: property.updated_date || new Date().toISOString().split("T")[0],
    });
  }

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}
  </url>`,
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", xml);
  console.log(`Generated sitemap with ${pages.length} pages`);
};

generateSitemap().catch(console.error);
```

## Testing Configuration

### Vitest Configuration (`vitest.config.js`)

```javascript
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.js"],
    coverage: {
      reporter: ["text", "html", "lcov"],
      exclude: ["node_modules/", "dist/", "tests/", "**/*.test.js"],
    },
  },
});
```

### Playwright Configuration (`playwright.config.js`)

```javascript
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    baseURL: "http://localhost:4173",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
  ],

  webServer: {
    command: "npm run preview",
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
});
```

## Deployment Configuration

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

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

      - name: Build project
        run: npm run build
        env:
          VITE_SITE_URL: ${{ secrets.SITE_URL }}
          VITE_GA_ID: ${{ secrets.GA_ID }}

      - name: Generate sitemap
        run: npm run generate-sitemap

      - name: Deploy to GitHub Pages
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

This build system provides:

- **Fast development** with HMR and optimized bundling
- **Production optimization** with code splitting and minification
- **Asset processing** with image optimization and font loading
- **Quality assurance** through testing and validation
- **Automated deployment** with CI/CD pipeline

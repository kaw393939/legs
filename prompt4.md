📌 PHASE 4 PROMPT — "Legs on the Ground" Technical Architecture
(Building on Phase 3 design specs — Creating vanilla JS component architecture for easy management)

**Prerequisites**:

- Phase 1 Complete ✅ - Enhanced business analysis, competitive analysis, revenue model, risk assessment
- Phase 2 Complete ✅ - Brand guide, visual identity system, content strategy, Golden Ratio design tokens
- Phase 3 Complete ✅ - Information architecture, wireframes, component specs, responsive strategy

**Current Phase Goals**:

- **Phase 4**: Create technical architecture for vanilla JS component-based system
- **Phase 5 Prep**: Establish development foundation for easy content management and updates

## 🎯 Phase 4: Technical Architecture & Development Foundation

### 4.1 Technical Stack Decision (`docs/tech-stack.md`)

Define the vanilla JavaScript component architecture:

```markdown
<!-- summary: Technical stack and architecture decisions for maintainable vanilla JS site -->

# Technical Stack

## Core Technologies

- **HTML5**: Semantic markup with component-based structure
- **CSS3**: Modern CSS with custom properties, grid, flexbox
- **Vanilla JavaScript (ES6+)**: Component system, DOM manipulation, state management
- **Build Tools**: Vite for development server and production builds
- **Deployment**: GitHub Pages with automated CI/CD

## Architecture Philosophy

- **Component-Based**: Reusable, self-contained components
- **Content-Driven**: Easy content updates without touching code
- **Performance-First**: Minimal dependencies, optimized loading
- **Maintainable**: Clear separation of concerns, modular structure

## Component System

### Web Components Approach

- **Custom Elements**: Define reusable HTML elements
- **Shadow DOM**: Encapsulated styling and behavior
- **HTML Templates**: Declarative component templates
- **ES6 Modules**: Modern import/export for component organization

### Content Management Strategy

- **JSON Data Files**: Structured content in `/src/data/`
- **Template System**: HTML templates with placeholder replacement
- **Dynamic Rendering**: JavaScript-driven content injection
- **Static Generation**: Build-time content compilation

## Development Tools

- **Vite**: Fast development server, hot module replacement
- **PostCSS**: CSS processing, autoprefixer, minification
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Stylelint**: CSS linting and conventions
```

### 4.2 Component Architecture (`docs/component-architecture.md`)

Transform Phase 3 component specs into vanilla JS architecture:

```markdown
<!-- summary: Vanilla JavaScript component system architecture -->

# Component Architecture

## Component Structure

Each component follows a consistent pattern:
```

/src/components/
├── Header/
│ ├── Header.js ← Component class
│ ├── Header.css ← Component styles
│ ├── Header.html ← Component template
│ └── Header.test.js ← Component tests
├── Hero/
├── PropertyCard/
├── ContactForm/
└── Footer/

````

## Base Component Class
```javascript
// /src/components/BaseComponent.js
export class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    await this.loadTemplate();
    this.loadStyles();
    this.bindEvents();
    this.updateContent();
  }

  async loadTemplate() {
    const response = await fetch(`/components/${this.constructor.name}/${this.constructor.name}.html`);
    const template = await response.text();
    this.shadowRoot.innerHTML = template;
  }

  loadStyles() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/components/${this.constructor.name}/${this.constructor.name}.css`;
    this.shadowRoot.appendChild(link);
  }

  bindEvents() {
    // Override in child components
  }

  updateContent() {
    // Override in child components
  }
}
````

## Core Components

### Header Component

```javascript
// /src/components/Header/Header.js
import { BaseComponent } from '../BaseComponent.js';
import { NavigationData } from '../../data/navigation.js';

export class Header extends BaseComponent {
  static get observedAttributes() {
    return ['variant', 'transparent'];
  }

  updateContent() {
    const nav = this.shadowRoot.querySelector('.nav-links');
    NavigationData.main.forEach((item) => {
      const link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.label;
      link.className = 'nav-link';
      nav.appendChild(link);
    });
  }

  bindEvents() {
    const mobileToggle = this.shadowRoot.querySelector('.mobile-toggle');
    const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');

    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
}

customElements.define('site-header', Header);
```

### Property Card Component

```javascript
// /src/components/PropertyCard/PropertyCard.js
import { BaseComponent } from '../BaseComponent.js';

export class PropertyCard extends BaseComponent {
  static get observedAttributes() {
    return ['property-id', 'variant'];
  }

  get propertyId() {
    return this.getAttribute('property-id');
  }

  async updateContent() {
    if (!this.propertyId) return;

    const propertyData = await this.fetchPropertyData(this.propertyId);
    this.populateTemplate(propertyData);
  }

  async fetchPropertyData(id) {
    // Fetch from JSON file or API
    const response = await fetch(`/data/properties/${id}.json`);
    return await response.json();
  }

  populateTemplate(data) {
    const elements = {
      title: this.shadowRoot.querySelector('.property-title'),
      price: this.shadowRoot.querySelector('.property-price'),
      location: this.shadowRoot.querySelector('.property-location'),
      image: this.shadowRoot.querySelector('.property-image'),
      description: this.shadowRoot.querySelector('.property-description'),
    };

    elements.title.textContent = data.title;
    elements.price.textContent = data.price;
    elements.location.textContent = data.location;
    elements.image.src = data.images[0];
    elements.description.textContent = data.description;
  }
}

customElements.define('property-card', PropertyCard);
```

## Content Management Integration

- **Data-Driven Components**: Components read from JSON files
- **Template Placeholders**: `{{variable}}` syntax for content injection
- **Dynamic Loading**: Async data fetching for complex components
- **State Management**: Simple state store for component communication

````

### 4.3 File Structure & Organization (`docs/file-structure.md`)

Define the complete project structure for maintainability:

```markdown
<!-- summary: Complete file structure for vanilla JS component architecture -->

# File Structure & Organization

## Source Code Structure
````

/src/
├── index.html ← Main entry point
├── pages/ ← Additional pages
│ ├── about.html
│ ├── services.html
│ ├── properties.html
│ └── contact.html
├── components/ ← Reusable components
│ ├── BaseComponent.js ← Base component class
│ ├── Header/
│ │ ├── Header.js
│ │ ├── Header.css
│ │ ├── Header.html
│ │ └── Header.test.js
│ ├── Hero/
│ ├── PropertyCard/
│ ├── ContactForm/
│ ├── TestimonialSlider/
│ └── Footer/
├── styles/ ← Global styles
│ ├── main.css ← Main stylesheet
│ ├── tokens.css ← Design tokens from Phase 2
│ ├── base.css ← Reset and base styles
│ ├── layout.css ← Grid and layout utilities
│ └── utilities.css ← Utility classes
├── scripts/ ← Global JavaScript
│ ├── main.js ← Main application entry
│ ├── router.js ← Simple client-side routing
│ ├── state.js ← Global state management
│ └── utils.js ← Utility functions
├── data/ ← Content management
│ ├── site.json ← Site-wide data
│ ├── navigation.json ← Navigation structure
│ ├── properties/ ← Property listings
│ │ ├── property-1.json
│ │ ├── property-2.json
│ │ └── index.json ← Properties list
│ ├── testimonials.json ← Client testimonials
│ ├── team.json ← Team member data
│ └── content/ ← Page content
│ ├── home.json
│ ├── about.json
│ └── services.json
├── assets/ ← Static assets
│ ├── images/
│ │ ├── properties/ ← Property images
│ │ ├── team/ ← Team photos
│ │ ├── icons/ ← Icon set
│ │ └── brand/ ← Brand assets
│ ├── fonts/ ← Web fonts
│ └── documents/ ← PDFs, brochures
└── templates/ ← Page templates
├── page-template.html
├── property-template.html
└── blog-template.html

```

## Asset Organization
- **Images**: Organized by category, optimized formats (WebP, AVIF)
- **Fonts**: Self-hosted web fonts for performance
- **Icons**: SVG icon system with sprite sheet
- **Documents**: Brochures, contracts, legal documents

## Content Management Structure
- **JSON-Based**: All content in structured JSON files
- **Hierarchical**: Nested content structure mirrors site architecture
- **Localized**: Separate files for English/Spanish content
- **Versioned**: Content changes tracked in git
```

### 4.4 Content Management System (`docs/content-management.md`)

Create an easy-to-update content system:

````markdown
<!-- summary: JSON-based content management system for easy updates -->

# Content Management System

## Content Strategy

The site uses a JSON-based content management system that allows non-technical users to update content without touching code.

## Content Structure

### Site-Wide Data (`/src/data/site.json`)

```json
{
  "meta": {
    "title": "Legs on The Ground - Puerto Rico Real Estate Investment Services",
    "description": "Professional real estate investment services for mainland US investors looking to purchase, manage, and renovate properties in Puerto Rico.",
    "keywords": [
      "Puerto Rico real estate",
      "property investment",
      "property management"
    ],
    "author": "Legs on The Ground",
    "og_image": "/assets/images/brand/og-image.jpg"
  },
  "contact": {
    "phone": "+1-787-XXX-XXXX",
    "email": "info@legsontheground.com",
    "address": {
      "street": "123 Main Street",
      "city": "San Juan",
      "state": "Puerto Rico",
      "zip": "00901"
    }
  },
  "social": {
    "facebook": "https://facebook.com/legsontheground",
    "instagram": "https://instagram.com/legsontheground",
    "linkedin": "https://linkedin.com/company/legsontheground"
  }
}
```
````

### Navigation Data (`/src/data/navigation.json`)

```json
{
  "main": [
    { "label": "Home", "url": "/", "active": true },
    {
      "label": "Services",
      "url": "/services",
      "dropdown": [
        { "label": "Property Management", "url": "/services/management" },
        { "label": "Investment Consulting", "url": "/services/consulting" },
        { "label": "Renovation Services", "url": "/services/renovation" }
      ]
    },
    { "label": "Properties", "url": "/properties" },
    { "label": "About", "url": "/about" },
    { "label": "Contact", "url": "/contact" }
  ],
  "footer": [
    { "label": "Privacy Policy", "url": "/privacy" },
    { "label": "Terms of Service", "url": "/terms" },
    { "label": "Sitemap", "url": "/sitemap" }
  ]
}
```

### Property Data (`/src/data/properties/property-1.json`)

```json
{
  "id": "pr-001",
  "title": "Beachfront Villa in Rincon",
  "price": "$450,000",
  "location": "Rincon, Puerto Rico",
  "status": "available",
  "type": "villa",
  "bedrooms": 3,
  "bathrooms": 2,
  "sqft": 2100,
  "lot_size": "0.25 acres",
  "year_built": 2005,
  "description": "Stunning beachfront villa with panoramic ocean views...",
  "features": [
    "Ocean views from every room",
    "Private beach access",
    "Recently renovated kitchen",
    "Covered outdoor dining area",
    "Hurricane shutters"
  ],
  "images": [
    "/assets/images/properties/pr-001/exterior-1.jpg",
    "/assets/images/properties/pr-001/living-room.jpg",
    "/assets/images/properties/pr-001/kitchen.jpg",
    "/assets/images/properties/pr-001/master-bedroom.jpg",
    "/assets/images/properties/pr-001/ocean-view.jpg"
  ],
  "investment_data": {
    "cap_rate": "8.2%",
    "rental_income": "$3,200/month",
    "roi_projection": "12-15%"
  }
}
```

### Page Content (`/src/data/content/home.json`)

```json
{
  "hero": {
    "headline": "Your Gateway to Puerto Rico Real Estate Investment",
    "subheadline": "Professional property management and investment services for mainland US investors",
    "cta_primary": {
      "text": "Browse Properties",
      "url": "/properties"
    },
    "cta_secondary": {
      "text": "Learn More",
      "url": "/about"
    },
    "background_image": "/assets/images/hero/pr-beach-sunset.jpg"
  },
  "services_preview": {
    "title": "Comprehensive Real Estate Services",
    "subtitle": "From acquisition to management, we handle every aspect of your Puerto Rico investment",
    "services": [
      {
        "title": "Property Management",
        "description": "Full-service property management including tenant screening, rent collection, and maintenance coordination.",
        "icon": "management",
        "url": "/services/management"
      },
      {
        "title": "Investment Consulting",
        "description": "Expert guidance on market analysis, property evaluation, and investment strategy development.",
        "icon": "consulting",
        "url": "/services/consulting"
      },
      {
        "title": "Renovation Services",
        "description": "Complete renovation project management from planning to completion with local contractor networks.",
        "icon": "renovation",
        "url": "/services/renovation"
      }
    ]
  },
  "testimonials": {
    "title": "What Our Clients Say",
    "testimonials": [
      {
        "name": "Sarah Johnson",
        "location": "Miami, FL",
        "text": "Legs on The Ground made my Puerto Rico investment seamless. Their local expertise and professional management have exceeded my expectations.",
        "rating": 5,
        "image": "/assets/images/testimonials/sarah-j.jpg"
      }
    ]
  }
}
```

## Content Update Workflow

1. **Identify Content**: Locate the appropriate JSON file
2. **Edit Content**: Update JSON data using any text editor
3. **Validate JSON**: Ensure valid JSON syntax
4. **Test Locally**: Preview changes in development
5. **Commit Changes**: Git commit and push to deploy

## Multi-language Support

- **Structure**: `/src/data/en/` and `/src/data/es/` directories
- **Language Detection**: Browser language or user selection
- **Content Loading**: Dynamic content loading based on language
- **Fallbacks**: English content as fallback for missing translations

````

### 4.5 Build & Development Workflow (`docs/development-workflow.md`)

Establish development and deployment processes:

```markdown
<!-- summary: Development workflow and build process for vanilla JS site -->

# Development Workflow

## Local Development Setup

### Prerequisites
- Node.js 18+ and npm
- Git
- Modern web browser with developer tools

### Initial Setup
```bash
# Clone repository
git clone https://github.com/kaw393939/legs.git
cd legs

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
````

### Development Commands

```json
{
  "scripts": {
    "dev": "vite serve src --port 3000",
    "build": "vite build src --outDir ../dist",
    "preview": "vite preview dist --port 4000",
    "test": "vitest",
    "lint": "eslint src/**/*.js",
    "lint:fix": "eslint src/**/*.js --fix",
    "style:lint": "stylelint src/**/*.css",
    "style:fix": "stylelint src/**/*.css --fix",
    "format": "prettier --write src/**/*.{js,css,html,json}",
    "validate": "npm run lint && npm run style:lint && npm run test",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

## Build Configuration (`vite.config.js`)

```javascript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve('src/index.html'),
        about: resolve('src/pages/about.html'),
        services: resolve('src/pages/services.html'),
        properties: resolve('src/pages/properties.html'),
        contact: resolve('src/pages/contact.html'),
      },
    },
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    devSourcemap: true,
  },
});
```

## Code Quality Configuration

### ESLint Configuration (`.eslintrc.js`)

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
  },
};
```

### Prettier Configuration (`.prettierrc`)

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

## Git Workflow

- **Main Branch**: Production-ready code
- **Feature Branches**: `feature/component-name`
- **Commit Convention**: Conventional commits format
- **Pull Requests**: Required for main branch
- **Automated Deployment**: GitHub Actions to GitHub Pages

## Testing Strategy

- **Unit Tests**: Component functionality testing
- **Integration Tests**: Component interaction testing
- **E2E Tests**: User journey testing
- **Performance Tests**: Core Web Vitals monitoring
- **Accessibility Tests**: WCAG compliance checking

````

### 4.6 Performance & SEO Strategy (`docs/performance-seo.md`)

Define optimization and SEO approach:

```markdown
<!-- summary: Performance optimization and SEO strategy for vanilla JS site -->

# Performance & SEO Strategy

## Performance Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Techniques

#### Image Optimization
- **Modern Formats**: WebP/AVIF with fallbacks
- **Responsive Images**: `srcset` and `sizes` attributes
- **Lazy Loading**: Intersection Observer API
- **Compression**: Optimized file sizes without quality loss

#### JavaScript Optimization
- **ES6 Modules**: Tree shaking and code splitting
- **Dynamic Imports**: Load components on demand
- **Minimal Dependencies**: Vanilla JS approach reduces bundle size
- **Service Worker**: Cache static assets and API responses

#### CSS Optimization
- **Critical CSS**: Inline above-the-fold styles
- **CSS Custom Properties**: Efficient design token system
- **Modern CSS**: Grid and Flexbox for layout efficiency
- **Purge Unused CSS**: Remove unused styles in build process

### Performance Monitoring
```javascript
// /src/scripts/performance.js
export class PerformanceMonitor {
  static measureCoreWebVitals() {
    // LCP measurement
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // FID measurement
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // CLS measurement
    new PerformanceObserver((entryList) => {
      let clsValue = 0;
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }
}
````

## SEO Strategy

### Technical SEO

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Meta Tags**: Dynamic meta tag generation per page
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: Structured data for rich snippets
- **XML Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine crawling directives

### Content SEO

- **Keyword Strategy**: Target Puerto Rico real estate terms
- **Local SEO**: Puerto Rico location-based optimization
- **Content Structure**: Clear information hierarchy
- **Internal Linking**: Strategic link structure
- **Multilingual SEO**: English/Spanish content optimization

### SEO Implementation

```javascript
// /src/scripts/seo.js
export class SEOManager {
  static updateMetaTags(pageData) {
    // Update title
    document.title = pageData.meta.title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    metaDesc.setAttribute('content', pageData.meta.description);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    ogTitle.setAttribute('content', pageData.meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    ogDesc.setAttribute('content', pageData.meta.description);

    const ogImage = document.querySelector('meta[property="og:image"]');
    ogImage.setAttribute('content', pageData.meta.og_image);
  }

  static generateSchemaMarkup(type, data) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
```

## Analytics Integration

- **Google Analytics 4**: Enhanced ecommerce tracking
- **Google Search Console**: Search performance monitoring
- **Core Web Vitals**: Real user experience monitoring
- **Conversion Tracking**: Form submissions, phone calls
- **Heatmap Tools**: User behavior analysis

```

## Expected Phase 4 Deliverables

1. **Complete Technical Architecture**: All 6 documentation files with detailed specifications
2. **Component System Foundation**: Base component class and architecture patterns
3. **Content Management System**: JSON-based content structure for easy updates
4. **Development Environment**: Vite configuration, build process, code quality tools
5. **Performance Strategy**: Optimization techniques and monitoring setup
6. **SEO Foundation**: Technical SEO implementation and content strategy

## Phase 4 → Phase 5 Transition

Phase 4 concludes with everything needed for Phase 5 development:
- ✅ Technical stack decisions finalized
- ✅ Component architecture established
- ✅ Content management system designed
- ✅ Development workflow configured
- ✅ Performance and SEO strategies defined
- ✅ File structure and organization complete

**Phase 5 Focus**: Build Sprint 1 - Implement core components and pages using the vanilla JS architecture established in Phase 4.
```

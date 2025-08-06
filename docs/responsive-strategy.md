<!-- summary: Comprehensive responsive design strategy using Golden Ratio breakpoints -->

# Responsive Design Strategy

## Breakpoint System (Golden Ratio Based)

### Mathematical Foundation

```
Base: 320px (minimum mobile width)
Each breakpoint: Previous × φ (1.618)

320px × 1.618 = 518px
518px × 1.618 = 838px
838px × 1.618 = 1356px
1356px × 1.618 = 2193px
```

### Breakpoint Definitions

```css
/* Mobile First Approach */
:root {
  --bp-xs: 20rem; /* 320px - Mobile portrait */
  --bp-sm: 32.36rem; /* 518px - Mobile landscape */
  --bp-md: 52.36rem; /* 838px - Tablet portrait */
  --bp-lg: 84.72rem; /* 1356px - Desktop */
  --bp-xl: 137.08rem; /* 2193px - Large desktop */
}

/* Usage in media queries */
@media (min-width: 32.36rem) {
  /* Mobile landscape and up */
}
@media (min-width: 52.36rem) {
  /* Tablet and up */
}
@media (min-width: 84.72rem) {
  /* Desktop and up */
}
@media (min-width: 137.08rem) {
  /* Large desktop */
}
```

## Device-Specific Adaptations

### Mobile Portrait (320px - 517px)

```
Layout Characteristics:
- Single column everything
- Full-width buttons and forms
- Stacked hero content
- Collapsed navigation (hamburger)
- Minimal spacing (φ⁻¹ reduction)

Navigation:
- Hamburger menu with slide-out drawer
- Full-screen overlay menu
- Touch-friendly 44px minimum touch targets
- Vertical menu items with φ spacing

Content Adaptations:
- Hero: Image top, content bottom
- Services: Single column cards, full width
- Testimonials: Single card with horizontal scroll
- Footer: Single column, accordion-style sections

Typography Scale (Reduced):
- Display: φ² × base (42px) instead of φ³
- H1: φ × base (26px) instead of φ²
- Body: Remains 16px base
- Smaller line-heights for compact reading
```

### Mobile Landscape (518px - 837px)

```
Layout Characteristics:
- Still primarily single column
- Some two-column opportunities (forms, stats)
- Horizontal hero layout returns
- Enhanced spacing from mobile portrait

Content Adaptations:
- Hero: Side-by-side on landscape orientation
- Services: 2-column grid on larger screens
- Navigation: Still hamburger, but wider drawer
- Forms: Two-column for name/email pairs

Grid System:
- 2-column grid with φ gutters
- Flexible column widths (not strict φ ratio)
- Focus on usability over mathematical precision
```

### Tablet Portrait (838px - 1355px)

```
Layout Characteristics:
- Two-column layouts become standard
- Sidebar content appears
- Enhanced navigation (may show more items)
- Standard spacing returns

Navigation:
- Horizontal navigation may appear
- Simplified mega menu (fewer columns)
- Logo and main CTA always visible

Content Adaptations:
- Hero: Full side-by-side layout
- Services: 2-3 column grid
- About: Two-column text/image layouts
- Case studies: Grid layout with 2 columns
- Forms: Full horizontal layout

Sidebar Usage:
- Service pages: 38.2% / 61.8% layout
- Blog/articles: Author info, related content
- Contact: Multiple contact options side-by-side
```

### Desktop (1356px - 2192px)

```
Layout Characteristics:
- Full multi-column layouts
- Maximum content width: 1200px
- All features enabled
- Standard Golden Ratio spacing throughout

Navigation:
- Full horizontal navigation
- Mega menu with 4-column layout
- All interactive features enabled
- Hover states and animations

Content Features:
- Hero: Full Golden Ratio proportions
- Services: 4-column grid
- Testimonials: 3-column showcase
- Case studies: Advanced grid with filters
- Footer: 4-column comprehensive layout

Advanced Features:
- Sticky navigation
- Parallax scrolling (subtle)
- Advanced form layouts
- Interactive elements
- Full animation suite
```

### Large Desktop (2193px+)

```
Layout Characteristics:
- Enhanced spacing and typography
- Larger images and media
- Potential for wider container (1400px max)
- Focus on visual impact

Content Enhancements:
- Larger hero sections
- Enhanced typography scale
- More generous spacing
- Advanced layout experiments
- Premium visual treatments
```

## Component Responsive Behavior

### Header Component

```
Mobile (320px+):
┌─────────────────────────────┐
│ [Logo] [☰]                  │
└─────────────────────────────┘
- Height: 56px
- Logo: 28px height
- Hamburger: 24px icon

Tablet (838px+):
┌─────────────────────────────────────────────┐
│ [Logo] [Nav] [Nav] [Nav] [CTA]              │
└─────────────────────────────────────────────┘
- Height: 72px
- Logo: 36px height
- Navigation items visible

Desktop (1356px+):
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Nav] [Nav] [Nav] [Nav] [Mega▼] [CTA]               │
└─────────────────────────────────────────────────────────────┘
- Height: 80px
- Logo: 48px height
- Full navigation with mega menu
```

### Header Responsive CSS

```css
.header {
  height: calc(var(--golden-ratio) * 40px);
  transition: all 0.3s ease;
}

@media (min-width: 52.36rem) {
  .header {
    height: calc(var(--golden-ratio-squared) * 30px);
  }
}

@media (min-width: 84.72rem) {
  .header {
    height: calc(var(--golden-ratio-squared) * 32px);
  }
}

.header__logo {
  height: calc(var(--header-height) * 0.6);
}

.header__nav {
  display: none;
}

@media (min-width: 52.36rem) {
  .header__nav {
    display: flex;
  }

  .header__mobile-toggle {
    display: none;
  }
}
```

### Hero Section

```
Mobile (320px+):
┌─────────────────────────────┐
│ [Hero Image - Full Width]   │
│                             │
│ Headline                    │
│ Subheadline                 │
│ [CTA Button - Full Width]   │
│ [Secondary CTA - Full Width]│
└─────────────────────────────┘

Tablet (838px+):
┌─────────────────────────────────────────────┐
│ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Content     │ │ Hero Image              │ │
│ │ Headline    │ │                         │ │
│ │ Subheadline │ │                         │ │
│ │ [CTA]       │ │                         │ │
│ └─────────────┘ └─────────────────────────┘ │
│ 45% width       55% width                   │
└─────────────────────────────────────────────┘

Desktop (1356px+):
┌─────────────────────────────────────────────────────────────┐
│ ┌─────────────────────┐ ┌─────────────────────────────────┐ │
│ │ Content Area        │ │ Hero Image                      │ │
│ │ [Golden Ratio]      │ │ [Golden Rectangle]              │ │
│ │ 38.2% width         │ │ 61.8% width                     │ │
│ └─────────────────────┘ └─────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Hero Responsive CSS

```css
.hero__container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  align-items: center;
}

@media (min-width: 52.36rem) {
  .hero__container {
    grid-template-columns: 45fr 55fr;
    gap: var(--space-2xl);
  }
}

@media (min-width: 84.72rem) {
  .hero__container {
    grid-template-columns: 38.2fr 61.8fr;
  }
}

.hero__content {
  text-align: center;
}

@media (min-width: 52.36rem) {
  .hero__content {
    text-align: left;
  }
}

.hero__actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

@media (min-width: 52.36rem) {
  .hero__actions {
    flex-direction: row;
    justify-content: flex-start;
  }
}

.hero__image {
  order: -1;
}

@media (min-width: 52.36rem) {
  .hero__image {
    order: 0;
  }
}
```

### Service Cards Grid

```
Mobile (320px+):
┌─────────────────────────────┐
│ [Service Card 1 - Full]     │
│ [Service Card 2 - Full]     │
│ [Service Card 3 - Full]     │
│ [Service Card 4 - Full]     │
└─────────────────────────────┘

Tablet (838px+):
┌─────────────────────────────────────────────┐
│ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Service 1   │ │ Service 2               │ │
│ └─────────────┘ └─────────────────────────┘ │
│ ┌─────────────┐ ┌─────────────────────────┐ │
│ │ Service 3   │ │ Service 4               │ │
│ └─────────────┘ └─────────────────────────┘ │
└─────────────────────────────────────────────┘

Desktop (1356px+):
┌─────────────────────────────────────────────────────────────┐
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐             │
│ │Service 1│ │Service 2│ │Service 3│ │Service 4│             │
│ │         │ │         │ │         │ │         │             │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘             │
└─────────────────────────────────────────────────────────────┘
```

### Service Cards Responsive CSS

```css
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 52.36rem) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl);
  }
}

@media (min-width: 84.72rem) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## Typography Responsive Scaling

### Font Size Adaptations

```css
/* Base mobile-first typography */
:root {
  --fs-display: 2.618rem; /* 42px on mobile */
  --fs-h1: 2.058rem; /* 33px on mobile */
  --fs-h2: 1.618rem; /* 26px on mobile */
  --fs-body: 1rem; /* 16px baseline */
}

/* Tablet scaling */
@media (min-width: 52.36rem) {
  :root {
    --fs-display: 3.236rem; /* Scaled up for tablet */
    --fs-h1: 2.618rem; /* Approaches desktop size */
    --fs-h2: 2.058rem; /* More generous sizing */
  }
}

/* Desktop full scale */
@media (min-width: 84.72rem) {
  :root {
    --fs-display: 4.236rem; /* Full φ³ scale */
    --fs-h1: 2.618rem; /* Full φ² scale */
    --fs-h2: 2.058rem; /* Standard hierarchy */
  }
}
```

### Responsive Typography Implementation

```css
/* Fluid typography using clamp() */
.hero__headline {
  font-size: clamp(var(--fs-h1), calc(2rem + 4vw), var(--fs-display));
}

.section__title {
  font-size: clamp(var(--fs-h2), calc(1.5rem + 2vw), var(--fs-h1));
}

/* Container queries for component-level responsive typography */
@container (min-width: 400px) {
  .card__title {
    font-size: var(--fs-h2);
  }
}

@container (min-width: 600px) {
  .card__title {
    font-size: calc(var(--fs-h2) * 1.2);
  }
}
```

### Line Height Adaptations

```css
/* Tighter line heights on mobile for space efficiency */
@media (max-width: 52.35rem) {
  :root {
    --lh-tight: 1.2;
    --lh-normal: 1.4;
    --lh-loose: 1.6;
  }
}

/* Standard line heights on larger screens */
@media (min-width: 52.36rem) {
  :root {
    --lh-tight: 1.272; /* φ⁻¹ + 0.654 */
    --lh-normal: 1.618; /* φ */
    --lh-loose: 2.058; /* φ + 0.44 */
  }
}
```

## Spacing Responsive System

### Mobile Spacing Reduction

```css
/* Mobile: Reduce spacing by φ⁻¹ factor */
@media (max-width: 52.35rem) {
  :root {
    --space-xs: 0.191rem; /* ~3px */
    --space-sm: 0.309rem; /* ~5px */
    --space-md: 0.5rem; /* 8px */
    --space-lg: 0.809rem; /* ~13px */
    --space-xl: 1.309rem; /* ~21px */
    --space-2xl: 2.118rem; /* ~34px */
    --space-3xl: 3.427rem; /* ~55px */
  }
}

/* Tablet and up: Standard spacing */
@media (min-width: 52.36rem) {
  :root {
    --space-xs: 0.309rem; /* ~5px */
    --space-sm: 0.5rem; /* 8px */
    --space-md: 0.809rem; /* ~13px */
    --space-lg: 1.309rem; /* ~21px */
    --space-xl: 2.118rem; /* ~34px */
    --space-2xl: 3.427rem; /* ~55px */
    --space-3xl: 5.545rem; /* ~89px */
  }
}
```

### Dynamic Spacing Implementation

```css
/* Fluid spacing using clamp() */
.section {
  padding: clamp(var(--space-xl), 8vw, var(--space-3xl)) 0;
}

.container {
  padding-left: clamp(var(--space-md), 4vw, var(--space-xl));
  padding-right: clamp(var(--space-md), 4vw, var(--space-xl));
}

/* Container-based spacing */
.card {
  padding: var(--space-lg);
}

@container (min-width: 400px) {
  .card {
    padding: var(--space-xl);
  }
}

@container (min-width: 600px) {
  .card {
    padding: var(--space-2xl);
  }
}
```

## Images and Media Responsive Strategy

### Image Responsive Behavior

```css
/* Base responsive images */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Hero images with Golden Rectangle aspect ratio */
.hero-image {
  aspect-ratio: var(--golden-ratio) / 1;
  object-fit: cover;
  width: 100%;
}

/* Service card images */
.service-card img {
  aspect-ratio: var(--golden-ratio) / 1;
  object-fit: cover;
  width: 100%;
  border-radius: var(--radius-md);
}

/* Testimonial profile images */
.testimonial-photo {
  width: calc(var(--space-2xl) * var(--golden-ratio));
  height: calc(var(--space-2xl) * var(--golden-ratio));
  border-radius: 50%;
  object-fit: cover;
}
```

### Responsive Image Implementation

```css
/* Picture element with art direction */
.hero__image {
  width: 100%;
  height: auto;
}

/* Using CSS to handle different aspect ratios */
@media (max-width: 52.35rem) {
  .hero__image {
    aspect-ratio: 16 / 9; /* Wider on mobile */
  }
}

@media (min-width: 52.36rem) {
  .hero__image {
    aspect-ratio: var(--golden-ratio) / 1; /* Golden rectangle on larger screens */
  }
}

/* Responsive background images */
.hero-section {
  background-image: url('hero-mobile.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 52.36rem) {
  .hero-section {
    background-image: url('hero-tablet.jpg');
  }
}

@media (min-width: 84.72rem) {
  .hero-section {
    background-image: url('hero-desktop.jpg');
  }
}
```

### Video Responsive Containers

```css
.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.video-container iframe,
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Golden ratio video containers for specific content */
.video-container--golden {
  aspect-ratio: var(--golden-ratio) / 1;
}
```

## Form Responsive Adaptations

### Mobile Form Layout

```css
/* Mobile: Stack all form elements */
@media (max-width: 52.35rem) {
  .form-row {
    display: block;
  }

  .form-group {
    margin-bottom: var(--space-lg);
  }

  .btn {
    width: 100%;
    margin-bottom: var(--space-md);
  }

  .form-input,
  .form-select,
  .form-textarea {
    font-size: 16px; /* Prevent zoom on iOS */
  }
}
```

### Desktop Form Layout

```css
/* Desktop: Use Golden Ratio proportions */
@media (min-width: 52.36rem) {
  .form-row {
    display: flex;
    gap: var(--space-lg);
  }

  .form-group-primary {
    flex: var(--golden-ratio); /* φ proportion */
  }

  .form-group-secondary {
    flex: 1; /* 1 proportion */
  }
}

/* Advanced form layouts for larger screens */
@media (min-width: 84.72rem) {
  .contact-form {
    display: grid;
    grid-template-columns: 61.8fr 38.2fr;
    gap: var(--space-2xl);
  }

  .form-main {
    /* Main form fields */
  }

  .form-aside {
    /* Contact information, additional options */
  }
}
```

## Performance Considerations

### Progressive Enhancement

```css
/* Base mobile styles (no media queries) */
.component {
  /* Mobile-first styles */
  display: block;
  width: 100%;
}

/* Enhanced styles for larger screens */
@media (min-width: 52.36rem) {
  .component {
    display: flex;
    width: auto;
    /* Additional enhancements */
  }
}

/* Feature detection for advanced layouts */
@supports (display: grid) {
  .grid-layout {
    display: grid;
  }
}

@supports (aspect-ratio: 1) {
  .image-container {
    aspect-ratio: var(--golden-ratio) / 1;
  }
}
```

### Critical CSS Strategy

```css
/* Critical CSS (inlined) */
/* Base layout styles */
body {
  margin: 0;
  font-family: var(--font-inter);
}
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.hero {
  min-height: 50vh;
}

/* Non-critical CSS (deferred) */
/* Complex animations, decorative elements */
@media (min-width: 84.72rem) {
  .advanced-layout {
    /* Complex desktop layouts */
  }
  .animations {
    /* Motion effects */
  }
}
```

### Container Queries Implementation

```css
/* Container-based responsive design */
.card-container {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .card {
    display: flex;
    align-items: center;
  }
}

@container (min-width: 500px) {
  .card {
    padding: var(--space-xl);
  }

  .card__image {
    aspect-ratio: var(--golden-ratio) / 1;
  }
}
```

## Testing Strategy

### Responsive Testing Checklist

```
□ Test on actual devices, not just browser resizing
□ Verify touch targets are minimum 44px
□ Check text readability at all breakpoints
□ Ensure all interactive elements work on touch
□ Test landscape and portrait orientations
□ Verify performance on slower devices
□ Check accessibility with screen readers
□ Test with slow network connections
□ Verify printing styles work properly
□ Test with browser zoom up to 200%
```

### Device Testing Priority

```
Priority 1 (Must test):
- iPhone 12/13/14 (375px width)
- iPad (768px width)
- MacBook Air (1366px width)
- Common Android phones (360px width)

Priority 2 (Should test):
- iPhone SE (320px width)
- iPad Pro (1024px width)
- Large desktop (1920px width)
- Android tablets (800px width)

Priority 3 (Nice to test):
- Ultra-wide displays (2560px+)
- Foldable devices (various widths)
- E-readers and uncommon devices
```

### Automated Testing Tools

```javascript
// Responsive testing with Playwright
const { test, expect } = require('@playwright/test');

test('responsive layout adapts correctly', async ({ page }) => {
  await page.goto('/');

  // Mobile
  await page.setViewportSize({ width: 320, height: 568 });
  await expect(page.locator('.hero__container')).toHaveCSS(
    'grid-template-columns',
    '1fr',
  );

  // Tablet
  await page.setViewportSize({ width: 838, height: 1112 });
  await expect(page.locator('.hero__container')).toHaveCSS(
    'grid-template-columns',
    '45fr 55fr',
  );

  // Desktop
  await page.setViewportSize({ width: 1356, height: 768 });
  await expect(page.locator('.hero__container')).toHaveCSS(
    'grid-template-columns',
    '38.2fr 61.8fr',
  );
});
```

## Browser Support Strategy

### Progressive Enhancement Approach

```css
/* Base styles for all browsers */
.layout {
  display: block;
}

/* Enhanced for modern browsers */
@supports (display: grid) {
  .layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

/* Fallback for older browsers */
.no-grid .layout {
  display: flex;
  flex-wrap: wrap;
}

.no-grid .layout > * {
  flex: 1 1 250px;
}
```

### Polyfill Strategy

```javascript
// Load polyfills only when needed
if (!CSS.supports('aspect-ratio', '16/9')) {
  import('./polyfills/aspect-ratio-polyfill.js');
}

if (!CSS.supports('container-type', 'inline-size')) {
  import('./polyfills/container-queries-polyfill.js');
}
```

## Performance Optimization

### Image Optimization

```html
<!-- Responsive images with art direction -->
<picture>
  <source
    media="(min-width: 84.72rem)"
    srcset="hero-desktop.webp 1200w, hero-desktop@2x.webp 2400w"
  />
  <source
    media="(min-width: 52.36rem)"
    srcset="hero-tablet.webp 800w, hero-tablet@2x.webp 1600w"
  />
  <img
    src="hero-mobile.webp"
    srcset="hero-mobile@2x.webp 2x"
    alt="Hero image"
    loading="lazy"
  />
</picture>
```

### CSS Loading Strategy

```css
/* Critical CSS */
@media screen {
  /* Above-the-fold styles */
}

/* Non-critical CSS */
@media screen and (min-width: 52.36rem) {
  /* Tablet and desktop enhancements */
}

@media print {
  /* Print styles */
  .header,
  .footer {
    display: none;
  }
  .hero {
    page-break-after: always;
  }
}
```

This comprehensive responsive design strategy ensures the website works beautifully across all devices while maintaining the Golden Ratio design principles and providing optimal performance and user experience at every breakpoint.

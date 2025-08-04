<!-- summary: Complete visual identity and Golden Ratio design system specification -->

# Visual Identity System (Golden Ratio Based)

## Logo Design Concept & Golden Ratio Foundation

### Primary Logo Specifications

#### Design Concept
- **Style**: Modern, professional wordmark with integrated icon
- **Icon Concept**: Stylized combination of:
  - House/building silhouette representing real estate
  - Island outline representing Puerto Rico
  - Connection lines representing mainland-to-island bridge
  - Footprint or foundation elements representing "legs on the ground"

#### Golden Ratio Proportions
```
Logo Construction Grid (Golden Ratio Based):
- Overall dimensions: Golden Rectangle (φ:1 ratio = 1.618:1)
- Icon area: Perfect square (1:1) positioned using Golden Ratio subdivision
- Text area: Complementary rectangle (0.618:1)
- Spacing between icon and text: 0.382 units (1 - φ⁻¹)
- Vertical alignment: Elements aligned to Golden Ratio grid lines
```

#### Logo Variations
1. **Horizontal Layout** (Primary): Icon left, text right - Golden Rectangle proportion
2. **Stacked Layout**: Icon top, text bottom - Maintains φ proportions
3. **Icon Only**: Square format for social media and app icons
4. **Text Only**: Wordmark for situations requiring minimal visual footprint

#### Scalability Requirements
- **Minimum Size**: 
  - Digital: 24px height (maintains legibility on screens)
  - Print: 0.5 inch height (ensures print quality)
- **Maximum Size**: No limit (vector-based scalability)
- **Optimal Sizes**: 
  - Business card: 1 inch width
  - Letterhead: 2 inches width
  - Website header: 200px width
  - Social media: 400px × 400px (square version)

### Logo Usage Guidelines (Golden Ratio Spacing)

#### Clear Space Requirements
- **Minimum Clear Space**: φ × height of logo (1.618 × logo height)
- **Proportional Clear Space**: No other elements within the defined clear space
- **Background Variations**:
  - Primary: Full color on white or light backgrounds
  - Reverse: White version on dark backgrounds (minimum contrast ratio 4.5:1)
  - Monochrome: Single color version when color printing unavailable

#### Prohibited Uses
- ❌ Stretching or distorting proportions
- ❌ Rotating logo at angles
- ❌ Adding effects (drop shadows, gradients, outlines)
- ❌ Placing on backgrounds with insufficient contrast
- ❌ Modifying colors outside brand palette
- ❌ Recreating or approximating the logo

## Color Palette (Golden Ratio Harmonies)

### Color Theory Foundation
Our color palette is built on Golden Ratio principles and color harmony theory:
- **Primary Colors**: Derived from ocean/trust associations
- **Accent Colors**: Positioned using Golden Angle (137.5°) for natural harmony
- **Neutral Colors**: Lightness values using φ progressions
- **Semantic Colors**: Saturation and lightness following Golden Ratio mathematics

### Primary Brand Colors

#### Ocean Blues (Trust & Stability)
```css
--brand-navy: hsl(194, 100%, 15%);     /* #003d4c */
--brand-blue: hsl(194, 92%, 27%);      /* #006c83 */
--brand-cyan: hsl(194, 75%, 44%);      /* #19a7c4 */
```

**Usage Guidelines**:
- **Navy**: Primary headers, CTAs, professional communications
- **Blue**: Main brand applications, links, primary elements
- **Cyan**: Interactive elements, highlights, energy accents

**Accessibility**: All blues meet WCAG AA standards when paired with white text

#### Caribbean Accents (Golden Angle Harmony)
```css
--accent-turquoise: hsl(174, 72%, 56%); /* #40e0d0 */
--accent-coral: hsl(0, 85%, 70%);       /* #ff6b6b */
```

**Usage Guidelines**:
- **Turquoise**: Caribbean aspiration, imagery overlays, tropical elements
- **Coral**: Warmth, human connection, testimonials, call-out boxes

**Golden Angle Theory**: 137.5° separation creates naturally pleasing color relationships

#### Neutral Palette (φ Lightness Progression)
```css
--sand-light: hsl(45, 20%, 97%);       /* #faf9f7 */
--sand-medium: hsl(45, 15%, 83%);      /* #d6d3ce */
--sand-dark: hsl(45, 8%, 55%);         /* #8c8a85 */
```

**Usage Guidelines**:
- **Light**: Clean backgrounds, card backgrounds, subtle sections
- **Medium**: Dividers, borders, subtle emphasis
- **Dark**: Secondary text, icons, subtle elements

#### Semantic Colors (Golden Ratio Saturation)
```css
--success: hsl(140, 61%, 36%);         /* #24a148 */
--warning: hsl(38, 92%, 50%);          /* #f5a623 */
--error: hsl(4, 76%, 50%);             /* #d0342c */
```

#### Text Color Hierarchy (φ Lightness Steps)
```css
--text-primary: hsl(0, 0%, 10%);       /* #1a1a1a */
--text-secondary: hsl(0, 0%, 33%);     /* #545454 */
--text-muted: hsl(0, 0%, 53%);         /* #878787 */
```

### Color Usage Psychology

#### Brand Navy (#003d4c)
- **Emotion**: Trust, stability, depth
- **Usage**: Primary CTAs, headers, important information
- **Pairing**: Excellent contrast with white, sand-light
- **Avoid**: Large text blocks (can be too heavy)

#### Brand Blue (#006c83)
- **Emotion**: Professional confidence, reliability
- **Usage**: Main brand elements, navigation, primary interactions
- **Pairing**: Works with all neutrals and accent colors
- **Avoid**: Overuse (maintain color hierarchy)

#### Brand Cyan (#19a7c4)
- **Emotion**: Energy, action, approachability
- **Usage**: Interactive elements, hover states, highlights
- **Pairing**: Excellent accent to navy and blue
- **Avoid**: Large backgrounds (can be overwhelming)

#### Turquoise (#40e0d0)
- **Emotion**: Caribbean aspiration, tropical luxury
- **Usage**: Accent elements, imagery overlays, special callouts
- **Pairing**: Beautiful with navy, elegant with coral
- **Avoid**: Primary text (accessibility concerns)

#### Coral (#ff6b6b)
- **Emotion**: Warmth, human connection, approachability
- **Usage**: Testimonials, personal elements, warm accents
- **Pairing**: Softens the blue palette, adds warmth
- **Avoid**: Professional communications (maintain authority)

## Typography System (Golden Ratio Perfected)

### Font Selection Rationale

#### Primary Font: Inter
- **Classification**: Modern geometric sans-serif
- **Characteristics**: 
  - Excellent screen readability
  - Professional yet approachable
  - Extensive weight and language support
  - Optimized for digital interfaces

**Weight Applications**:
- **Inter Regular (400)**: Body text, captions, general content
- **Inter Medium (500)**: Emphasized text, form labels, navigation
- **Inter Semi-Bold (600)**: Subheadings, card titles, important elements
- **Inter Bold (700)**: Main headings, hero text, strong emphasis

#### Secondary Font: Playfair Display
- **Classification**: Transitional serif with high contrast
- **Characteristics**:
  - Elegant and sophisticated
  - Caribbean-inspired refinement
  - Excellent for display purposes
  - Adds warmth to otherwise technical content

**Usage Applications**:
- **Playfair Regular (400)**: Elegant quotes, testimonial text
- **Playfair Bold (700)**: Special headings, hero statements, brand moments

### Golden Ratio Typography Scale

#### Mathematical Foundation
```
Base size: 16px (1rem)
Golden Ratio: φ = 1.618033988749895
Each step: previous size × φ or previous size ÷ φ
```

#### Complete Type Scale
```css
:root {
  /* Golden Ratio Typography Scale */
  --fs-caption: 0.618rem;      /* ~9.89px - Fine print, captions */
  --fs-body-sm: 0.75rem;       /* 12px - Small text, labels */
  --fs-body: 1rem;             /* 16px - Base body text */
  --fs-body-lg: 1.125rem;      /* 18px - Lead paragraphs */
  --fs-h4: 1.272rem;           /* ~20.35px - Card titles, small headings */
  --fs-h3: 1.618rem;           /* ~25.89px - Sub-section headings */
  --fs-h2: 2.058rem;           /* ~32.93px - Section headings */
  --fs-h1: 2.618rem;           /* ~41.89px - Page titles */
  --fs-display: 4.236rem;      /* ~67.78px - Hero headings */
  
  /* Responsive fluid versions */
  --fs-display-fluid: clamp(2.618rem, 6vw, 4.236rem);
  --fs-h1-fluid: clamp(2.058rem, 4vw, 2.618rem);
  --fs-h2-fluid: clamp(1.618rem, 3vw, 2.058rem);
  --fs-h3-fluid: clamp(1.272rem, 2.5vw, 1.618rem);
}
```

#### Line Height System (Golden Ratio Based)
```css
:root {
  /* Line heights using Golden Ratio relationships */
  --lh-tight: 1.272;          /* φ⁻¹ + 0.654 - Headings, compact text */
  --lh-normal: 1.618;         /* φ - Body text, optimal readability */
  --lh-loose: 2.058;          /* φ + 0.44 - Captions, spaced content */
}
```

### Font Implementation

#### Web Font Loading
```css
/* Google Fonts Implementation */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap');

/* Font Face Declarations */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
               'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  line-height: var(--lh-normal);
}

/* Fallback Stack */
.font-fallback {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
               Helvetica, Arial, sans-serif;
}
```

#### Typography Hierarchy Application
```css
/* Heading Styles */
h1, .text-display {
  font: 700 var(--fs-display-fluid)/var(--lh-tight) 'Inter', sans-serif;
  margin-bottom: var(--space-2xl);
}

h2, .text-h1 {
  font: 700 var(--fs-h1-fluid)/var(--lh-tight) 'Inter', sans-serif;
  margin-bottom: var(--space-xl);
}

h3, .text-h2 {
  font: 600 var(--fs-h2-fluid)/var(--lh-tight) 'Inter', sans-serif;
  margin-bottom: var(--space-lg);
}

h4, .text-h3 {
  font: 600 var(--fs-h3-fluid)/var(--lh-normal) 'Inter', sans-serif;
  margin-bottom: var(--space-md);
}

/* Body Text Styles */
p, .text-body {
  font: 400 var(--fs-body)/var(--lh-normal) 'Inter', sans-serif;
  margin-bottom: var(--space-lg);
}

.text-lead {
  font: 400 var(--fs-body-lg)/var(--lh-normal) 'Inter', sans-serif;
  margin-bottom: var(--space-xl);
}

.text-small {
  font: 400 var(--fs-body-sm)/var(--lh-normal) 'Inter', sans-serif;
}

.text-caption {
  font: 400 var(--fs-caption)/var(--lh-loose) 'Inter', sans-serif;
}

/* Elegant Typography (Playfair) */
.text-elegant {
  font: 400 var(--fs-h2)/var(--lh-tight) 'Playfair Display', serif;
}

.text-elegant-bold {
  font: 700 var(--fs-h1)/var(--lh-tight) 'Playfair Display', serif;
}
```

## Spacing & Layout System (Golden Ratio Architecture)

### Golden Ratio Spacing Foundation

#### Mathematical Base
```
Base unit: 8px (0.5rem)
Golden Ratio: φ = 1.618033988749895
Golden Ratio Inverse: φ⁻¹ = 0.618033988749895
```

#### Complete Spacing Scale
```css
:root {
  /* Golden Ratio Spacing System */
  --space-nano: 0.118rem;      /* ~1.89px - Micro adjustments */
  --space-micro: 0.191rem;     /* ~3.06px - Fine spacing */
  --space-xs: 0.309rem;        /* ~4.94px - Minimal spacing */
  --space-sm: 0.5rem;          /* 8px - Base unit */
  --space-md: 0.809rem;        /* ~12.94px - Standard spacing */
  --space-lg: 1.309rem;        /* ~20.94px - Comfortable spacing */
  --space-xl: 2.118rem;        /* ~33.89px - Generous spacing */
  --space-2xl: 3.427rem;       /* ~54.83px - Section spacing */
  --space-3xl: 5.545rem;       /* ~88.72px - Major spacing */
  --space-4xl: 8.972rem;       /* ~143.55px - Hero spacing */
  --space-5xl: 14.517rem;      /* ~232.27px - Dramatic spacing */
}
```

### Layout Grid (Golden Ratio Proportions)

#### Container Specifications
```css
:root {
  /* Layout dimensions */
  --container-max-width: 1200px;
  --container-padding-mobile: var(--space-lg);
  --container-padding-desktop: var(--space-2xl);
  
  /* Grid system */
  --grid-columns: 12;
  --grid-gutter-mobile: var(--space-lg);
  --grid-gutter-desktop: var(--space-xl);
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding-mobile);
}

@media (min-width: 52.36rem) {
  .container {
    padding: 0 var(--container-padding-desktop);
  }
}
```

#### Golden Rectangle Layout Ratios
```css
:root {
  /* Layout ratios based on Golden Ratio */
  --ratio-golden: 1.618;           /* φ - Perfect Golden Ratio */
  --ratio-golden-inverse: 0.618;   /* φ⁻¹ - Inverse Golden Ratio */
  --ratio-golden-squared: 2.618;   /* φ² - Extended Golden Ratio */
  
  /* Applied layout proportions */
  --sidebar-width: 23.6%;          /* ~0.382 - Sidebar to main content */
  --content-width: 61.8%;          /* φ⁻¹ - Main content area */
  --hero-aspect-ratio: 2.618;      /* φ² - Hero section proportions */
  --card-aspect-ratio: 1.618;      /* φ - Card dimensions */
}
```

### Responsive Breakpoints (Golden Ratio Progression)

#### Breakpoint System
```css
:root {
  /* Breakpoints using Golden Ratio progressions */
  --bp-xs: 20rem;          /* 320px - Mobile small */
  --bp-sm: 32.36rem;       /* ~518px - Mobile large */
  --bp-md: 52.36rem;       /* ~838px - Tablet */
  --bp-lg: 84.72rem;       /* ~1356px - Desktop */
  --bp-xl: 137.08rem;      /* ~2193px - Large desktop */
}

/* Media query mixins */
@media (min-width: 32.36rem) { /* Mobile large and up */ }
@media (min-width: 52.36rem) { /* Tablet and up */ }
@media (min-width: 84.72rem) { /* Desktop and up */ }
```

#### Responsive Spacing Adjustments
```css
/* Mobile-first spacing adjustments */
@media (max-width: 52.36rem) {
  :root {
    /* Scale down spacing for mobile using φ⁻¹ */
    --space-2xl: calc(var(--space-2xl) * 0.618);
    --space-3xl: calc(var(--space-3xl) * 0.618);
    --space-4xl: calc(var(--space-4xl) * 0.618);
    --space-5xl: calc(var(--space-5xl) * 0.618);
  }
}
```

## Component Design System (Golden Ratio Enhanced)

### Button Components

#### Primary Button (Golden Ratio Proportions)
```css
.btn-primary {
  /* Golden Ratio dimensions */
  padding: var(--space-md) var(--space-2xl);  /* ~13px × ~55px ≈ 1:φ² */
  min-height: calc(var(--fs-body) * var(--lh-normal) + 2 * var(--space-md));
  
  /* Visual styling */
  background: var(--brand-blue);
  color: white;
  border: none;
  border-radius: var(--space-sm);
  font: 600 var(--fs-body)/var(--lh-tight) 'Inter', sans-serif;
  cursor: pointer;
  
  /* Transitions using Golden Ratio timing */
  transition: all var(--timing-normal) ease;
  
  /* Shadow using Golden Ratio blur progression */
  box-shadow: var(--shadow-md);
  
  /* Icon spacing */
  gap: var(--space-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary:hover {
  background: var(--brand-navy);
  transform: translateY(calc(-1 * var(--space-nano)));
  box-shadow: var(--shadow-lg);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

#### Button Size Variations
```css
.btn-sm {
  padding: var(--space-sm) var(--space-xl);
  font-size: var(--fs-body-sm);
  min-height: calc(var(--fs-body-sm) * var(--lh-normal) + 2 * var(--space-sm));
}

.btn-lg {
  padding: var(--space-lg) var(--space-4xl);
  font-size: var(--fs-h4);
  min-height: calc(var(--fs-h4) * var(--lh-normal) + 2 * var(--space-lg));
}
```

### Card Components (Golden Rectangle)

#### Standard Card
```css
.card {
  background: white;
  border-radius: var(--space-md);
  padding: var(--space-2xl);
  box-shadow: var(--shadow-md);
  transition: all var(--timing-normal) ease;
  
  /* Maintain Golden Rectangle aspect ratio where content allows */
  aspect-ratio: var(--ratio-golden);
  overflow: hidden;
}

.card:hover {
  transform: translateY(calc(-2 * var(--space-nano)));
  box-shadow: var(--shadow-xl);
}

/* Card content spacing using Golden Ratio */
.card-header {
  margin-bottom: var(--space-xl);
}

.card-content {
  margin-bottom: var(--space-lg);
}

.card-footer {
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--sand-medium);
}
```

### Form Elements (Golden Ratio Harmony)

#### Input Fields
```css
.form-group {
  margin-bottom: var(--space-2xl);
}

.form-label {
  display: block;
  margin-bottom: var(--space-sm);
  font: 600 var(--fs-body-sm)/var(--lh-normal) 'Inter', sans-serif;
  color: var(--text-primary);
}

.form-input {
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  border: 2px solid var(--sand-medium);
  border-radius: var(--space-sm);
  font: 400 var(--fs-body)/var(--lh-normal) 'Inter', sans-serif;
  transition: all var(--timing-normal) ease;
  
  /* Height follows Golden Ratio proportion */
  min-height: calc(var(--fs-body) * var(--lh-normal) + 2 * var(--space-md));
}

.form-input:focus {
  outline: none;
  border-color: var(--brand-blue);
  box-shadow: 0 0 0 var(--space-xs) rgba(25, 167, 196, 0.2);
}
```

### Navigation Components

#### Header & Navigation
```css
.header {
  height: calc(var(--fs-body) * var(--ratio-golden-squared) + 2 * var(--space-xl));
  padding: 0 var(--space-2xl);
  background: white;
  border-bottom: 1px solid var(--sand-medium);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-item {
  padding: var(--space-md) var(--space-lg);
  margin: 0 var(--space-xs);
  border-radius: var(--space-xs);
  font: 500 var(--fs-body)/var(--lh-normal) 'Inter', sans-serif;
  color: var(--text-primary);
  text-decoration: none;
  transition: all var(--timing-fast) ease;
}

.nav-item:hover {
  background: var(--sand-light);
  color: var(--brand-blue);
}

.logo {
  height: calc(var(--fs-h2) * var(--ratio-golden));
  width: auto;
}
```

## Shadow & Depth System

### Shadow Progression (Golden Ratio Blur Values)
```css
:root {
  /* Shadows using Golden Ratio blur and spread progression */
  --shadow-sm: 0 var(--space-nano) var(--space-xs) rgba(0, 0, 0, 0.1);
  --shadow-md: 0 var(--space-xs) var(--space-sm) rgba(0, 0, 0, 0.15),
               0 var(--space-nano) var(--space-xs) rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 var(--space-sm) var(--space-md) rgba(0, 0, 0, 0.2),
               0 var(--space-xs) var(--space-sm) rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 var(--space-md) var(--space-lg) rgba(0, 0, 0, 0.25),
               0 var(--space-sm) var(--space-md) rgba(0, 0, 0, 0.15);
}
```

## Animation & Transition System

### Golden Ratio Timing Functions
```css
:root {
  /* Animation timing based on Golden Ratio fractions */
  --timing-fast: 0.191s;      /* φ⁻² × 0.5s - Quick interactions */
  --timing-normal: 0.309s;    /* φ⁻¹ × 0.5s - Standard transitions */
  --timing-slow: 0.5s;        /* Base timing - Emphasis transitions */
  --timing-slower: 0.809s;    /* φ⁻¹ × 1.309s - Dramatic effects */
  
  /* Easing functions */
  --ease-gentle: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## Imagery Guidelines & Specifications

### Photography Style Requirements
- **Mood**: Warm, inviting, authentic, aspirational
- **Color Treatment**: Slightly desaturated with warm undertones
- **Composition**: Clean, uncluttered, following rule of thirds
- **Subjects**: Real Puerto Rico properties, satisfied clients, island landscapes
- **Quality**: High resolution (minimum 1920×1080 for web, 300 DPI for print)

### Image Aspect Ratios (Golden Ratio Based)
```css
:root {
  /* Image aspect ratios using Golden Ratio */
  --aspect-golden: 1.618;      /* φ - Hero images, feature photos */
  --aspect-golden-portrait: 0.618; /* φ⁻¹ - Portrait orientations */
  --aspect-square: 1;          /* 1:1 - Social media, avatars */
  --aspect-wide: 2.618;        /* φ² - Banner images, panoramic */
}
```

### Iconography System
- **Style**: Outline style with consistent 2px stroke weight
- **Library**: Feather Icons or similar minimal icon set
- **Usage**: Navigation, features, process steps, UI elements
- **Sizing**: 16px, 24px, 32px, 48px (following base-8 system)
- **Colors**: Brand colors for interactive elements, neutrals for decorative

This comprehensive visual identity system provides a mathematically harmonious foundation for all design decisions, ensuring consistency, beauty, and professional polish across all brand touchpoints.

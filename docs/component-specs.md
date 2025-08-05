<!-- summary: Detailed component specifications with Golden Ratio implementation -->

# Component Specifications

## Header Component

### Desktop Header (1024px+)

```
Specifications:
- Height: 80px (φ² × 30px base)
- Background: White with 1px border-bottom: sand-medium
- Container: Max-width 1200px, centered
- Logo height: 48px (φ × 30px)
- Navigation font: Inter Medium 16px
- CTA button: Primary button style
- Sticky behavior: Remains visible on scroll

Layout:
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Nav Item] [Nav Item] [Nav Item] [Nav Item] [CTA Btn]│
│   ←─φ─→   ←─φ─→    ←─φ─→     ←─φ─→     ←─φ─→      ←─φ²─→  │
└─────────────────────────────────────────────────────────────┘

Interaction States:
- Nav items hover: background sand-light, color brand-blue
- CTA hover: background brand-navy, slight lift transform
- Active page: nav item underline with brand-blue
```

### Mobile Header (320px-1023px)

```
Specifications:
- Height: 64px (φ × 40px base)
- Logo height: 32px
- Hamburger icon: 24px × 24px
- Menu drawer: Full-height overlay
- Close animation: Slide-out left

Mobile Menu:
┌─────────────────────────────┐
│ [×] Close                   │
│                             │
│ Services                    │
│ About                       │
│ Market Insights             │
│ Success Stories             │
│ Contact                     │
│                             │
│ [Get Started Button]        │
│                             │
│ Contact Info                │
│ Social Links                │
└─────────────────────────────┘
```

### Header CSS Implementation

```css
.header {
  height: calc(var(--golden-ratio-2) * var(--base-unit));
  background: var(--color-white);
  border-bottom: 1px solid var(--color-sand-medium);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-lg);
  height: 100%;
}

.header__logo {
  height: calc(var(--golden-ratio) * 30px);
  width: auto;
}

.header__nav {
  display: flex;
  list-style: none;
  gap: var(--golden-ratio) * 1rem;
  margin: 0;
  padding: 0;
}

.header__nav-item {
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-text-primary);
  text-decoration: none;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  transition: all 0.3s ease;
  position: relative;
}

.header__nav-item:hover {
  background: var(--color-sand-light);
  color: var(--color-brand-blue);
}

.header__nav-item--active::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-brand-blue);
}

/* Mobile Header */
@media (max-width: 1023px) {
  .header {
    height: calc(var(--golden-ratio) * 40px);
  }

  .header__nav {
    display: none;
  }

  .header__mobile-toggle {
    display: block;
    width: 24px;
    height: 24px;
    background: none;
    border: none;
    cursor: pointer;
  }
}
```

## Hero Section Component

### Homepage Hero

```
Specifications:
- Min-height: 600px (adjusts with content)
- Background: White or subtle gradient
- Content max-width: 1200px
- Two-column layout: 38.2% / 61.8% (Golden Ratio)
- Vertical centering: CSS Flexbox
- Mobile: Single column, image stacked

Content Column (38.2% width):
- Headline: φ³ font size (~68px), Inter Bold
- Subheadline: φ² font size (~42px), Inter Regular
- Body text: Base font size (16px), line-height φ
- Primary CTA: Large button with φ² padding
- Secondary CTA: Ghost button, same size

Image Column (61.8% width):
- Aspect ratio: Golden Rectangle (φ:1)
- Content: Hero image or illustration
- Overlay: Optional gradient for text readability
- Responsive: Scales proportionally

Visual Elements:
- Trust indicators: Small logos/badges below CTAs
- Subtle animation: Fade-in on load, stagger timing
- Scroll indicator: Animated arrow at bottom
```

### Hero CSS Implementation

```css
.hero {
  min-height: 600px;
  display: flex;
  align-items: center;
  background: var(--color-white);
  padding: var(--space-3xl) 0;
}

.hero__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 38.2fr 61.8fr;
  gap: var(--space-2xl);
  align-items: center;
  padding: 0 var(--space-lg);
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.hero__headline {
  font-size: var(--fs-display);
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  color: var(--color-text-primary);
  margin: 0;
}

.hero__subheadline {
  font-size: var(--fs-h1);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  color: var(--color-text-secondary);
  margin: 0;
}

.hero__body {
  font-size: var(--fs-body);
  line-height: var(--lh-normal);
  color: var(--color-text-secondary);
  margin: 0;
}

.hero__actions {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-lg);
}

.hero__image {
  aspect-ratio: var(--golden-ratio) / 1;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: var(--radius-lg);
}

.hero__trust-indicators {
  display: flex;
  gap: var(--space-md);
  align-items: center;
  margin-top: var(--space-lg);
  opacity: 0.7;
}

/* Mobile Hero */
@media (max-width: 1023px) {
  .hero__container {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
    text-align: center;
  }

  .hero__image {
    order: -1;
  }

  .hero__actions {
    justify-content: center;
    flex-direction: column;
  }
}
```

### Service Page Hero

```
Specifications:
- Min-height: 400px
- Breadcrumb: 32px height, positioned above hero
- Service icon: φ² × base size (42px)
- Title hierarchy: Service name (φ³), tagline (φ)
- Single CTA: "Get Started" or "Learn More"

Layout variation:
- Image right: 61.8% width
- Content left: 38.2% width
- Mobile: Image top, content bottom
```

## Card Components

### Service Card

```
Specifications:
- Aspect ratio: Golden Rectangle (φ:1)
- Padding: φ² × base (42px) all sides
- Border radius: φ × base (26px)
- Shadow: Subtle depth, increases on hover
- Background: White

Content Structure:
┌─────────────────────────────────┐
│ [Service Icon - φ² size]        │
│                                 │
│ Service Title [φ font size]     │
│                                 │
│ Description text [base size]    │
│ 2-3 lines maximum               │
│                                 │
│ Key benefits (3-4 bullets)      │
│                                 │
│ [Learn More Button]             │
└─────────────────────────────────┘

Interaction:
- Hover: Lift transform (4px up), shadow increase
- Icon: Subtle scale transform on hover
- Button: Color change to brand-navy
- Transition: 0.3s ease for all animations
```

### Service Card CSS Implementation

```css
.service-card {
  aspect-ratio: var(--golden-ratio) / 1;
  padding: var(--space-2xl);
  border-radius: var(--radius-lg);
  background: var(--color-white);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.service-card__icon {
  width: var(--space-2xl);
  height: var(--space-2xl);
  margin-bottom: var(--space-lg);
  transition: transform 0.3s ease;
}

.service-card:hover .service-card__icon {
  transform: scale(1.1);
}

.service-card__title {
  font-size: var(--fs-h2);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  margin: 0 0 var(--space-md) 0;
}

.service-card__description {
  font-size: var(--fs-body);
  line-height: var(--lh-normal);
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-lg) 0;
  flex-grow: 1;
}

.service-card__benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-lg) 0;
}

.service-card__benefit {
  position: relative;
  padding-left: var(--space-md);
  margin-bottom: var(--space-sm);
  font-size: var(--fs-sm);
  color: var(--color-text-secondary);
}

.service-card__benefit::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-brand-blue);
  font-weight: var(--fw-bold);
}

.service-card__button {
  margin-top: auto;
}
```

### Testimonial Card

```
Specifications:
- Aspect ratio: Flexible height, fixed width
- Max-width: 400px
- Background: sand-light or white
- Border-left: 4px solid brand-blue (accent)

Content Layout:
┌─────────────────────────────────┐
│ " Quote text [φ font size]      │
│   Multi-line testimonial       │
│   content with proper          │
│   line-height φ ratio "        │
│                                 │
│ ┌─────┐ Client Name             │
│ │Photo│ Title/Location          │
│ │ φ² │ [Secondary text size]    │
│ └─────┘                         │
│                                 │
│ Results Summary (optional)      │
│ ROI: 18% | Timeline: 8 months   │
└─────────────────────────────────┘
```

### Testimonial Card CSS Implementation

```css
.testimonial-card {
  max-width: 400px;
  padding: var(--space-xl);
  background: var(--color-sand-light);
  border-left: 4px solid var(--color-brand-blue);
  border-radius: var(--radius-md);
  position: relative;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: var(--space-lg);
  left: var(--space-xl);
  font-size: calc(var(--fs-display) * 1.5);
  color: var(--color-brand-blue);
  opacity: 0.3;
  line-height: 1;
}

.testimonial-card__quote {
  font-size: var(--fs-h2);
  line-height: var(--lh-normal);
  color: var(--color-text-primary);
  margin: 0 0 var(--space-lg) 0;
  position: relative;
  z-index: 1;
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.testimonial-card__photo {
  width: var(--space-2xl);
  height: var(--space-2xl);
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-card__author-info {
  flex-grow: 1;
}

.testimonial-card__name {
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  margin: 0;
}

.testimonial-card__title {
  font-size: var(--fs-sm);
  color: var(--color-text-secondary);
  margin: 0;
}

.testimonial-card__results {
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-sand-medium);
  font-size: var(--fs-sm);
  color: var(--color-text-secondary);
  display: flex;
  gap: var(--space-md);
}
```

### Case Study Card

```
Specifications:
- Aspect ratio: 4:3 (close to φ for visual harmony)
- Image area: 60% of card height
- Content area: 40% of card height
- Hover effect: Image zoom, card lift

Structure:
┌─────────────────────────────────┐
│                                 │
│ [Property Image]                │
│ [Before/After overlay]          │
│                                 │
├─────────────────────────────────┤
│ Property Address                │
│ Investment: $X | ROI: Y%        │
│ [Read Case Study]               │
└─────────────────────────────────┘
```

### Case Study Card CSS Implementation

```css
.case-study-card {
  aspect-ratio: 4 / 3;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.case-study-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.case-study-card__image-container {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.case-study-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.case-study-card:hover .case-study-card__image {
  transform: scale(1.05);
}

.case-study-card__overlay {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  background: var(--color-white);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  color: var(--color-brand-blue);
}

.case-study-card__content {
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.case-study-card__address {
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  margin: 0;
}

.case-study-card__stats {
  display: flex;
  gap: var(--space-md);
  font-size: var(--fs-sm);
  color: var(--color-text-secondary);
}

.case-study-card__cta {
  margin-top: var(--space-sm);
  align-self: flex-start;
}
```

## Form Components

### Contact Form

```
Specifications:
- Max-width: 600px
- Field spacing: φ × base (26px) between fields
- Label spacing: φ⁻¹ × base (10px) above input
- Input height: φ² × base (42px)
- Button height: φ² × base with φ³ width

Field Types:
┌─────────────────────────────────┐
│ Name * [Input - Required]       │
│ Email * [Input - Required]      │
│ Phone [Input - Optional]        │
│ Investment Budget [Select]      │
│ Timeline [Select]               │
│ Message [Textarea - 120px high] │
│                                 │
│ [Submit Button - Full width]    │
└─────────────────────────────────┘

Validation:
- Real-time validation on blur
- Error states: Red border, error message
- Success states: Green border, checkmark
- Disabled state: Gray background, no interaction
```

### Contact Form CSS Implementation

```css
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: var(--space-lg);
}

.form-label {
  display: block;
  margin-bottom: calc(var(--golden-ratio-inverse) * var(--base-unit));
  font-weight: var(--fw-medium);
  color: var(--color-text-primary);
  font-size: var(--fs-sm);
}

.form-label--required::after {
  content: " *";
  color: var(--color-error);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  height: var(--space-2xl);
  padding: 0 var(--space-md);
  border: 2px solid var(--color-sand-medium);
  border-radius: var(--radius-md);
  font-family: var(--font-inter);
  font-size: var(--fs-body);
  color: var(--color-text-primary);
  background: var(--color-white);
  transition: all 0.3s ease;
}

.form-textarea {
  height: 120px;
  padding: var(--space-md);
  resize: vertical;
  min-height: 120px;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-brand-blue);
  box-shadow: 0 0 0 3px rgba(var(--color-brand-blue-rgb), 0.1);
}

.form-input--error,
.form-select--error,
.form-textarea--error {
  border-color: var(--color-error);
}

.form-input--success,
.form-select--success,
.form-textarea--success {
  border-color: var(--color-success);
}

.form-error {
  display: block;
  color: var(--color-error);
  font-size: var(--fs-xs);
  margin-top: var(--space-xs);
}

.form-success {
  display: block;
  color: var(--color-success);
  font-size: var(--fs-xs);
  margin-top: var(--space-xs);
}

.form-submit {
  width: 100%;
  margin-top: var(--space-lg);
}
```

### Newsletter Signup

```
Specifications:
- Compact horizontal layout
- Input and button same height: φ² × base
- Button width: φ³ × base for "Subscribe"
- Inline layout with minimal spacing

Layout:
┌─────────────────────────────────┐
│ [Email Input    ] [Subscribe]   │
│ ←─────φ³────────→ ←───φ²────→   │
└─────────────────────────────────┘
```

### Newsletter CSS Implementation

```css
.newsletter-signup {
  display: flex;
  gap: var(--space-sm);
  max-width: 400px;
}

.newsletter-signup__input {
  flex: var(--golden-ratio-cubed);
  height: var(--space-2xl);
  padding: 0 var(--space-md);
  border: 2px solid var(--color-sand-medium);
  border-radius: var(--radius-md);
  font-family: var(--font-inter);
  font-size: var(--fs-body);
}

.newsletter-signup__button {
  flex: var(--golden-ratio-squared);
  height: var(--space-2xl);
  white-space: nowrap;
}
```

## Button Components

### Primary Button

```
Specifications:
- Height: φ² × base (42px)
- Padding: φ × base vertical, φ² × base horizontal
- Font: Inter Semi-Bold, base size (16px)
- Border-radius: φ × base (26px)
- Background: brand-blue
- Color: White
- Box-shadow: Subtle depth

States:
- Default: brand-blue background
- Hover: brand-navy background, 2px lift
- Active: No lift, slight inset shadow
- Disabled: sand-medium background, muted text
- Loading: Spinner animation, disabled state

Sizes:
- Small: φ × base height (26px), smaller padding
- Large: φ³ × base height (68px), larger padding
- Full-width: 100% width, maintains height
```

### Button CSS Implementation

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  height: var(--space-2xl);
  padding: 0 var(--space-xl);
  border: none;
  border-radius: var(--radius-lg);
  font-family: var(--font-inter);
  font-size: var(--fs-body);
  font-weight: var(--fw-semibold);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn--primary {
  background: var(--color-brand-blue);
  color: var(--color-white);
  box-shadow: var(--shadow-sm);
}

.btn--primary:hover {
  background: var(--color-brand-navy);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn--primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-inset);
}

.btn--secondary {
  background: transparent;
  color: var(--color-brand-blue);
  border: 2px solid var(--color-brand-blue);
}

.btn--secondary:hover {
  background: var(--color-brand-blue);
  color: var(--color-white);
}

.btn--ghost {
  background: transparent;
  color: var(--color-brand-blue);
  border: none;
}

.btn--ghost:hover {
  background: var(--color-sand-light);
  text-decoration: underline;
}

.btn--small {
  height: var(--space-lg);
  padding: 0 var(--space-md);
  font-size: var(--fs-sm);
}

.btn--large {
  height: calc(var(--golden-ratio-cubed) * var(--base-unit));
  padding: 0 calc(var(--golden-ratio-cubed) * var(--base-unit));
  font-size: var(--fs-lg);
}

.btn--full {
  width: 100%;
}

.btn:disabled {
  background: var(--color-sand-medium);
  color: var(--color-text-muted);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn--loading {
  color: transparent;
}

.btn--loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

## Navigation Components

### Mega Menu (Desktop)

```
Specifications:
- Trigger: Hover on "Services" nav item
- Width: Container width (1200px max)
- Height: Auto, min 400px
- Background: White with subtle shadow
- Columns: 4 equal width (φ spacing between)

Layout:
┌─────────────────────────────────────────────────────────────┐
│ Property        Property        Renovation      Advisory     │
│ Acquisition     Management      Management      Services     │
│                                                             │
│ • Property      • Monthly       • Project       • Tax       │
│   Search          Management     Planning        Strategy   │
│ • Due           • Tenant        • Contractor    • Market    │
│   Diligence       Services       Management      Analysis   │
│ • Closing       • Maintenance   • Quality       • Investment│
│   Support         Coordination   Assurance       Planning   │
│                                                             │
│ [Learn More]    [Learn More]    [Learn More]    [Learn More]│
└─────────────────────────────────────────────────────────────┘
```

### Mega Menu CSS Implementation

```css
.mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-white);
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.nav-item:hover .mega-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.mega-menu__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.mega-menu__column {
  display: flex;
  flex-direction: column;
}

.mega-menu__title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  margin: 0 0 var(--space-md) 0;
}

.mega-menu__list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-lg) 0;
}

.mega-menu__item {
  margin-bottom: var(--space-sm);
}

.mega-menu__link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm);
  border-radius: var(--radius-sm);
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: var(--fs-sm);
  transition: all 0.3s ease;
}

.mega-menu__link:hover {
  background: var(--color-sand-light);
  color: var(--color-brand-blue);
}

.mega-menu__cta {
  margin-top: auto;
}
```

### Breadcrumb Navigation

```
Specifications:
- Height: 32px
- Font: Inter Regular, 14px
- Color: text-secondary
- Separator: ">" with φ spacing
- Hover states: Links become brand-blue

Example:
Home > Services > Property Management
├─φ─┤├─φ─┤├─────φ────┤├─────φ────┤
```

### Breadcrumb CSS Implementation

```css
.breadcrumb {
  display: flex;
  align-items: center;
  height: 32px;
  font-size: var(--fs-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
}

.breadcrumb__list {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb__item {
  display: flex;
  align-items: center;
}

.breadcrumb__item:not(:last-child)::after {
  content: ">";
  margin: 0 var(--space-sm);
  color: var(--color-text-muted);
}

.breadcrumb__link {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.breadcrumb__link:hover {
  color: var(--color-brand-blue);
}

.breadcrumb__current {
  color: var(--color-text-primary);
  font-weight: var(--fw-medium);
}
```

## Footer Component

```
Specifications:
- Background: sand-light
- Padding: φ³ × base top/bottom (68px)
- Four-column layout on desktop
- Single column on mobile
- Border-top: 1px solid sand-medium

Column Structure:
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Services    │ │ Resources   │ │ Company     │ │ Contact     │
│ [Links]     │ │ [Links]     │ │ [Links]     │ │ [Info]      │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘

Bottom Section:
┌─────────────────────────────────────────────────────────────┐
│ Logo | Social Icons | Copyright | Legal Links              │
│ ←φ²→  ←────φ³────→  ←───φ────→  ←────φ²────→              │
└─────────────────────────────────────────────────────────────┘
```

### Footer CSS Implementation

```css
.footer {
  background: var(--color-sand-light);
  border-top: 1px solid var(--color-sand-medium);
  padding: calc(var(--golden-ratio-cubed) * var(--base-unit)) 0 var(--space-xl)
    0;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.footer__main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
}

.footer__column {
  display: flex;
  flex-direction: column;
}

.footer__title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  margin: 0 0 var(--space-md) 0;
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__item {
  margin-bottom: var(--space-sm);
}

.footer__link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--fs-sm);
  transition: color 0.3s ease;
}

.footer__link:hover {
  color: var(--color-brand-blue);
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-sand-medium);
}

.footer__logo {
  height: calc(var(--golden-ratio-squared) * var(--base-unit));
}

.footer__social {
  display: flex;
  gap: var(--space-md);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-white);
  border-radius: 50%;
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
}

.footer__social-link:hover {
  background: var(--color-brand-blue);
  color: var(--color-white);
}

.footer__legal {
  display: flex;
  gap: var(--space-md);
  font-size: var(--fs-xs);
  color: var(--color-text-muted);
}

/* Mobile Footer */
@media (max-width: 1023px) {
  .footer__main {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .footer__bottom {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
  }
}
```

## Responsive Component Behavior

### Breakpoint Adaptations

```
Mobile (320px-767px):
- Single column layouts
- Full-width buttons
- Stacked hero content
- Collapsed navigation
- Reduced spacing (φ⁻¹ multiplier)

Tablet (768px-1023px):
- Two-column where appropriate
- Horizontal hero maintained
- Standard button sizes
- Collapsed mega menu
- Standard spacing

Desktop (1024px+):
- Full multi-column layouts
- All component features enabled
- Mega menu functionality
- Maximum spacing and typography
```

## Accessibility Specifications

### Focus States

- All interactive elements have visible focus rings
- Focus ring: 2px solid brand-blue, φ offset
- Skip links for keyboard navigation
- Proper heading hierarchy (h1 → h6)

### Color Contrast

- All text meets WCAG AA standards (4.5:1 minimum)
- Interactive elements meet 3:1 contrast for UI components
- Focus indicators meet enhanced contrast requirements

### Motion Preferences

- Respect prefers-reduced-motion
- Provide alternative static states
- Essential animations only when motion disabled

## Component Implementation Notes

### CSS Custom Properties Integration

All components use CSS custom properties defined in the Golden Ratio design tokens system, ensuring mathematical consistency across the entire design system.

### Performance Optimization

- Components use efficient CSS Grid and Flexbox layouts
- Transitions are optimized for 60fps performance
- Images use responsive srcset attributes
- Critical CSS includes above-the-fold components

### Browser Support

- Modern browsers (last 2 versions)
- Progressive enhancement for older browsers
- Fallbacks for CSS Grid using Flexbox
- Polyfills for critical JavaScript features

These component specifications provide detailed implementation guidelines that maintain the Golden Ratio design system while ensuring optimal performance, accessibility, and user experience across all devices and browsers.

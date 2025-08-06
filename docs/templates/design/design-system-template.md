# Design System Template

## 🎨 Purpose

Create a comprehensive design system that ensures consistency, accessibility, and scalability across your web presence.

## 📋 Checklist

- [ ] Define brand identity and visual direction
- [ ] Create color palette with accessibility considerations
- [ ] Establish typography scale and font choices
- [ ] Define spacing system and layout principles
- [ ] Create component specifications
- [ ] Document responsive design strategy
- [ ] Ensure accessibility compliance

## 🎭 Brand Identity

### Brand Personality

> What personality traits does your brand embody?

**Primary Traits:**

- Trait 1: (e.g., Professional, Trustworthy, Innovative)
- Trait 2:
- Trait 3:

**Brand Voice:**

- Tone: (e.g., Conversational, Authoritative, Friendly)
- Style: (e.g., Concise, Detailed, Storytelling)
- Perspective: (e.g., First person, Third person)

### Brand Values

1. **Core Value 1:**
2. **Core Value 2:**
3. **Core Value 3:**

### Mission Statement

> What is your organization's purpose?

**Your Mission:**
_Example: "To democratize real estate investment by providing expert guidance and local insights to investors seeking opportunities in Puerto Rico."_

## 🎨 Visual Identity

### Logo Requirements

- **Primary logo:** Horizontal layout, full color
- **Secondary logo:** Stacked layout, full color
- **Logo mark:** Symbol only (icon)
- **Monochrome versions:** Black and white variants
- **Minimum size:** Smallest readable size
- **Clear space:** Minimum spacing around logo

### Color Palette

#### Primary Colors

```css
/* Primary Brand Color */
--color-primary: #your-hex-here;
--color-primary-light: #your-hex-here;
--color-primary-dark: #your-hex-here;

/* Secondary Brand Color */
--color-secondary: #your-hex-here;
--color-secondary-light: #your-hex-here;
--color-secondary-dark: #your-hex-here;
```

#### Neutral Colors

```css
/* Grays */
--color-gray-50: #fafafa;
--color-gray-100: #f5f5f5;
--color-gray-200: #e5e5e5;
--color-gray-300: #d4d4d4;
--color-gray-400: #a3a3a3;
--color-gray-500: #737373;
--color-gray-600: #525252;
--color-gray-700: #404040;
--color-gray-800: #262626;
--color-gray-900: #171717;

/* Pure */
--color-white: #ffffff;
--color-black: #000000;
```

#### Semantic Colors

```css
/* Success */
--color-success: #10b981;
--color-success-light: #d1fae5;
--color-success-dark: #047857;

/* Warning */
--color-warning: #f59e0b;
--color-warning-light: #fef3c7;
--color-warning-dark: #d97706;

/* Error */
--color-error: #ef4444;
--color-error-light: #fee2e2;
--color-error-dark: #dc2626;
```

#### Accessibility Requirements

- All color combinations must meet WCAG 2.1 AA contrast requirements (4.5:1 for normal text, 3:1 for large text)
- Colors should not be the only way information is conveyed
- Interactive elements must have visible focus indicators

### Typography

#### Font Selection

**Primary Typeface:** [Font Name]

- Usage: Headings, important text
- Fallback: [System font stack]
- CDN/File source: [Link or file reference]

**Secondary Typeface:** [Font Name]

- Usage: Body text, descriptions
- Fallback: [System font stack]
- CDN/File source: [Link or file reference]

#### Type Scale

```css
/* Typography Scale */
--font-size-xs: 0.75rem; /* 12px */
--font-size-sm: 0.875rem; /* 14px */
--font-size-base: 1rem; /* 16px */
--font-size-lg: 1.125rem; /* 18px */
--font-size-xl: 1.25rem; /* 20px */
--font-size-2xl: 1.5rem; /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem; /* 36px */
--font-size-5xl: 3rem; /* 48px */
--font-size-6xl: 3.75rem; /* 60px */

/* Line Heights */
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-loose: 1.75;

/* Font Weights */
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

#### Typography Hierarchy

- **H1:** Used for page titles (--font-size-4xl or larger)
- **H2:** Used for major section headings (--font-size-3xl)
- **H3:** Used for subsection headings (--font-size-2xl)
- **H4:** Used for minor headings (--font-size-xl)
- **H5:** Used for component titles (--font-size-lg)
- **H6:** Used for small headings (--font-size-base)
- **Body:** Default text size (--font-size-base)
- **Small:** Fine print, captions (--font-size-sm)

### Spacing System

```css
/* Spacing Scale */
--space-px: 1px;
--space-0: 0;
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
--space-32: 8rem; /* 128px */
```

#### Spacing Guidelines

- Use consistent spacing values from the scale
- Maintain vertical rhythm with typography
- Create visual hierarchy through spacing
- Ensure adequate touch targets (44px minimum)

## 📱 Responsive Design Strategy

### Breakpoints

```css
/* Breakpoint System */
--breakpoint-sm: 640px; /* Small devices */
--breakpoint-md: 768px; /* Medium devices */
--breakpoint-lg: 1024px; /* Large devices */
--breakpoint-xl: 1280px; /* Extra large devices */
--breakpoint-2xl: 1536px; /* 2X large devices */
```

### Layout Principles

- **Mobile-first approach:** Design for mobile, enhance for larger screens
- **Flexible grids:** Use CSS Grid and Flexbox for responsive layouts
- **Fluid typography:** Scale text size with viewport
- **Flexible media:** Images and videos should scale appropriately

### Container Sizes

```css
/* Container Widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

## 🧩 Component Specifications

### Button Component

**Variants:**

- Primary: Main call-to-action buttons
- Secondary: Secondary actions
- Tertiary: Text-based actions
- Danger: Destructive actions

**States:**

- Default, Hover, Active, Focus, Disabled

**Sizes:**

- Small, Medium, Large

**Accessibility:**

- Keyboard navigable
- Screen reader friendly
- Sufficient color contrast
- Clear focus indicators

### Form Components

**Input Fields:**

- Text input, Email, Password, Number, Tel, URL
- Textarea for multi-line text
- Select dropdowns
- Checkboxes and radio buttons

**States:**

- Default, Focus, Error, Success, Disabled

**Validation:**

- Real-time validation feedback
- Clear error messages
- Success confirmations

### Navigation Components

**Primary Navigation:**

- Desktop horizontal menu
- Mobile hamburger menu
- Dropdown submenus

**Secondary Navigation:**

- Breadcrumbs
- Pagination
- Tabs

### Card Components

**Content Cards:**

- Image, title, description, action
- Consistent padding and spacing
- Hover effects and transitions

**Information Cards:**

- Data display cards
- Statistic cards
- Feature highlight cards

## ♿ Accessibility Standards

### WCAG 2.1 AA Compliance

- [ ] Color contrast meets minimum ratios
- [ ] All interactive elements are keyboard accessible
- [ ] Images have appropriate alt text
- [ ] Form inputs have proper labels
- [ ] Headings create logical hierarchy
- [ ] Focus indicators are visible
- [ ] Error messages are descriptive

### Screen Reader Compatibility

- Use semantic HTML elements
- Provide ARIA labels where needed
- Ensure proper heading structure
- Test with screen reader software

### Keyboard Navigation

- All interactive elements accessible via keyboard
- Logical tab order
- Skip links for main content
- Escape key closes modals/dropdowns

## 🎬 Animation & Interactions

### Animation Principles

- **Purposeful:** Animations should serve a function
- **Fast:** Keep animations under 300ms for UI feedback
- **Smooth:** Use easing functions for natural motion
- **Respectful:** Respect user's motion preferences

### Micro-interactions

```css
/* Transition Standards */
--transition-fast: 150ms ease-out;
--transition-normal: 300ms ease-out;
--transition-slow: 500ms ease-out;

/* Easing Functions */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover Effects

- Subtle scale or color changes
- Shadow elevation changes
- Smooth transitions

### Loading States

- Skeleton screens for content loading
- Progress indicators for long processes
- Smooth state transitions

## 📏 Grid System

### Layout Grid

```css
/* Grid System */
.container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(12, 1fr);
}

/* Responsive Grid */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
```

### Column System

- 12-column grid for flexible layouts
- Responsive column behavior
- Consistent gutters and margins

## 🔧 Implementation Guidelines

### CSS Architecture

- Use CSS custom properties for design tokens
- Follow BEM naming convention for classes
- Organize styles by component
- Use CSS nesting where appropriate

### File Organization

```
styles/
├── tokens/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   └── breakpoints.css
├── base/
│   ├── reset.css
│   ├── typography.css
│   └── utilities.css
├── components/
│   ├── buttons.css
│   ├── forms.css
│   └── navigation.css
└── pages/
    ├── home.css
    └── about.css
```

### Documentation Standards

- Document all design decisions
- Provide code examples for components
- Include accessibility considerations
- Maintain a living style guide

## ✅ Quality Checklist

Before considering your design system complete, ensure:

- [ ] All colors meet accessibility contrast requirements
- [ ] Typography scales appropriately across devices
- [ ] Components work in all supported browsers
- [ ] Interactive elements have clear states
- [ ] Loading and error states are designed
- [ ] Style guide documentation is complete
- [ ] Team has reviewed and approved system
- [ ] Implementation guidelines are clear

---

**Next Steps:**
After completing your design system, move on to the [Technical Architecture Template](../technical/architecture-template.md) to plan your implementation strategy.

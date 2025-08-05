📌 PHASE 3 PROMPT — "Legs on the Ground" Design Spec & Wireframes
(Building on Phase 1-2 foundations — Translating brand identity into concrete design specifications)

**Prerequisites**:

- Phase 1 Complete ✅ - Enhanced business analysis, competitive analysis, revenue model, risk assessment
- Phase 2 Complete ✅ - Brand guide, visual identity system, content strategy, Golden Ratio design tokens

**Current Phase Goals**:

- **Phase 3**: Create comprehensive wireframes and design specifications for all key pages
- **Phase 4 Prep**: Prepare technical architecture and component specifications for development

## 🎯 Phase 3: Design Specifications & Wireframes

### 3.1 Information Architecture (`docs/information-architecture.md`)

Create comprehensive site structure and navigation strategy:

```markdown
<!-- summary: Complete information architecture and site navigation structure -->

# Information Architecture

## Site Structure Hierarchy

### Primary Navigation (Header)
```

Home
├── Services
│ ├── Property Acquisition
│ ├── Property Management  
│ ├── Renovation Management
│ └── Advisory Services
├── About
│ ├── Our Story
│ ├── Team
│ ├── Process
│ └── Quality Standards
├── Market Insights
│ ├── Market Reports
│ ├── Neighborhood Guides
│ ├── Investment Analysis
│ └── News & Updates
├── Success Stories
│ ├── Case Studies
│ ├── Client Testimonials
│ ├── Property Transformations
│ └── Performance Reports
└── Contact
├── Get Started
├── Consultation Request
├── Contact Information
└── FAQ

```

### Secondary Navigation (Footer)
```

Services
├── Property Search
├── Due Diligence
├── Closing Support
├── Tenant Management
├── Maintenance Coordination
├── Renovation Projects
├── Tax Advisory
└── Exit Strategy

Resources
├── Investment Guides
├── Market Reports
├── Process Documentation
├── Legal Resources
├── Tax Information
└── Download Center

Company
├── About Us
├── Our Team
├── Careers
├── Press
├── Partner Network
└── Contact

Legal
├── Privacy Policy
├── Terms of Service
├── Accessibility Statement
├── Fair Housing
└── Compliance

```

## User Journey Mapping

### Remote Investor Journey
1. **Discovery** → Homepage → Market Insights → Services Overview
2. **Research** → Case Studies → Process Documentation → FAQ
3. **Consideration** → Consultation Request → Initial Meeting → Proposal
4. **Decision** → Contract → Onboarding → Service Delivery
5. **Advocacy** → Testimonial → Referrals → Additional Properties

### Retiree/Relocating Journey
1. **Discovery** → Homepage → About → Our Story
2. **Education** → Market Insights → Neighborhood Guides → Advisory Services
3. **Trust Building** → Team → Quality Standards → Client Testimonials
4. **Engagement** → Contact → Consultation → Personalized Plan
5. **Commitment** → Service Agreement → Ongoing Relationship

### Entrepreneur Journey
1. **Discovery** → Market Reports → Investment Analysis → Revenue Model
2. **Evaluation** → Competitive Analysis → Success Stories → Performance Data
3. **Strategy** → Advisory Services → Custom Solutions → Scalability Planning
4. **Partnership** → Comprehensive Service Agreement → Portfolio Development
5. **Growth** → Expansion Services → Referral Partnership → Joint Ventures

## Content Priority Matrix

### Homepage Content Hierarchy
1. **Hero Section** (Above fold)
   - Value proposition
   - Trust indicators
   - Primary CTA
2. **Services Overview** (Above fold)
   - Core service categories
   - Benefits summary
   - Secondary CTAs
3. **Social Proof** (Second fold)
   - Client testimonials
   - Success metrics
   - Case study highlights
4. **Process Overview** (Third fold)
   - How we work
   - Quality assurance
   - Getting started

### Page-Level Content Strategy
- **Services Pages**: Feature → Benefit → Process → Pricing → CTA
- **About Pages**: Story → Team → Values → Credentials → Contact
- **Market Pages**: Data → Analysis → Insights → Implications → CTA
- **Success Pages**: Challenge → Solution → Results → Client Voice → CTA

## Navigation Design Principles

### Header Navigation
- **Sticky navigation** for easy access during scroll
- **Mega menu** for services (detailed service breakdown)
- **Mobile hamburger** menu for responsive design
- **CTA button** prominently placed (Get Started/Contact)
- **Logo** with Golden Ratio proportions

### Breadcrumb Navigation
- **All interior pages** include breadcrumbs
- **Schema markup** for SEO benefits
- **Golden Ratio spacing** for visual hierarchy
- **Click-through** to all parent levels

### Footer Navigation
- **Comprehensive sitemap** for discovery
- **Contact information** clearly displayed
- **Social media links** for community building
- **Newsletter signup** for lead generation
- **Legal compliance** links prominently placed

## Search Strategy

### Site Search (Phase 4+)
- **Global search** in header for all content
- **Filtered search** by content type (services, insights, case studies)
- **Auto-complete** suggestions based on popular queries
- **Search analytics** to understand user intent

### SEO Architecture
- **URL structure**: /category/subcategory/page-title
- **Canonical URLs** to prevent duplicate content
- **XML sitemaps** for search engine discovery
- **Internal linking** strategy following Golden Ratio principles

## Responsive Breakpoint Strategy

### Mobile-First Approach
- **320px+**: Core content and functionality
- **768px+**: Enhanced layout with sidebar content
- **1024px+**: Full desktop experience with advanced features
- **1440px+**: Large screen optimizations

### Content Adaptation
- **Navigation**: Hamburger → Horizontal → Mega menu
- **Hero**: Stacked → Side-by-side → Enhanced layout
- **Services**: Single column → Grid → Enhanced grid
- **Testimonials**: Carousel → Grid → Enhanced showcase
```

### 3.2 Page Wireframes (`docs/wireframes.md`)

```markdown
<!-- summary: Detailed wireframes for all key pages with Golden Ratio specifications -->

# Page Wireframes & Layout Specifications

## Homepage Wireframe

### Desktop Layout (1200px max-width)
```

┌─────────────────────────────────────────────────────────────┐
│ HEADER [Height: φ² × base unit = ~67px] │
│ Logo [φ ratio] | Navigation Menu | CTA Button │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ HERO SECTION [Height: φ³ × base unit = ~177px] │
│ ┌─────────────────────┐ ┌─────────────────────────────────┐ │
│ │ Headline (φ ratio) │ │ Hero Image │ │
│ │ Subheadline │ │ [Golden Rectangle] │ │
│ │ Primary CTA │ │ Trust Indicators │ │
│ │ Secondary CTA │ │ │ │
│ └─────────────────────┘ └─────────────────────────────────┘ │
│ 38.2% width 61.8% width (Golden Ratio) │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SERVICES OVERVIEW [Padding: φ² × base = ~42px] │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐ │
│ │ Acquisition │ │ Management │ │ Renovation │ │Advisory │ │
│ │ [Icon φ²] │ │ [Icon φ²] │ │ [Icon φ²] │ │[Icon φ²]│ │
│ │ Description │ │ Description │ │ Description │ │Descrip. │ │
│ │ Learn More │ │ Learn More │ │ Learn More │ │Learn More│ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────┘ │
│ Equal width cards with φ aspect ratio │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SOCIAL PROOF [Background: sand-light] │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "200+ Successful Investments" [Center, φ² font size] │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────────┐ │
│ │ Client Photo │ │ Testimonial │ │ Results Summary │ │
│ │ [Circle φ] │ │ Quote │ │ ROI: 18% │ │
│ │ │ │ Attribution │ │ Timeline: 8 months│ │
│ └───────────────┘ └───────────────┘ └───────────────────┘ │
│ 23.6% width 38.2% width 38.2% width │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ PROCESS OVERVIEW │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "How We Work" [Heading φ³ size] │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│ │Step 1 │ → │Step 2 │ → │Step 3 │ → │Step 4 │ │
│ │Initial │ │Property│ │Manage │ │Optimize│ │
│ │Consult │ │Acquire │ │& Grow │ │& Scale │ │
│ └────────┘ └────────┘ └────────┘ └────────┘ │
│ Process cards with φ spacing and connecting elements │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ FOOTER [Height: φ³ × base = ~177px] │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐ │
│ │ Services │ │ Resources │ │ Company │ │ Contact │ │
│ │ - Acquisition│ │ - Guides │ │ - About │ │ Address │ │
│ │ - Management │ │ - Reports │ │ - Team │ │ Phone │ │
│ │ - Renovation │ │ - Tools │ │ - Careers │ │ Email │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Copyright | Privacy | Terms | Accessibility │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

```

### Mobile Layout (320px+)
```

┌─────────────────────────────┐
│ HEADER [Compressed] │
│ Logo | ☰ Menu | CTA │
└─────────────────────────────┘

┌─────────────────────────────┐
│ HERO [Stacked] │
│ ┌─────────────────────────┐ │
│ │ Hero Image │ │
│ │ [Full width] │ │
│ └─────────────────────────┘ │
│ Headline [φ² size] │
│ Subheadline │
│ Primary CTA [Full width] │
│ Secondary CTA [Full width] │
└─────────────────────────────┘

┌─────────────────────────────┐
│ SERVICES [Stacked Cards] │
│ ┌─────────────────────────┐ │
│ │ Property Acquisition │ │
│ │ [Icon] Description │ │
│ │ [Learn More Button] │ │
│ └─────────────────────────┘ │
│ [Repeat for all services] │
└─────────────────────────────┘

┌─────────────────────────────┐
│ SOCIAL PROOF [Stacked] │
│ Stats Banner │
│ ┌─────────────────────────┐ │
│ │ Client Photo │ │
│ │ Testimonial Quote │ │
│ │ Results Summary │ │
│ └─────────────────────────┘ │
│ [Horizontal scroll for more]│
└─────────────────────────────┘

```

## Service Pages Wireframe

### Property Acquisition Service Page
```

┌─────────────────────────────────────────────────────────────┐
│ BREADCRUMB: Home > Services > Property Acquisition │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ PAGE HEADER [φ² height] │
│ ┌─────────────────────┐ ┌─────────────────────────────────┐ │
│ │ Service Title │ │ Hero Image │ │
│ │ [φ³ font size] │ │ [Golden Rectangle] │ │
│ │ Value Proposition │ │ Process Illustration │ │
│ │ Key Benefits │ │ │ │
│ │ CTA: Get Started │ │ │ │
│ └─────────────────────┘ └─────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ SERVICE DETAILS [Two-column layout] │
│ ┌─────────────────────────────────────┐ ┌─────────────────┐ │
│ │ MAIN CONTENT [61.8% width] │ │ SIDEBAR [38.2%] │ │
│ │ │ │ │ │
│ │ What's Included │ │ Quick Facts │ │
│ │ - Initial consultation │ │ - Timeline │ │
│ │ - Property search │ │ - Investment │ │
│ │ - Due diligence │ │ - ROI range │ │
│ │ - Closing coordination │ │ │ │
│ │ │ │ Process Steps │ │
│ │ Our Process [φ² heading] │ │ 1. Consultation │ │
│ │ [Step-by-step breakdown] │ │ 2. Search │ │
│ │ │ │ 3. Analysis │ │
│ │ Pricing Structure │ │ 4. Closing │ │
│ │ [Transparent pricing table] │ │ │ │
│ │ │ │ Contact Card │ │
││ Success Stories │ │ [CTA form] │ │
│ │ [Related case studies] │ │ │ │
│ └─────────────────────────────────────┘ └─────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ RELATED SERVICES [Horizontal cards] │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ Property │ │ Renovation │ │ Advisory │ │
│ │ Management │ │ Management │ │ Services │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
└─────────────────────────────────────────────────────────────┘

```

## About Pages Wireframe

### Our Story Page
```

┌─────────────────────────────────────────────────────────────┐
│ HERO SECTION [Brand story introduction] │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "Bridging Mainland Investors with Puerto Rico Success" │ │
│ │ [φ³ heading size, center aligned] │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────┐ ┌─────────────────────────────────┐ │
│ │ Founder Story │ │ Founder Image │ │
│ │ [Personal narrative]│ │ [Professional portrait] │ │
│ │ Mission Statement │ │ [Golden Rectangle] │ │
│ └─────────────────────┘ └─────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ COMPANY TIMELINE [Horizontal timeline] │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│ │ 2018 │────│ 2020 │────│ 2022 │────│ 2024 │ │
│ │Founded │ │50 Props│ │100+ │ │200+ │ │
│ │Company │ │Managed │ │Clients │ │Success │ │
│ └────────┘ └────────┘ └────────┘ └────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ VALUES & PRINCIPLES [Three-column layout] │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ Trust │ │ Expertise │ │ Care │ │
│ │ [Icon φ²] │ │ [Icon φ²] │ │ [Icon φ²] │ │
│ │ Description │ │ Description │ │ Description │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ Quality │ │ Transparency│ │ Results │ │
│ │ [Icon φ²] │ │ [Icon φ²] │ │ [Icon φ²] │ │
│ │ Description │ │ Description │ │ Description │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
└─────────────────────────────────────────────────────────────┘

```

## Case Study Page Wireframe

### Individual Case Study Layout
```

┌─────────────────────────────────────────────────────────────┐
│ CASE STUDY HEADER │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Property Address, San Juan [φ² heading] │ │
│ │ "From Distressed to Dream Investment" │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────┐ │
│ │ Investment │ │ Timeline │ │ ROI │ │ Status │ │
│ │ $125,000 │ │ 6 months │ │ 22% annual │ │ Active │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ BEFORE/AFTER SHOWCASE │
│ ┌─────────────────────┐ ┌─────────────────────────────────┐ │
│ │ BEFORE │ │ AFTER │ │
│ │ [Image gallery] │ │ [Image gallery] │ │
│ │ Property condition │ │ Transformation results │ │
│ └─────────────────────┘ └─────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CHALLENGE/SOLUTION/RESULTS [Three-section layout] │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ THE CHALLENGE [φ² heading] │ │
│ │ - Property condition issues │ │
│ │ - Market timing concerns │ │
│ │ - Regulatory complexities │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ OUR SOLUTION [φ² heading] │ │
│ │ - Strategic renovation approach │ │
│ │ - Expedited permitting process │ │
│ │ - Quality contractor network │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ THE RESULTS [φ² heading] │ │
│ │ - 22% annual ROI achieved │ │
│ │ - Property value increased 40% │ │
│ │ - Tenant secured within 30 days │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CLIENT TESTIMONIAL [Centered, featured] │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [Client photo] │ │
│ │ "Quote about experience and results" │ │
│ │ - Client Name, Location │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

```

## Contact Page Wireframe

### Multi-Touch Contact Experience
```

┌─────────────────────────────────────────────────────────────┐
│ CONTACT HERO │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "Ready to Start Your Puerto Rico Investment Journey?" │ │
│ │ [φ³ heading, center aligned] │ │
│ │ Multiple ways to connect with our team │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ CONTACT OPTIONS [Three-column layout] │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ Schedule │ │ Quick │ │ Direct │ │
│ │ Consultation│ │ Questions │ │ Contact │ │
│ │ │ │ │ │ │ │
│ │ [Calendar │ │ [Contact │ │ Phone: │ │
│ │ widget] │ │ form] │ │ Email: │ │
│ │ │ │ │ │ Address: │ │
│ │ 30-min free │ │ Get response│ │ Office hrs │ │
│ │ consultation│ │ within 24hrs│ │ Visit us │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ FAQ SECTION [Expandable accordion] │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ + What are your service fees? │ │
│ │ + How long does property acquisition take? │ │
│ │ + Do you work with first-time investors? │ │
│ │ + What's included in property management? │ │
│ │ + How do you handle emergencies? │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ OFFICE LOCATION [Map integration] │
│ ┌─────────────────────┐ ┌─────────────────────────────────┐ │
│ │ Interactive Map │ │ Office Information │ │
│ │ [Google Maps embed] │ │ Address │ │
│ │ │ │ Hours │ │
│ │ │ │ Parking information │ │
│ │ │ │ Public transport │ │
│ └─────────────────────┘ └─────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

```

## Design System Application Notes

### Golden Ratio Measurements
- **Base unit**: 16px (1rem)
- **φ ratio**: 1.618
- **φ² ratio**: 2.618
- **φ³ ratio**: 4.236

### Spacing Applications
- **Section padding**: φ² × base = ~42px
- **Card spacing**: φ × base = ~26px
- **Element margins**: φ × base or φ² × base
- **Grid gutters**: φ × base = ~26px

### Typography Scale in Wireframes
- **Hero headings**: φ³ × base = ~68px
- **Section headings**: φ² × base = ~42px
- **Card titles**: φ × base = ~26px
- **Body text**: 1 × base = 16px

### Component Proportions
- **Buttons**: Height follows φ⁻¹ ratio to width
- **Cards**: φ aspect ratio (1.618:1) where possible
- **Images**: Golden rectangle proportions
- **Sidebar**: 38.2% width (φ⁻¹ × 61.8%)
- **Main content**: 61.8% width (φ⁻¹)

### Responsive Breakpoints
- **Mobile**: 320px+ (single column, stacked)
- **Tablet**: 768px+ (two-column where appropriate)
- **Desktop**: 1024px+ (full layout with sidebars)
- **Large**: 1440px+ (enhanced spacing and typography)
```

### 3.3 Component Specifications (`docs/component-specs.md`)

```markdown
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
│ ←─φ─→ ←─φ─→ ←─φ─→ ←─φ─→ ←─φ─→ ←─φ²─→ │
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
│ [×] Close │
│ │
│ Services │
│ About │
│ Market Insights │
│ Success Stories │
│ Contact │
│ │
│ [Get Started Button] │
│ │
│ Contact Info │
│ Social Links │
└─────────────────────────────┘

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
│ [Service Icon - φ² size] │
│ │
│ Service Title [φ font size] │
│ │
│ Description text [base size] │
│ 2-3 lines maximum │
│ │
│ Key benefits (3-4 bullets) │
│ │
│ [Learn More Button] │
└─────────────────────────────────┘

Interaction:

- Hover: Lift transform (4px up), shadow increase
- Icon: Subtle scale transform on hover
- Button: Color change to brand-navy
- Transition: 0.3s ease for all animations

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
│ " Quote text [φ font size] │
│ Multi-line testimonial │
│ content with proper │
│ line-height φ ratio " │
│ │
│ ┌─────┐ Client Name │
│ │Photo│ Title/Location │
│ │ φ² │ [Secondary text size] │
│ └─────┘ │
│ │
│ Results Summary (optional) │
│ ROI: 18% | Timeline: 8 months │
└─────────────────────────────────┘

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
│ │
│ [Property Image] │
│ [Before/After overlay] │
│ │
├─────────────────────────────────┤
│ Property Address │
│ Investment: $X | ROI: Y% │
│ [Read Case Study] │
└─────────────────────────────────┘

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
│ Name _ [Input - Required] │
│ Email _ [Input - Required] │
│ Phone [Input - Optional] │
│ Investment Budget [Select] │
│ Timeline [Select] │
│ Message [Textarea - 120px high] │
│ │
│ [Submit Button - Full width] │
└─────────────────────────────────┘

Validation:

- Real-time validation on blur
- Error states: Red border, error message
- Success states: Green border, checkmark
- Disabled state: Gray background, no interaction

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
│ [Email Input ] [Subscribe] │
│ ←─────φ³────────→ ←───φ²────→ │
└─────────────────────────────────┘

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

### Secondary Button
```

Specifications:

- Same dimensions as primary
- Background: Transparent
- Border: 2px solid brand-blue
- Color: brand-blue
- Hover: Filled with brand-blue, white text

```

### Ghost Button
```

Specifications:

- Same dimensions as primary/secondary
- Background: Transparent
- Border: None
- Color: brand-blue
- Hover: Background sand-light
- Underline on hover for text links

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
│ Property Property Renovation Advisory │
│ Acquisition Management Management Services │
│ │
│ • Property • Monthly • Project • Tax │
│ Search Management Planning Strategy │
│ • Due • Tenant • Contractor • Market │
│ Diligence Services Management Analysis │
│ • Closing • Maintenance • Quality • Investment│
│ Support Coordination Assurance Planning │
│ │
│ [Learn More] [Learn More] [Learn More] [Learn More]│
└─────────────────────────────────────────────────────────────┘

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
│ Services │ │ Resources │ │ Company │ │ Contact │
│ [Links] │ │ [Links] │ │ [Links] │ │ [Info] │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘

Bottom Section:
┌─────────────────────────────────────────────────────────────┐
│ Logo | Social Icons | Copyright | Legal Links │
│ ←φ²→ ←────φ³────→ ←───φ────→ ←────φ²────→ │
└─────────────────────────────────────────────────────────────┘

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
```

### 3.4 Responsive Design Strategy (`docs/responsive-strategy.md`)

```markdown
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

````

### Breakpoint Definitions
```css
/* Mobile First Approach */
:root {
  --bp-xs: 20rem;      /* 320px - Mobile portrait */
  --bp-sm: 32.36rem;   /* 518px - Mobile landscape */
  --bp-md: 52.36rem;   /* 838px - Tablet portrait */
  --bp-lg: 84.72rem;   /* 1356px - Desktop */
  --bp-xl: 137.08rem;  /* 2193px - Large desktop */
}

/* Usage in media queries */
@media (min-width: 32.36rem) { /* Mobile landscape and up */ }
@media (min-width: 52.36rem) { /* Tablet and up */ }
@media (min-width: 84.72rem) { /* Desktop and up */ }
@media (min-width: 137.08rem) { /* Large desktop */ }
````

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
  aspect-ratio: 1.618 / 1;
  object-fit: cover;
  width: 100%;
}

/* Service card images */
.service-card img {
  aspect-ratio: 1.618 / 1;
  object-fit: cover;
  width: 100%;
  border-radius: var(--radius-md);
}

/* Testimonial profile images */
.testimonial-photo {
  width: calc(var(--space-2xl) * 1.618);
  height: calc(var(--space-2xl) * 1.618);
  border-radius: 50%;
  object-fit: cover;
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
    flex: 1.618; /* φ proportion */
  }

  .form-group-secondary {
    flex: 1; /* 1 proportion */
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
```

### Critical CSS Strategy

```
Above-the-fold content (mobile):
- Header styles
- Hero section styles
- Primary button styles
- Base typography
- Mobile navigation

Defer loading:
- Footer styles
- Advanced animations
- Non-critical interactive elements
- Large screen specific styles
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

This responsive strategy ensures the site works beautifully across all devices while maintaining the Golden Ratio design principles and providing an optimal user experience at every breakpoint.

```

## 🔧 Implementation Guidelines

### Phase 3 Deliverables (Complete these in order):
1. ✅ Create `docs/information-architecture.md` - Complete site structure and navigation strategy
2. ✅ Create `docs/wireframes.md` - Detailed wireframes for all key pages with Golden Ratio specifications
3. ✅ Create `docs/component-specs.md` - Component specifications with measurements and interactions
4. ✅ Create `docs/responsive-strategy.md` - Comprehensive responsive design strategy
5. ✅ Update README.md Phase 3 checkbox as complete
6. ✅ Create and close Phase 3 GitHub issue
7. ✅ Run CI pipeline to ensure all new documentation validates

### Design System Validation
- [ ] All wireframes use Golden Ratio proportions (φ = 1.618)
- [ ] Typography scale follows φ progression consistently
- [ ] Spacing system applies φ ratios throughout
- [ ] Component specifications include all interaction states
- [ ] Responsive breakpoints follow φ mathematical progression
- [ ] All designs maintain brand identity from Phase 2

### Phase 4 Preparation Checklist
After completing Phase 3, you'll be ready for Phase 4: Technical Architecture, which will include:
- Technology stack selection and justification
- Build process and development workflow setup
- Performance optimization strategy
- SEO technical implementation plan
- Accessibility implementation requirements
- Component development architecture

### Validation Checkpoints:
- [ ] All markdown files include `<!-- summary: ... -->` headers
- [ ] Wireframes specify exact Golden Ratio measurements
- [ ] Component specs include all interaction states and accessibility requirements
- [ ] Responsive strategy covers all breakpoints with specific adaptations
- [ ] Information architecture supports all three customer personas
- [ ] Design specifications translate brand identity into concrete visual elements

### Quality Assurance:
- [ ] All wireframes account for mobile-first responsive design
- [ ] Component specifications include WCAG 2.2 AA accessibility requirements
- [ ] Typography and spacing maintain mathematical consistency
- [ ] All user journeys are supported by the information architecture
- [ ] Design system can be implemented with modern CSS (Grid, Flexbox, Custom Properties)

---

**Rules Reminder**:
- Every new file needs `<!-- summary: ... -->` at the top
- Use lowercase-kebab-case for filenames
- Update README phase checkboxes as you complete each deliverable
- Create GitHub issues to track progress
- Ensure all measurements follow Golden Ratio mathematics (φ = 1.618)
- Maintain consistency with Phase 2 brand identity and design tokens

This prompt translates the strategic business and brand foundation from Phases 1-2 into concrete, implementable design specifications that developers can follow to build the actual website in subsequent phases.
```

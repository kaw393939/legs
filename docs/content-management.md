# Content Management

## Content Architecture Overview

The site uses a **file-based content management system** with JSON files that are easy to edit and maintain. This approach provides:

- **Simple editing** for non-technical users
- **Version control** for all content changes
- **Fast loading** with no database queries
- **Easy backup** and migration

## Content Structure

### Site Configuration (`/public/data/config.json`)

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
    },
    "social": {
      "facebook": "https://facebook.com/yourpage",
      "instagram": "https://instagram.com/yourpage",
      "linkedin": "https://linkedin.com/company/yourcompany"
    }
  },
  "business": {
    "hours": {
      "monday": "9:00 AM - 6:00 PM",
      "tuesday": "9:00 AM - 6:00 PM",
      "wednesday": "9:00 AM - 6:00 PM",
      "thursday": "9:00 AM - 6:00 PM",
      "friday": "9:00 AM - 6:00 PM",
      "saturday": "10:00 AM - 4:00 PM",
      "sunday": "Closed"
    },
    "license": "RE License #12345678",
    "established": "2010"
  }
}
```

### Navigation Structure (`/public/data/navigation.json`)

```json
{
  "main": [
    {
      "label": "Home",
      "url": "/",
      "active": true
    },
    {
      "label": "Properties",
      "url": "/properties",
      "dropdown": [
        {
          "label": "Luxury Homes",
          "url": "/properties?category=luxury"
        },
        {
          "label": "Investment Properties",
          "url": "/properties?category=investment"
        },
        {
          "label": "Commercial",
          "url": "/properties?category=commercial"
        }
      ]
    },
    {
      "label": "Services",
      "url": "/services",
      "dropdown": [
        {
          "label": "Property Management",
          "url": "/services/property-management"
        },
        {
          "label": "Investment Analysis",
          "url": "/services/investment-analysis"
        },
        {
          "label": "Market Research",
          "url": "/services/market-research"
        }
      ]
    },
    {
      "label": "About",
      "url": "/about"
    },
    {
      "label": "Contact",
      "url": "/contact"
    }
  ],
  "footer": [
    {
      "section": "Services",
      "links": [
        {
          "label": "Property Management",
          "url": "/services/property-management"
        },
        {
          "label": "Investment Analysis",
          "url": "/services/investment-analysis"
        },
        { "label": "Market Research", "url": "/services/market-research" }
      ]
    },
    {
      "section": "Properties",
      "links": [
        { "label": "Luxury Homes", "url": "/properties?category=luxury" },
        {
          "label": "Investment Properties",
          "url": "/properties?category=investment"
        },
        { "label": "Commercial", "url": "/properties?category=commercial" }
      ]
    },
    {
      "section": "Company",
      "links": [
        { "label": "About Us", "url": "/about" },
        { "label": "Our Team", "url": "/about#team" },
        { "label": "Careers", "url": "/careers" },
        { "label": "Contact", "url": "/contact" }
      ]
    }
  ]
}
```

## Page Content Management

### Homepage Content (`/public/data/content/home.json`)

```json
{
  "meta": {
    "title": "Premier Real Estate Investments | Luxury Properties",
    "description": "Discover exceptional real estate investment opportunities with our expert team. Luxury homes, commercial properties, and investment analysis.",
    "keywords": [
      "real estate",
      "luxury homes",
      "investment properties",
      "property management"
    ]
  },
  "hero": {
    "headline": "Exceptional Real Estate Investments",
    "subheadline": "Discover luxury properties and investment opportunities with expert guidance and personalized service.",
    "background_image": "/images/hero/luxury-home-exterior.jpg",
    "cta_primary": {
      "text": "View Properties",
      "url": "/properties"
    },
    "cta_secondary": {
      "text": "Investment Analysis",
      "url": "/services/investment-analysis"
    }
  },
  "sections": {
    "featured_properties": {
      "title": "Featured Properties",
      "subtitle": "Handpicked investment opportunities",
      "properties": ["property-001", "property-002", "property-003"]
    },
    "services_overview": {
      "title": "Our Services",
      "subtitle": "Comprehensive real estate solutions",
      "services": [
        {
          "title": "Property Management",
          "description": "Full-service property management for maximum returns",
          "icon": "/images/icons/property-management.svg",
          "url": "/services/property-management"
        },
        {
          "title": "Investment Analysis",
          "description": "Detailed ROI analysis and market insights",
          "icon": "/images/icons/investment-analysis.svg",
          "url": "/services/investment-analysis"
        },
        {
          "title": "Market Research",
          "description": "Comprehensive market data and trends",
          "icon": "/images/icons/market-research.svg",
          "url": "/services/market-research"
        }
      ]
    },
    "testimonials": {
      "title": "Client Success Stories",
      "testimonials": [
        {
          "quote": "Outstanding service and exceptional results. Highly recommended!",
          "author": "Sarah Johnson",
          "title": "Property Investor",
          "image": "/images/testimonials/sarah-johnson.jpg"
        },
        {
          "quote": "Professional, knowledgeable, and always available when needed.",
          "author": "Michael Chen",
          "title": "Real Estate Developer",
          "image": "/images/testimonials/michael-chen.jpg"
        }
      ]
    }
  }
}
```

### Services Page Content (`/public/data/content/services.json`)

```json
{
  "meta": {
    "title": "Real Estate Services | Property Management & Investment Analysis",
    "description": "Comprehensive real estate services including property management, investment analysis, and market research for maximized returns."
  },
  "hero": {
    "headline": "Comprehensive Real Estate Services",
    "subheadline": "Expert solutions for property owners and investors"
  },
  "services": [
    {
      "id": "property-management",
      "title": "Property Management",
      "description": "Full-service property management to maximize your investment returns",
      "features": [
        "Tenant screening and placement",
        "Rent collection and accounting",
        "Maintenance and repairs",
        "Regular property inspections",
        "Financial reporting",
        "Legal compliance"
      ],
      "pricing": {
        "residential": "8% of monthly rent",
        "commercial": "Custom pricing"
      },
      "cta": {
        "text": "Learn More",
        "url": "/services/property-management"
      }
    },
    {
      "id": "investment-analysis",
      "title": "Investment Analysis",
      "description": "Detailed financial analysis to identify profitable investment opportunities",
      "features": [
        "ROI calculations",
        "Cash flow projections",
        "Market comparisons",
        "Risk assessments",
        "Exit strategy planning",
        "Tax implications"
      ],
      "pricing": {
        "basic": "$500 per property",
        "comprehensive": "$1,500 per property"
      },
      "cta": {
        "text": "Request Analysis",
        "url": "/contact?service=investment-analysis"
      }
    }
  ]
}
```

## Property Data Management

### Property Listings Index (`/public/data/properties/properties-list.json`)

```json
{
  "properties": [
    {
      "id": "property-001",
      "title": "Luxury Waterfront Estate",
      "location": "Miami Beach, FL",
      "price": "$2,950,000",
      "status": "available",
      "category": "luxury",
      "featured": true,
      "thumbnail": "/images/properties/property-001/thumbnail.jpg"
    },
    {
      "id": "property-002",
      "title": "Downtown Investment Condo",
      "location": "Austin, TX",
      "price": "$485,000",
      "status": "under-contract",
      "category": "investment",
      "featured": true,
      "thumbnail": "/images/properties/property-002/thumbnail.jpg"
    }
  ],
  "filters": {
    "categories": ["luxury", "investment", "commercial"],
    "price_ranges": [
      { "label": "Under $500K", "min": 0, "max": 500000 },
      { "label": "$500K - $1M", "min": 500000, "max": 1000000 },
      { "label": "$1M - $2M", "min": 1000000, "max": 2000000 },
      { "label": "Over $2M", "min": 2000000, "max": null }
    ],
    "locations": [
      "Miami Beach, FL",
      "Austin, TX",
      "Nashville, TN",
      "Denver, CO"
    ]
  }
}
```

### Individual Property Data (`/public/data/properties/property-001.json`)

```json
{
  "id": "property-001",
  "title": "Luxury Waterfront Estate",
  "description": "Stunning waterfront estate with panoramic ocean views, private beach access, and world-class amenities.",
  "price": "$2,950,000",
  "location": {
    "address": "123 Ocean Drive",
    "city": "Miami Beach",
    "state": "FL",
    "zip": "33139",
    "coordinates": {
      "lat": 25.7617,
      "lng": -80.1918
    }
  },
  "details": {
    "bedrooms": 5,
    "bathrooms": 4.5,
    "sqft": 4200,
    "lot_size": "0.75 acres",
    "year_built": 2018,
    "property_type": "Single Family Home",
    "architectural_style": "Modern Contemporary"
  },
  "features": [
    "Private beach access",
    "Infinity pool with spa",
    "Gourmet chef's kitchen",
    "Master suite with ocean views",
    "Home theater",
    "Wine cellar",
    "3-car garage",
    "Smart home automation"
  ],
  "images": [
    "/images/properties/property-001/exterior-1.jpg",
    "/images/properties/property-001/living-room.jpg",
    "/images/properties/property-001/kitchen.jpg",
    "/images/properties/property-001/master-bedroom.jpg",
    "/images/properties/property-001/pool.jpg",
    "/images/properties/property-001/beach-view.jpg"
  ],
  "investment_data": {
    "cap_rate": "4.2%",
    "rental_income": "$15,000/month",
    "roi_projection": "8.5% annually",
    "appreciation_rate": "4.1% annually",
    "property_taxes": "$24,500/year",
    "maintenance_costs": "$8,000/year"
  },
  "neighborhood": {
    "description": "Exclusive waterfront community with world-class dining, shopping, and entertainment.",
    "amenities": [
      "Private marina",
      "Golf course",
      "Fitness center",
      "Concierge services"
    ],
    "schools": [
      {
        "name": "Coral Gables Elementary",
        "rating": "A+",
        "distance": "0.8 miles"
      }
    ]
  },
  "status": "available",
  "listing_date": "2024-01-15",
  "agent": {
    "name": "Sarah Mitchell",
    "phone": "(305) 555-0123",
    "email": "sarah@yoursite.com",
    "photo": "/images/team/sarah-mitchell.jpg"
  }
}
```

## Team Management

### Team Directory (`/public/data/team/team-list.json`)

```json
{
  "team": [
    {
      "id": "sarah-mitchell",
      "name": "Sarah Mitchell",
      "role": "Senior Real Estate Advisor",
      "specialties": ["Luxury Properties", "Investment Analysis"],
      "photo": "/images/team/sarah-mitchell.jpg",
      "featured": true
    },
    {
      "id": "michael-rodriguez",
      "name": "Michael Rodriguez",
      "role": "Property Manager",
      "specialties": ["Commercial Properties", "Asset Management"],
      "photo": "/images/team/michael-rodriguez.jpg",
      "featured": true
    }
  ]
}
```

### Individual Team Member (`/public/data/team/sarah-mitchell.json`)

```json
{
  "id": "sarah-mitchell",
  "name": "Sarah Mitchell",
  "role": "Senior Real Estate Advisor",
  "bio": "With over 15 years of experience in luxury real estate, Sarah specializes in waterfront properties and high-end investment opportunities.",
  "photo": "/images/team/sarah-mitchell.jpg",
  "contact": {
    "phone": "(305) 555-0123",
    "email": "sarah@yoursite.com",
    "linkedin": "https://linkedin.com/in/sarahmitchell"
  },
  "specialties": [
    "Luxury Properties",
    "Investment Analysis",
    "Waterfront Estates",
    "International Buyers"
  ],
  "credentials": [
    "Licensed Real Estate Broker",
    "Certified Investment Property Specialist",
    "MBA Finance"
  ],
  "languages": ["English", "Spanish", "Portuguese"],
  "achievements": [
    "Top 1% of agents nationwide",
    "$50M+ in annual sales",
    "100+ satisfied clients"
  ]
}
```

## Content Validation

### JSON Schema Validation

```javascript
// scripts/validate-content.js
import Ajv from "ajv";
import fs from "fs";
import path from "path";

const ajv = new Ajv();

// Property schema
const propertySchema = {
  type: "object",
  required: ["id", "title", "price", "location", "details"],
  properties: {
    id: { type: "string" },
    title: { type: "string" },
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

const validateProperties = () => {
  const propertiesDir = "public/data/properties";
  const files = fs.readdirSync(propertiesDir);

  files.forEach((file) => {
    if (file.endsWith(".json") && file !== "properties-list.json") {
      const data = JSON.parse(fs.readFileSync(path.join(propertiesDir, file)));
      const valid = ajv.validate(propertySchema, data);

      if (!valid) {
        console.error(`Validation failed for ${file}:`, ajv.errors);
      }
    }
  });
};
```

## Content Update Workflows

### Adding New Property

1. **Create property JSON file**: `/public/data/properties/property-xxx.json`
2. **Add property images**: `/public/images/properties/property-xxx/`
3. **Update properties list**: Add to `/public/data/properties/properties-list.json`
4. **Test locally**: Verify property displays correctly
5. **Commit changes**: Use descriptive commit message

### Updating Page Content

1. **Edit JSON file**: Update relevant content file
2. **Preview changes**: Test with development server
3. **Validate JSON**: Ensure valid JSON syntax
4. **Commit changes**: Deploy automatically

### Managing Navigation

1. **Edit navigation.json**: Update menu structure
2. **Test all links**: Verify navigation functionality
3. **Update responsive menu**: Ensure mobile compatibility
4. **Deploy changes**: Automatic deployment

## SEO and Meta Data

### Page Meta Data

Each content file includes meta data for SEO:

```json
{
  "meta": {
    "title": "Page Title | Site Name",
    "description": "Page description for search engines",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "og_image": "/images/og/page-image.jpg",
    "canonical": "https://yoursite.com/page-url"
  }
}
```

### Automatic Sitemap Generation

```javascript
// scripts/generate-sitemap.js
const generateSitemap = () => {
  const pages = [];
  const properties = [];

  // Collect all pages and properties
  // Generate XML sitemap
  // Update robots.txt
};
```

This content management system provides:

- **Easy updates** for non-technical users
- **Version control** for all content changes
- **Structured data** for SEO benefits
- **Flexible organization** for scalable growth

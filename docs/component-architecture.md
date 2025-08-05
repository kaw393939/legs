# Component Architecture

## Component Structure

Each component follows a consistent pattern:

```
/src/components/
  ├── Header/
  │   ├── Header.js          ← Component class
  │   ├── Header.css         ← Component styles
  │   ├── Header.html        ← Component template
  │   └── Header.test.js     ← Component tests
  ├── Hero/
  ├── PropertyCard/
  ├── ContactForm/
  └── Footer/
```

## Base Component Class

```javascript
// /src/components/BaseComponent.js
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
      if (!response.ok) throw new Error(`Template not found: ${componentName}`);
      const template = await response.text();
      this.shadowRoot.innerHTML = template;
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

  // Utility method for data binding
  bindData(selector, data, property = "textContent") {
    const element = this.shadowRoot.querySelector(selector);
    if (element && data) {
      element[property] = data;
    }
  }

  // Utility method for event delegation
  delegate(eventType, selector, handler) {
    this.shadowRoot.addEventListener(eventType, (event) => {
      const target = event.target.closest(selector);
      if (target) {
        handler.call(target, event);
      }
    });
  }
}
```

## Core Components

### Header Component

```javascript
// /src/components/Header/Header.js
import { BaseComponent } from "../BaseComponent.js";

export class Header extends BaseComponent {
  static get observedAttributes() {
    return ["variant", "transparent"];
  }

  async updateContent() {
    try {
      const response = await fetch("/data/navigation.json");
      const navigationData = await response.json();
      this.renderNavigation(navigationData.main);
    } catch (error) {
      console.error("Failed to load navigation data:", error);
    }
  }

  renderNavigation(navItems) {
    const nav = this.shadowRoot.querySelector(".nav-links");
    if (!nav) return;

    nav.innerHTML = "";
    navItems.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.label;
      link.className = "nav-link";

      if (item.dropdown) {
        link.classList.add("has-dropdown");
        const dropdown = this.createDropdown(item.dropdown);
        const wrapper = document.createElement("div");
        wrapper.className = "nav-item-wrapper";
        wrapper.appendChild(link);
        wrapper.appendChild(dropdown);
        nav.appendChild(wrapper);
      } else {
        nav.appendChild(link);
      }
    });
  }

  createDropdown(items) {
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown-menu";

    items.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.label;
      link.className = "dropdown-link";
      dropdown.appendChild(link);
    });

    return dropdown;
  }

  bindEvents() {
    const mobileToggle = this.shadowRoot.querySelector(".mobile-toggle");
    const mobileMenu = this.shadowRoot.querySelector(".mobile-menu");

    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!this.contains(event.target)) {
        mobileMenu?.classList.remove("active");
      }
    });
  }
}

customElements.define("site-header", Header);
```

### Hero Component

```javascript
// /src/components/Hero/Hero.js
import { BaseComponent } from "../BaseComponent.js";

export class Hero extends BaseComponent {
  static get observedAttributes() {
    return ["page", "variant"];
  }

  get page() {
    return this.getAttribute("page") || "home";
  }

  async updateContent() {
    try {
      const response = await fetch(`/data/content/${this.page}.json`);
      const pageData = await response.json();

      if (pageData.hero) {
        this.renderHero(pageData.hero);
      }
    } catch (error) {
      console.error("Failed to load hero data:", error);
    }
  }

  renderHero(heroData) {
    this.bindData(".hero-headline", heroData.headline);
    this.bindData(".hero-subheadline", heroData.subheadline);

    const primaryCTA = this.shadowRoot.querySelector(".cta-primary");
    if (primaryCTA && heroData.cta_primary) {
      primaryCTA.textContent = heroData.cta_primary.text;
      primaryCTA.href = heroData.cta_primary.url;
    }

    const secondaryCTA = this.shadowRoot.querySelector(".cta-secondary");
    if (secondaryCTA && heroData.cta_secondary) {
      secondaryCTA.textContent = heroData.cta_secondary.text;
      secondaryCTA.href = heroData.cta_secondary.url;
    }

    const bgImage = this.shadowRoot.querySelector(".hero-background");
    if (bgImage && heroData.background_image) {
      bgImage.style.backgroundImage = `url(${heroData.background_image})`;
    }
  }
}

customElements.define("hero-section", Hero);
```

### Property Card Component

```javascript
// /src/components/PropertyCard/PropertyCard.js
import { BaseComponent } from "../BaseComponent.js";

export class PropertyCard extends BaseComponent {
  static get observedAttributes() {
    return ["property-id", "variant"];
  }

  get propertyId() {
    return this.getAttribute("property-id");
  }

  async updateContent() {
    if (!this.propertyId) return;

    try {
      const propertyData = await this.fetchPropertyData(this.propertyId);
      this.populateTemplate(propertyData);
    } catch (error) {
      console.error("Failed to load property data:", error);
      this.showError();
    }
  }

  async fetchPropertyData(id) {
    const response = await fetch(`/data/properties/${id}.json`);
    if (!response.ok) {
      throw new Error(`Property not found: ${id}`);
    }
    return await response.json();
  }

  populateTemplate(data) {
    this.bindData(".property-title", data.title);
    this.bindData(".property-price", data.price);
    this.bindData(".property-location", data.location);
    this.bindData(".property-description", data.description);
    this.bindData(".property-bedrooms", data.bedrooms);
    this.bindData(".property-bathrooms", data.bathrooms);
    this.bindData(".property-sqft", data.sqft);

    const image = this.shadowRoot.querySelector(".property-image");
    if (image && data.images && data.images.length > 0) {
      image.src = data.images[0];
      image.alt = data.title;
    }

    const statusBadge = this.shadowRoot.querySelector(".property-status");
    if (statusBadge) {
      statusBadge.textContent = data.status;
      statusBadge.className = `property-status status-${data.status}`;
    }

    this.renderFeatures(data.features);
    this.renderInvestmentData(data.investment_data);
  }

  renderFeatures(features) {
    const featuresList = this.shadowRoot.querySelector(".property-features");
    if (!featuresList || !features) return;

    featuresList.innerHTML = "";
    features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  }

  renderInvestmentData(investmentData) {
    if (!investmentData) return;

    this.bindData(".cap-rate", investmentData.cap_rate);
    this.bindData(".rental-income", investmentData.rental_income);
    this.bindData(".roi-projection", investmentData.roi_projection);
  }

  showError() {
    this.shadowRoot.innerHTML = `
      <div class="property-card error">
        <p>Failed to load property information</p>
      </div>
    `;
  }

  bindEvents() {
    const card = this.shadowRoot.querySelector(".property-card");
    if (card) {
      card.addEventListener("click", () => {
        if (this.propertyId) {
          window.location.href = `/properties/${this.propertyId}`;
        }
      });
    }
  }
}

customElements.define("property-card", PropertyCard);
```

### Contact Form Component

```javascript
// /src/components/ContactForm/ContactForm.js
import { BaseComponent } from "../BaseComponent.js";

export class ContactForm extends BaseComponent {
  static get observedAttributes() {
    return ["form-type", "property-id"];
  }

  bindEvents() {
    const form = this.shadowRoot.querySelector(".contact-form");
    if (form) {
      form.addEventListener("submit", this.handleSubmit.bind(this));
    }
  }

  async handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Add property ID if this is a property inquiry
    if (this.getAttribute("property-id")) {
      data.propertyId = this.getAttribute("property-id");
    }

    try {
      this.showLoading();
      await this.submitForm(data);
      this.showSuccess();
    } catch (error) {
      console.error("Form submission failed:", error);
      this.showError(error.message);
    }
  }

  async submitForm(data) {
    // This would connect to your backend API
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return response.json();
  }

  showLoading() {
    const submitBtn = this.shadowRoot.querySelector(".submit-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }
  }

  showSuccess() {
    const form = this.shadowRoot.querySelector(".contact-form");
    const message = this.shadowRoot.querySelector(".form-message");

    if (form) form.style.display = "none";
    if (message) {
      message.textContent =
        "Thank you! Your message has been sent successfully.";
      message.className = "form-message success";
      message.style.display = "block";
    }
  }

  showError(errorMessage) {
    const submitBtn = this.shadowRoot.querySelector(".submit-btn");
    const message = this.shadowRoot.querySelector(".form-message");

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }

    if (message) {
      message.textContent = `Error: ${errorMessage}`;
      message.className = "form-message error";
      message.style.display = "block";
    }
  }
}

customElements.define("contact-form", ContactForm);
```

## Content Management Integration

- **Data-Driven Components**: Components read from JSON files
- **Template Placeholders**: Components bind data to DOM elements
- **Dynamic Loading**: Async data fetching for complex components
- **State Management**: Simple state store for component communication
- **Error Handling**: Graceful fallbacks for missing data
- **Lazy Loading**: Components load data only when needed

## Component Registration

All components are automatically registered when their modules are imported:

```javascript
// /src/scripts/components.js
import "./components/Header/Header.js";
import "./components/Hero/Hero.js";
import "./components/PropertyCard/PropertyCard.js";
import "./components/ContactForm/ContactForm.js";
import "./components/Footer/Footer.js";
```

## Testing Strategy

- **Unit Tests**: Test component methods and data handling
- **Integration Tests**: Test component interactions and data flow
- **Visual Tests**: Screenshot testing for component rendering
- **Accessibility Tests**: WCAG compliance for all components

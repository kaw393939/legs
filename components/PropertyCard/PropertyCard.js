import { BaseComponent } from '../BaseComponent.js';

export class PropertyCard extends BaseComponent {
  constructor() {
    super('PropertyCard');
    this.config = null;
  }

  static get observedAttributes() {
    return ['property-id', 'variant'];
  }

  get propertyId() {
    return this.getAttribute('property-id');
  }

  async connectedCallback() {
    await super.connectedCallback();

    // Import config module
    try {
      const configModule = await import('../../js/config.js');
      this.config = configModule.default;
    } catch (error) {
      console.error('Failed to load config:', error);
      // Fallback to basic path detection
      this.config = {
        resolvePath: (path) => (path.startsWith('/') ? path : `/${path}`),
      };
    }
  }

  async updateContent() {
    if (!this.propertyId) return;

    try {
      const propertyData = await this.fetchPropertyData(this.propertyId);
      this.populateTemplate(propertyData);
    } catch (error) {
      console.error('Failed to load property data:', error);
      this.showError();
    }
  }

  async fetchPropertyData(id) {
    const basePath = this.getBasePath();
    const response = await fetch(`${basePath}/data/properties/${id}.json`);
    if (!response.ok) {
      throw new Error(`Property not found: ${id}`);
    }
    return await response.json();
  }

  populateTemplate(data) {
    this.bindData('.property-title', data.title);
    this.bindData('.property-price', data.price);
    this.bindData(
      '.property-location',
      data.location.city + ', ' + data.location.state,
    );
    this.bindData('.property-description', data.description);
    this.bindData('.property-bedrooms', data.details.bedrooms);
    this.bindData('.property-bathrooms', data.details.bathrooms);
    this.bindData('.property-sqft', data.details.sqft.toLocaleString());

    const image = this.shadowRoot.querySelector('.property-image');
    if (image && data.images && data.images.length > 0) {
      image.src = data.images[0]; // Let Vite handle path resolution
      image.alt = data.title;
    }

    const statusBadge = this.shadowRoot.querySelector('.property-status');
    if (statusBadge) {
      statusBadge.textContent = data.status;
      statusBadge.className = `property-status status-${data.status}`;
    }

    this.renderFeatures(data.features);
    this.renderInvestmentData(data.investment_data);
  }

  renderFeatures(features) {
    const featuresList = this.shadowRoot.querySelector('.property-features');
    if (!featuresList || !features) return;

    featuresList.innerHTML = '';
    features.slice(0, 3).forEach((feature) => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  }

  renderInvestmentData(investmentData) {
    if (!investmentData) return;

    this.bindData('.cap-rate', investmentData.cap_rate);
    this.bindData('.rental-income', investmentData.rental_income);
    this.bindData('.roi-projection', investmentData.roi_projection);
  }

  showError() {
    this.shadowRoot.innerHTML = `
      <div class="property-card error">
        <p>Failed to load property information</p>
      </div>
    `;
  }

  bindEvents() {
    const card = this.shadowRoot.querySelector('.property-card');
    if (card) {
      card.addEventListener('click', () => {
        if (this.propertyId) {
          window.location.href = `./properties/${this.propertyId}.html`; // Simple relative path
        }
      });
    }
  }
}

customElements.define('property-card', PropertyCard);

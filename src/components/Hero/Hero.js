import { BaseComponent } from '../BaseComponent.js';

export class Hero extends BaseComponent {
  constructor() {
    super('Hero');
    this.config = null;
  }

  static get observedAttributes() {
    return ['page', 'variant'];
  }

  get page() {
    return this.getAttribute('page') || 'home';
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
    try {
      const basePath = this.getBasePath();
      const response = await fetch(
        `${basePath}/data/content/${this.page}.json`,
      );
      const pageData = await response.json();

      if (pageData.hero) {
        this.renderHero(pageData.hero);
      }
    } catch (error) {
      console.error('Failed to load hero data:', error);
    }
  }

  renderHero(heroData) {
    this.bindData('.hero-headline', heroData.headline);
    this.bindData('.hero-subheadline', heroData.subheadline);

    const primaryCTA = this.shadowRoot.querySelector('.cta-primary');
    if (primaryCTA && heroData.cta_primary) {
      primaryCTA.textContent = heroData.cta_primary.text;
      primaryCTA.href = heroData.cta_primary.url; // Let Vite handle path resolution
    }

    const secondaryCTA = this.shadowRoot.querySelector('.cta-secondary');
    if (secondaryCTA && heroData.cta_secondary) {
      secondaryCTA.textContent = heroData.cta_secondary.text;
      secondaryCTA.href = heroData.cta_secondary.url; // Let Vite handle path resolution
    }

    const bgImage = this.shadowRoot.querySelector('.hero-background');
    if (bgImage && heroData.background_image) {
      bgImage.style.backgroundImage = `url(${heroData.background_image})`; // Let Vite handle path resolution
    }
  }
}

customElements.define('hero-section', Hero);

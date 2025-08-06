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
      primaryCTA.href = this.config
        ? this.config.resolvePath(heroData.cta_primary.url)
        : heroData.cta_primary.url;
    }

    const secondaryCTA = this.shadowRoot.querySelector('.cta-secondary');
    if (secondaryCTA && heroData.cta_secondary) {
      secondaryCTA.textContent = heroData.cta_secondary.text;
      secondaryCTA.href = this.config
        ? this.config.resolvePath(heroData.cta_secondary.url)
        : heroData.cta_secondary.url;
    }

    const bgImage = this.shadowRoot.querySelector('.hero-background');
    if (bgImage && heroData.background_image) {
      const imagePath = this.config
        ? this.config.resolvePath(heroData.background_image)
        : heroData.background_image;
      bgImage.style.backgroundImage = `url(${imagePath})`;
    }
  }
}

customElements.define('hero-section', Hero);

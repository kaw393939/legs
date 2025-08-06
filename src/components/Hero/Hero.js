import { BaseComponent } from '../BaseComponent.js';

export class Hero extends BaseComponent {
  constructor() {
    super('Hero');
  }

  static get observedAttributes() {
    return ['page', 'variant'];
  }

  get page() {
    return this.getAttribute('page') || 'home';
  }

  async connectedCallback() {
    await super.connectedCallback();

    // Wait for PathUtils to be available
    if (!window.PathUtils) {
      await new Promise((resolve) => {
        const check = () => {
          if (window.PathUtils) resolve();
          else setTimeout(check, 10);
        };
        check();
      });
    }

    // Set default paths after template loads
    setTimeout(() => {
      this.setDefaultPaths();
    }, 100);
  }

  setDefaultPaths() {
    const primaryCTA = this.shadowRoot?.querySelector('.cta-primary');
    const secondaryCTA = this.shadowRoot?.querySelector('.cta-secondary');

    if (primaryCTA && primaryCTA.href.endsWith('#')) {
      primaryCTA.href = window.PathUtils.resolvePath('properties.html');
    }

    if (secondaryCTA && secondaryCTA.href.endsWith('#')) {
      secondaryCTA.href = window.PathUtils.resolvePath(
        'services/investment-analysis.html',
      );
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
      primaryCTA.href = window.PathUtils.resolvePath(heroData.cta_primary.url);
    }

    const secondaryCTA = this.shadowRoot.querySelector('.cta-secondary');
    if (secondaryCTA && heroData.cta_secondary) {
      secondaryCTA.textContent = heroData.cta_secondary.text;
      secondaryCTA.href = window.PathUtils.resolvePath(
        heroData.cta_secondary.url,
      );
    }

    const bgImage = this.shadowRoot.querySelector('.hero-background');
    if (bgImage && heroData.background_image) {
      bgImage.style.backgroundImage = `url(${window.PathUtils.resolvePath(heroData.background_image)})`;
    }
  }
}

customElements.define('hero-section', Hero);

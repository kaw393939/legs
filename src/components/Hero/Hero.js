import { BaseComponent } from '../BaseComponent.js';

export class Hero extends BaseComponent {
  static get observedAttributes() {
    return ['page', 'variant'];
  }

  get page() {
    return this.getAttribute('page') || 'home';
  }

  async updateContent() {
    try {
      const response = await fetch(`/data/content/${this.page}.json`);
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
      primaryCTA.href = heroData.cta_primary.url;
    }

    const secondaryCTA = this.shadowRoot.querySelector('.cta-secondary');
    if (secondaryCTA && heroData.cta_secondary) {
      secondaryCTA.textContent = heroData.cta_secondary.text;
      secondaryCTA.href = heroData.cta_secondary.url;
    }

    const bgImage = this.shadowRoot.querySelector('.hero-background');
    if (bgImage && heroData.background_image) {
      bgImage.style.backgroundImage = `url(${heroData.background_image})`;
    }
  }
}

customElements.define('hero-section', Hero);

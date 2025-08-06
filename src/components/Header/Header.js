import { BaseComponent } from '../BaseComponent.js';

export class Header extends BaseComponent {
  constructor() {
    super('Header');
    this.config = null;
  }

  static get observedAttributes() {
    return ['variant', 'transparent'];
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
      const response = await fetch(`${basePath}/data/navigation.json`);
      const navigationData = await response.json();
      this.renderNavigation(navigationData.main);
      this.updateLogoPaths();
    } catch (error) {
      console.error('Failed to load navigation data:', error);
    }
  }

  updateLogoPaths() {
    // Update logo image src to use proper base path
    const logoImage = this.shadowRoot.querySelector('.logo-image');
    const logoLink = this.shadowRoot.querySelector('.logo-link');
    const ctaButton = this.shadowRoot.querySelector('.cta-button');

    if (logoImage && this.config) {
      logoImage.src = this.config.resolvePath('/images/logo.svg');
    }

    if (logoLink && this.config) {
      logoLink.href = this.config.resolvePath('/');
    }

    if (ctaButton && this.config) {
      ctaButton.href = this.config.resolvePath('/contact.html');
    }
  }

  renderNavigation(navItems) {
    const nav = this.shadowRoot.querySelector('.nav-links');
    if (!nav) return;

    nav.innerHTML = '';
    navItems.forEach((item) => {
      const link = document.createElement('a');
      // Use config to resolve paths dynamically
      link.href = this.config ? this.config.resolvePath(item.url) : item.url;
      link.textContent = item.label;
      link.className = 'nav-link';

      if (item.dropdown) {
        link.classList.add('has-dropdown');
        const dropdown = this.createDropdown(item.dropdown);
        const wrapper = document.createElement('div');
        wrapper.className = 'nav-item-wrapper';
        wrapper.appendChild(link);
        wrapper.appendChild(dropdown);
        nav.appendChild(wrapper);
      } else {
        nav.appendChild(link);
      }
    });
  }

  createDropdown(items) {
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown-menu';

    items.forEach((item) => {
      const link = document.createElement('a');
      // Use config to resolve paths dynamically
      link.href = this.config ? this.config.resolvePath(item.url) : item.url;
      link.textContent = item.label;
      link.className = 'dropdown-link';
      dropdown.appendChild(link);
    });

    return dropdown;
  }

  bindEvents() {
    const mobileToggle = this.shadowRoot.querySelector('.mobile-toggle');
    const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');

    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!this.contains(event.target)) {
        mobileMenu?.classList.remove('active');
      }
    });
  }
}

customElements.define('site-header', Header);

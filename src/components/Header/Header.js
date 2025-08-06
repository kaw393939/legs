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
    // Import config module first
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

    // Now call the parent connectedCallback which will load template
    await super.connectedCallback();
  }

  async updateContent() {
    try {
      const basePath = this.getBasePath();
      const response = await fetch(`${basePath}/data/navigation.json`);
      const navigationData = await response.json();
      this.renderNavigation(navigationData.main);
      this.updatePaths();
    } catch (error) {
      console.error('Failed to load navigation data:', error);
    }
  }

  updatePaths() {
    // Let Vite handle all path resolution - no manual processing needed
    const logoLink = this.shadowRoot.querySelector('.logo-link');
    const ctaButton = this.shadowRoot.querySelector('.cta-button');

    if (logoLink) {
      logoLink.href = './'; // Simple relative path to home
    }

    if (ctaButton) {
      ctaButton.href = './contact.html'; // Simple relative path
    }
  }

  renderNavigation(navItems) {
    const nav = this.shadowRoot.querySelector('.nav-links');
    if (!nav) return;

    nav.innerHTML = '';
    navItems.forEach((item) => {
      const link = document.createElement('a');
      // Let Vite handle path resolution automatically - no manual processing needed
      link.href = item.url;
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
      // Let Vite handle path resolution automatically - no manual processing needed
      link.href = item.url;
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

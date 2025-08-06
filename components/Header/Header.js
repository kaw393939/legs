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
    // Use PathUtils for reliable path resolution
    const logoLink = this.shadowRoot.querySelector('.logo-link');
    const logoImage = this.shadowRoot.querySelector('.logo-image');
    const ctaButton = this.shadowRoot.querySelector('.cta-button');

    console.log('Header updatePaths() called');
    console.log('PathUtils available:', !!window.PathUtils);

    if (logoLink) {
      const resolvedPath = window.PathUtils.resolvePath('');
      console.log('Setting logo link from empty string to:', resolvedPath);
      logoLink.href = resolvedPath;
    }

    if (logoImage) {
      logoImage.src = window.PathUtils.resolvePath('images/logo.svg');
    }

    if (ctaButton) {
      ctaButton.href = window.PathUtils.resolvePath('contact.html');
    }
  }

  renderNavigation(navItems) {
    const nav = this.shadowRoot.querySelector('.nav-links');
    if (!nav) return;

    console.log('Header renderNavigation() called with items:', navItems);

    nav.innerHTML = '';
    navItems.forEach((item) => {
      const link = document.createElement('a');
      // Use PathUtils for reliable path resolution
      const resolvedHref = window.PathUtils
        ? window.PathUtils.resolvePath(item.url)
        : item.url;

      console.log(
        `Navigation item "${item.label}": "${item.url}" -> "${resolvedHref}"`,
      );

      link.href = resolvedHref;
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
      // Use PathUtils for reliable path resolution
      link.href = window.PathUtils
        ? window.PathUtils.resolvePath(item.url)
        : item.url;
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

import { BaseComponent } from '../BaseComponent.js';

export class Header extends BaseComponent {
  static get observedAttributes() {
    return ['variant', 'transparent'];
  }

  async updateContent() {
    try {
      const basePath = this.getBasePath();
      const response = await fetch(`${basePath}/data/navigation.json`);
      const navigationData = await response.json();
      this.renderNavigation(navigationData.main);
    } catch (error) {
      console.error('Failed to load navigation data:', error);
    }
  }

  renderNavigation(navItems) {
    const nav = this.shadowRoot.querySelector('.nav-links');
    if (!nav) return;

    nav.innerHTML = '';
    navItems.forEach((item) => {
      const link = document.createElement('a');
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

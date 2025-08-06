export class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.data = {};
  }

  // Get the base path for the application
  getBasePath() {
    // In development, no base path needed
    // In production on GitHub Pages, use /legs/
    return window.location.hostname === 'localhost' ? '' : '/legs';
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
      const basePath = this.getBasePath();
      const response = await fetch(
        `${basePath}/components/${componentName}/${componentName}.html`,
      );
      if (!response.ok) throw new Error(`Template not found: ${componentName}`);
      const template = await response.text();
      this.shadowRoot.innerHTML = template;
    } catch (error) {
      console.error('Failed to load template:', error);
      this.shadowRoot.innerHTML = '<div>Component failed to load</div>';
    }
  }

  loadStyles() {
    const componentName = this.constructor.name;
    const basePath = this.getBasePath();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${basePath}/components/${componentName}/${componentName}.css`;
    this.shadowRoot.appendChild(link);
  }

  bindEvents() {
    // Override in child components
  }

  updateContent() {
    // Override in child components
  }

  // Utility method for data binding
  bindData(selector, data, property = 'textContent') {
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

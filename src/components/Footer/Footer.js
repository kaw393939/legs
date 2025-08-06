import { BaseComponent } from '../BaseComponent.js';

export class Footer extends BaseComponent {
  constructor() {
    super('Footer');
  }

  updateContent() {
    // Footer content is loaded from Footer.html template
    // Styles are loaded from Footer.css
    // No additional dynamic content needed for basic footer
  }
}

customElements.define('site-footer', Footer);

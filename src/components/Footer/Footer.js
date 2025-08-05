import { BaseComponent } from "../BaseComponent.js";

export class Footer extends BaseComponent {
  async updateContent() {
    // Simple footer content
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #1a202c;
          color: white;
          padding: 2rem 0;
          margin-top: 4rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: center;
        }
      </style>
      <footer class="footer-content">
        <p>&copy; 2024 Premier Real Estate Investments. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define("site-footer", Footer);

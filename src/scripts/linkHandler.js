/**
 * Link Handler - Universal path resolution for all links
 * Automatically converts relative paths to work with current base path
 */
import config from '../js/config.js';

class LinkHandler {
  constructor() {
    this.config = config;
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.processLinks());
    } else {
      this.processLinks();
    }

    // Also process dynamically added links
    this.observeNewLinks();
  }

  processLinks() {
    // Process all links in the document
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => this.updateLink(link));

    // Process custom components after they load
    setTimeout(() => {
      this.processComponentLinks();
    }, 100);
  }

  processComponentLinks() {
    // Find all custom components and process their shadow DOM links
    const components = document.querySelectorAll(
      'site-header, site-footer, hero-section, property-card',
    );
    components.forEach((component) => {
      if (component.shadowRoot) {
        const shadowLinks =
          component.shadowRoot.querySelectorAll('a[href^="/"]');
        shadowLinks.forEach((link) => this.updateLink(link));
      }
    });
  }

  updateLink(link) {
    const currentHref = link.getAttribute('href');

    // Skip if already processed or if it's an absolute URL
    if (
      !currentHref ||
      currentHref.includes('://') ||
      link.hasAttribute('data-processed') ||
      !currentHref.startsWith('/')
    ) {
      return;
    }

    // Resolve the path using our config
    const resolvedPath = this.config.resolvePath(currentHref);
    link.href = resolvedPath;
    link.setAttribute('data-processed', 'true');
  }

  observeNewLinks() {
    // Create a mutation observer to handle dynamically added links
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              // Check if the added node is a link
              if (
                node.tagName === 'A' &&
                node.href &&
                node.href.startsWith('/')
              ) {
                this.updateLink(node);
              }

              // Check for links within the added node
              const links =
                node.querySelectorAll && node.querySelectorAll('a[href^="/"]');
              if (links) {
                links.forEach((link) => this.updateLink(link));
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}

// Initialize the link handler
export default new LinkHandler();

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
    // Only process navigation links after components load
    setTimeout(() => {
      this.processNavigationLinks();
    }, 200);
  }

  processNavigationLinks() {
    // Process navigation links in header component
    const headerComponent = document.querySelector('site-header');
    if (headerComponent && headerComponent.shadowRoot) {
      const navLinks = headerComponent.shadowRoot.querySelectorAll(
        '.nav-link, .dropdown-link',
      );
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');

        // Only process if href is a relative path that hasn't been processed yet
        if (
          href &&
          window.PathUtils &&
          (href.startsWith('./') ||
            href === '' ||
            href === '.' ||
            href === './')
        ) {
          link.href = window.PathUtils.resolvePath(href);
        }
      });
    }
  }

  fixHeaderLogo() {
    // Specific fix for GitHub Pages logo issue
    if (window.location.hostname === 'kaw393939.github.io') {
      const headerComponents = document.querySelectorAll('site-header');
      headerComponents.forEach((header) => {
        if (header.shadowRoot) {
          const logoImg = header.shadowRoot.querySelector('.logo-image');
          if (logoImg && logoImg.src && !logoImg.src.includes('/legs/')) {
            console.log('Fixing header logo path:', logoImg.src);
            logoImg.src = logoImg.src.replace(
              'kaw393939.github.io/',
              'kaw393939.github.io/legs/',
            );
            console.log('Fixed header logo path to:', logoImg.src);
          }
        }
      });
    }
  }

  processComponentLinks() {
    // Disabled - let Vite handle all path resolution automatically
    return;
  }

  updateLink() {
    // Let Vite handle all path resolution automatically
    // No manual processing needed - just return early
    return;
  }

  updateImageSrc() {
    // Let Vite handle all path resolution automatically
    // No manual processing needed - just return early
    return;
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

              // Check if the added node is an image
              if (
                node.tagName === 'IMG' &&
                node.src &&
                node.src.startsWith('/')
              ) {
                this.updateImageSrc(node);
              }

              // Check for links and images within the added node
              const links =
                node.querySelectorAll && node.querySelectorAll('a[href^="/"]');
              if (links) {
                links.forEach((link) => this.updateLink(link));
              }

              const images =
                node.querySelectorAll && node.querySelectorAll('img[src^="/"]');
              if (images) {
                images.forEach((img) => this.updateImageSrc(img));
              }

              // Fix header logo if header component is added
              if (node.tagName === 'SITE-HEADER') {
                setTimeout(() => this.fixHeaderLogo(), 100);
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

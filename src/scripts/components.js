// Import all components
import '../components/Header/Header.js';
import '../components/Hero/Hero.js';
import '../components/PropertyCard/PropertyCard.js';
import '../components/Footer/Footer.js';
import '../components/CurriculumComponent.js';

// Component registry for dynamic loading
export const componentRegistry = {
  'site-header': () => import('../components/Header/Header.js'),
  'hero-section': () => import('../components/Hero/Hero.js'),
  'property-card': () => import('../components/PropertyCard/PropertyCard.js'),
  'site-footer': () => import('../components/Footer/Footer.js'),
  'curriculum-component': () => import('../components/CurriculumComponent.js'),
};

// Auto-register components when they appear in DOM
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Check if node or its children contain unregistered components
        const components = node.querySelectorAll?.('*') || [];
        components.forEach((element) => {
          const tagName = element.tagName.toLowerCase();
          if (componentRegistry[tagName] && !customElements.get(tagName)) {
            componentRegistry[tagName]();
          }
        });
      }
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

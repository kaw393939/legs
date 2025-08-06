/**
 * Immediate Path Fixer - Runs as early as possible to fix hardcoded paths
 * This script should be loaded early to prevent 404s on initial page load
 */

// Immediate path fixing function
function fixPathsImmediately() {
  const isGitHubPages = window.location.hostname === 'kaw393939.github.io';
  const basePath = isGitHubPages ? '/legs' : '';

  console.log(
    'Immediate path fixer - GitHub Pages:',
    isGitHubPages,
    'Base path:',
    basePath,
  );

  // Fix all images with /images/ paths
  const images = document.querySelectorAll('img[src^="/images/"]');
  images.forEach((img) => {
    const originalSrc = img.getAttribute('src');
    const newSrc = basePath + originalSrc;
    console.log('Fixing image path:', originalSrc, '->', newSrc);
    img.src = newSrc;
  });

  // Fix all links with absolute paths
  const links = document.querySelectorAll('a[href^="/"]');
  links.forEach((link) => {
    const originalHref = link.getAttribute('href');
    // Don't fix if it already has the base path
    if (originalHref.startsWith('/legs/')) return;

    const newHref = basePath + originalHref;
    console.log('Fixing link path:', originalHref, '->', newHref);
    link.href = newHref;
  });

  // Fix CSS background images in style attributes
  const elementsWithBgImage = document.querySelectorAll(
    '[style*="background-image"]',
  );
  elementsWithBgImage.forEach((el) => {
    const style = el.style.backgroundImage;
    if (style.includes('url("/images/')) {
      const newStyle = style.replace(
        /url\("\/images\//g,
        `url("${basePath}/images/`,
      );
      console.log('Fixing background image:', style, '->', newStyle);
      el.style.backgroundImage = newStyle;
    }
  });
}

// Run immediately if DOM is already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fixPathsImmediately);
} else {
  fixPathsImmediately();
}

// Also run on window load as a safety net
window.addEventListener('load', fixPathsImmediately);

// Export for use by other modules
export { fixPathsImmediately };

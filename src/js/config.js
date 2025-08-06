/**
 * Configuration module for handling environment-agnostic paths
 * Uses Vite-injected globals when available, falls back to runtime detection
 */

class Config {
  constructor() {
    console.log('Config constructor - detecting base path...');
    this._basePath = this._detectBasePath();
    console.log('Config constructor - final base path:', this._basePath);
  }

  /**
   * Detect the base path from Vite globals or runtime detection
   * @returns {string} The base path for the application
   */
  _detectBasePath() {
    // Use Vite-injected global if available (most reliable)
    try {
      if (typeof __APP_BASE_PATH__ !== 'undefined') {
        console.log('Using Vite-injected base path:', __APP_BASE_PATH__);
        return __APP_BASE_PATH__;
      }
    } catch (e) {
      console.log('Vite globals not available:', e.message);
    }

    // Immediate check for GitHub Pages
    if (window.location.hostname === 'kaw393939.github.io') {
      console.log('GitHub Pages detected, using /legs/ base path');
      return '/legs/';
    }

    // Fallback: Try to get base path from HTML base tag
    const baseElement = document.querySelector('base[href]');
    if (baseElement) {
      const basePath = baseElement.getAttribute('href');
      console.log('Using HTML base tag path:', basePath);
      return basePath;
    }

    // Fallback: detect from current pathname and hostname
    const pathname = window.location.pathname;
    const hostname = window.location.hostname;

    console.log(
      'Detecting from URL - hostname:',
      hostname,
      'pathname:',
      pathname,
    );

    // If we're in a subdirectory (like /legs/), extract it
    if (pathname !== '/' && pathname.includes('/')) {
      const segments = pathname.split('/').filter(Boolean);

      // Check if we're in a known repository path
      if (segments.length > 0 && segments[0] === 'legs') {
        console.log('Using known legs path');
        return '/legs/';
      }

      // For other subdirectories, use the first segment
      if (segments.length > 0 && !segments[0].includes('.html')) {
        const detectedPath = `/${segments[0]}/`;
        console.log('Using first segment path:', detectedPath);
        return detectedPath;
      }
    }

    // Default to root
    console.log('Falling back to root path');
    return '/';
  }

  /**
   * Get the base path for the application
   * @returns {string} The base path
   */
  get basePath() {
    return this._basePath;
  }

  /**
   * Resolve a relative path to an absolute path with base path
   * @param {string} path - The relative path to resolve
   * @returns {string} The absolute path with base path
   */
  resolvePath(path) {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;

    // If path is empty or just '/', return base path
    if (!cleanPath || cleanPath === '') {
      return this._basePath;
    }

    // Combine base path with clean path
    return `${this._basePath}${cleanPath}`;
  }

  /**
   * Check if we're in development mode
   * @returns {boolean} True if in development mode
   */
  get isDevelopment() {
    // Use Vite-injected global if available
    if (typeof __IS_PRODUCTION__ !== 'undefined') {
      return !__IS_PRODUCTION__;
    }

    // Fallback to runtime detection
    return (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.port !== ''
    );
  }

  /**
   * Check if we're in production mode
   * @returns {boolean} True if in production mode
   */
  get isProduction() {
    // Use Vite-injected global if available
    if (typeof __IS_PRODUCTION__ !== 'undefined') {
      return __IS_PRODUCTION__;
    }

    // Fallback to runtime detection
    return !this.isDevelopment;
  }
}

// Create singleton instance
const config = new Config();

// Export for ES modules
export default config;

// Also make available globally for components that need it
window.AppConfig = config;

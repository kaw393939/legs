/**
 * Simple configuration module that uses Vite's built-in base path handling
 */

class Config {
  /**
   * Resolve a path using Vite's automatic base URL handling
   * @param {string} path - The path to resolve
   * @returns {string} The resolved path
   */
  resolvePath(path) {
    // Let Vite handle the path resolution automatically
    // In dev: import.meta.env.BASE_URL is "/"
    // In prod: import.meta.env.BASE_URL is "/legs/"

    if (!path || path === '/') {
      return import.meta.env.BASE_URL;
    }

    // If path already starts with base URL, don't modify it
    if (path.startsWith(import.meta.env.BASE_URL)) {
      return path;
    }

    // Remove leading slash to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;

    // Use Vite's BASE_URL which automatically handles dev vs prod
    return import.meta.env.BASE_URL + cleanPath;
  }

  /**
   * Get the base path - simply return Vite's BASE_URL
   */
  get basePath() {
    return import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash
  }

  /**
   * Check if we're in development mode
   */
  get isDevelopment() {
    return import.meta.env.DEV;
  }

  /**
   * Check if we're in production mode
   */
  get isProduction() {
    return import.meta.env.PROD;
  }
}

// Create singleton instance
const config = new Config();

// Export for ES modules
export default config;

// Also make available globally for components that need it
window.AppConfig = config;

/**
 * Path utility functions for reliable URL resolution
 * Uses Vite's import.meta.env.BASE_URL for consistent path handling
 */

/**
 * Resolve a path relative to the application base URL
 * @param {string} path - Path to resolve (can start with / or be relative)
 * @returns {string} - Resolved path with correct base URL
 */
export function resolvePath(path) {
  if (!path) return import.meta.env.BASE_URL;

  // If path is already absolute (starts with http), return as-is
  if (path.startsWith('http')) return path;

  // If path is data URI, return as-is
  if (path.startsWith('data:')) return path;

  // Handle relative current directory paths
  if (path === './' || path === '.') return import.meta.env.BASE_URL;

  // Clean the path - handle different path formats
  let cleanPath = path;

  // Remove leading "./" if present
  if (cleanPath.startsWith('./')) {
    cleanPath = cleanPath.substring(2);
  }
  // Remove leading "/" if present
  else if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.substring(1);
  }

  // If empty after cleaning, return base URL
  if (!cleanPath) return import.meta.env.BASE_URL;

  // Combine base URL with clean path, ensuring no double slashes
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl + (baseUrl.endsWith('/') ? '' : '/') + cleanPath;
}

/**
 * Get the base URL for the application
 * @returns {string} - Base URL
 */
export function getBasePath() {
  return import.meta.env.BASE_URL;
}

/**
 * Check if running in development mode
 * @returns {boolean} - True if in development
 */
export function isDevelopment() {
  return import.meta.env.DEV;
}

/**
 * Check if running in production mode
 * @returns {boolean} - True if in production
 */
export function isProduction() {
  return import.meta.env.PROD;
}

// Make available globally for components
window.PathUtils = {
  resolvePath,
  getBasePath,
  isDevelopment,
  isProduction,
};

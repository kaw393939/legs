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
  const baseUrl = import.meta.env.BASE_URL || '/';

  console.log('PathUtils.resolvePath called:', {
    path,
    baseUrl,
    type: typeof path,
  });

  // If no path or empty string, return just the base URL
  if (!path || path === '' || path === '.' || path === './') {
    console.log('Returning baseUrl for empty/dot path:', baseUrl);
    return baseUrl;
  }

  // If path is already absolute (starts with http), return as-is
  if (path.startsWith('http')) {
    return path;
  }

  // If path is data URI, return as-is
  if (path.startsWith('data:')) {
    return path;
  }

  // Remove leading "./" if present
  let cleanPath = path;
  if (cleanPath.startsWith('./')) {
    cleanPath = cleanPath.substring(2);
  }

  // Remove leading "/" if present
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.substring(1);
  }

  // If cleanPath is empty after processing, return base URL
  if (!cleanPath) {
    return baseUrl;
  }

  // Ensure base URL ends with / and combine with clean path
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  return normalizedBase + cleanPath;
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

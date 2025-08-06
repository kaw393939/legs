// Import styles
import '../styles/main.css';

// Import path utilities
import '../js/pathUtils.js';

// Import components
import './components.js';

// Import configuration and initialize link handler
import config from '../js/config.js';
import './linkHandler.js'; // Auto-initializes

// Import utilities
import { initializeApp } from './utils/app.js';
import { setupAnalytics } from './utils/analytics.js';

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  // Make config globally available
  window.AppConfig = config;

  initializeApp();
  setupAnalytics();

  console.log(`App initialized with base path: ${config.basePath}`);
  console.log(`Development mode: ${config.isDevelopment}`);
});

// Import components
import './components.js';

// Import utilities
import { initializeApp } from './utils/app.js';
import { setupAnalytics } from './utils/analytics.js';

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  setupAnalytics();
});

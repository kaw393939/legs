/**
 * Curriculum Component - Main navigation and content display
 * Handles week navigation, progress tracking, and content rendering
 */

import { BaseComponent } from './BaseComponent.js';
import MarkdownProcessor from '../utils/MarkdownProcessor.js';

export class CurriculumComponent extends BaseComponent {
  constructor() {
    super();
    this.currentWeek = 1;
    this.totalWeeks = 16;
    this.markdownProcessor = new MarkdownProcessor();
    this.loadedWeeks = new Set();
  }

  async init() {
    await super.init();
    this.setupEventListeners();
    await this.loadCurrentWeek();
    this.updateProgress();
  }

  setupEventListeners() {
    // Week navigation
    this.shadowRoot.addEventListener('click', (e) => {
      if (e.target.matches('.week-nav-btn')) {
        const weekNumber = parseInt(e.target.dataset.week);
        this.navigateToWeek(weekNumber);
      }

      if (e.target.matches('.prev-week')) {
        this.navigatePrevious();
      }

      if (e.target.matches('.next-week')) {
        this.navigateNext();
      }
    });

    // Magic word interactions
    this.shadowRoot.addEventListener('click', (e) => {
      if (e.target.matches('.magic-word-link')) {
        this.showMagicWordDefinition(e.target.dataset.word);
      }
    });

    // Search functionality
    const searchInput = this.shadowRoot.querySelector('#curriculum-search');
    if (searchInput) {
      searchInput.addEventListener(
        'input',
        this.debounce(this.handleSearch.bind(this), 300),
      );
    }
  }

  async navigateToWeek(weekNumber) {
    if (weekNumber < 1 || weekNumber > this.totalWeeks) return;

    this.currentWeek = weekNumber;
    await this.loadCurrentWeek();
    this.updateProgress();
    this.updateNavigation();

    // Scroll to top of content
    const contentContainer =
      this.shadowRoot.querySelector('#content-container');
    if (contentContainer) {
      contentContainer.scrollTop = 0;
    }
  }

  navigatePrevious() {
    if (this.currentWeek > 1) {
      this.navigateToWeek(this.currentWeek - 1);
    }
  }

  navigateNext() {
    if (this.currentWeek < this.totalWeeks) {
      this.navigateToWeek(this.currentWeek + 1);
    }
  }

  async loadCurrentWeek() {
    const loadingIndicator =
      this.shadowRoot.querySelector('.loading-indicator');
    const contentContainer = this.shadowRoot.querySelector(
      '#curriculum-content',
    );

    if (loadingIndicator) loadingIndicator.style.display = 'block';

    try {
      const content = await this.markdownProcessor.loadWeekContent(
        this.currentWeek,
      );

      if (contentContainer) {
        contentContainer.innerHTML = content.html;
        this.enhanceInteractivity();
      }

      // Mark week as loaded for progress tracking
      this.loadedWeeks.add(this.currentWeek);

      // Preload adjacent weeks for faster navigation
      this.preloadAdjacentWeeks();
    } catch (error) {
      console.error(`Failed to load week ${this.currentWeek}:`, error);
      if (contentContainer) {
        contentContainer.innerHTML = this.getErrorContent();
      }
    } finally {
      if (loadingIndicator) loadingIndicator.style.display = 'none';
    }
  }

  preloadAdjacentWeeks() {
    const preloadTargets = [this.currentWeek - 1, this.currentWeek + 1].filter(
      (week) =>
        week >= 1 && week <= this.totalWeeks && !this.loadedWeeks.has(week),
    );

    preloadTargets.forEach((week) => {
      setTimeout(() => {
        this.markdownProcessor
          .loadWeekContent(week)
          .then(() => this.loadedWeeks.add(week))
          .catch((err) => console.log(`Preload failed for week ${week}:`, err));
      }, 1000);
    });
  }

  enhanceInteractivity() {
    // Add copy functionality to code blocks
    this.shadowRoot.querySelectorAll('.copy-prompt').forEach((btn) => {
      btn.addEventListener('click', this.copyPromptToClipboard.bind(this));
    });

    // Add AI chat integration
    this.shadowRoot.querySelectorAll('.try-prompt').forEach((btn) => {
      btn.addEventListener('click', this.openAIChat.bind(this));
    });

    // Add progress tracking for completed sections
    this.shadowRoot
      .querySelectorAll('.assignment, .exercise')
      .forEach((item) => {
        item.addEventListener('click', this.markSectionComplete.bind(this));
      });
  }

  copyPromptToClipboard(event) {
    const button = event.target;
    const promptCode = button
      .closest('.ai-prompt-block')
      .querySelector('.prompt-code');

    if (promptCode) {
      navigator.clipboard
        .writeText(promptCode.textContent)
        .then(() => {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          button.classList.add('copied');

          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
          }, 2000);
        })
        .catch((err) => {
          console.error('Failed to copy prompt:', err);
        });
    }
  }

  openAIChat(event) {
    const button = event.target;
    const promptCode = button
      .closest('.ai-prompt-block')
      .querySelector('.prompt-code');

    if (promptCode) {
      const prompt = encodeURIComponent(promptCode.textContent);
      window.open(`https://chat.openai.com/?q=${prompt}`, '_blank');
    }
  }

  markSectionComplete(event) {
    const section = event.target.closest('.assignment, .exercise');
    section.classList.toggle('completed');

    // Save completion state to localStorage
    const sectionId = `week-${this.currentWeek}-${section.id || section.className}`;
    const isCompleted = section.classList.contains('completed');

    const completedSections = JSON.parse(
      localStorage.getItem('completedSections') || '{}',
    );
    completedSections[sectionId] = isCompleted;
    localStorage.setItem(
      'completedSections',
      JSON.stringify(completedSections),
    );

    this.updateProgress();
  }

  showMagicWordDefinition(word) {
    // Create modal or tooltip for magic word definition
    const modal =
      this.shadowRoot.querySelector('#magic-word-modal') ||
      this.createMagicWordModal();

    // Load definition from glossary
    const definition =
      this.markdownProcessor.businessGlossary[word.toLowerCase()];

    if (definition) {
      modal.querySelector('.modal-title').textContent = word.toUpperCase();
      modal.querySelector('.modal-definition').textContent =
        definition.definition;
      modal.querySelector('.modal-context').textContent =
        definition.businessContext;
      modal.querySelector('.modal-examples').innerHTML = definition.examples
        .map((ex) => `<li>${ex}</li>`)
        .join('');

      modal.style.display = 'block';
    }
  }

  createMagicWordModal() {
    const modalHTML = `
      <div id="magic-word-modal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2 class="modal-title"></h2>
          <div class="modal-definition"></div>
          <h4>Business Context:</h4>
          <div class="modal-context"></div>
          <h4>Examples:</h4>
          <ul class="modal-examples"></ul>
        </div>
      </div>
    `;

    this.shadowRoot.innerHTML += modalHTML;
    const modal = this.shadowRoot.querySelector('#magic-word-modal');

    // Close modal functionality
    modal.querySelector('.close').addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    return modal;
  }

  async handleSearch(event) {
    const query = event.target.value.trim();

    if (query.length < 3) {
      this.clearSearchResults();
      return;
    }

    try {
      const results = await this.markdownProcessor.searchContent(query);
      this.displaySearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
    }
  }

  displaySearchResults(results) {
    const searchResults = this.shadowRoot.querySelector('#search-results');

    if (!searchResults) return;

    if (results.length === 0) {
      searchResults.innerHTML =
        '<div class="no-results">No results found</div>';
      return;
    }

    const resultsHTML = results
      .map(
        (result) => `
      <div class="search-result" data-week="${result.metadata.week}">
        <h4>${result.metadata.title}</h4>
        <p>Week ${result.metadata.week}</p>
        <div class="result-snippet">${this.createSearchSnippet(result.rawMarkdown, result.query)}</div>
      </div>
    `,
      )
      .join('');

    searchResults.innerHTML = resultsHTML;

    // Add click handlers for search results
    searchResults.querySelectorAll('.search-result').forEach((result) => {
      result.addEventListener('click', () => {
        const week = parseInt(result.dataset.week);
        this.navigateToWeek(week);
        this.clearSearchResults();
      });
    });
  }

  createSearchSnippet(text, query) {
    const queryIndex = text.toLowerCase().indexOf(query.toLowerCase());
    if (queryIndex === -1) return text.substring(0, 150) + '...';

    const start = Math.max(0, queryIndex - 50);
    const end = Math.min(text.length, queryIndex + query.length + 50);
    const snippet = text.substring(start, end);

    return snippet.replace(new RegExp(query, 'gi'), '<mark>$&</mark>');
  }

  clearSearchResults() {
    const searchResults = this.shadowRoot.querySelector('#search-results');
    if (searchResults) {
      searchResults.innerHTML = '';
    }
  }

  updateProgress() {
    const progressBar = this.shadowRoot.querySelector(
      '.curriculum-progress-fill',
    );
    const progressText = this.shadowRoot.querySelector('.progress-text');

    if (progressBar && progressText) {
      const completedWeeks = this.loadedWeeks.size;
      const progressPercentage = (completedWeeks / this.totalWeeks) * 100;

      progressBar.style.width = `${progressPercentage}%`;
      progressText.textContent = `${completedWeeks} of ${this.totalWeeks} weeks explored`;
    }
  }

  updateNavigation() {
    const prevBtn = this.shadowRoot.querySelector('.prev-week');
    const nextBtn = this.shadowRoot.querySelector('.next-week');
    const weekIndicator = this.shadowRoot.querySelector(
      '.current-week-indicator',
    );

    if (prevBtn) prevBtn.disabled = this.currentWeek <= 1;
    if (nextBtn) nextBtn.disabled = this.currentWeek >= this.totalWeeks;
    if (weekIndicator)
      weekIndicator.textContent = `Week ${this.currentWeek} of ${this.totalWeeks}`;
  }

  getErrorContent() {
    return `
      <div class="error-content">
        <h2>Content Temporarily Unavailable</h2>
        <p>Week ${this.currentWeek} content is being prepared. Please check back soon!</p>
        <div class="error-actions">
          <button onclick="this.parentElement.parentElement.style.display='none'; window.location.reload()">
            Retry Loading
          </button>
        </div>
      </div>
    `;
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Template method implementation
  getTemplate() {
    return `
      <div class="curriculum-container">
        <header class="curriculum-header">
          <div class="curriculum-title">
            <h1>LEGS: Strategic Business Digitization</h1>
            <div class="progress-container">
              <div class="curriculum-progress-bar">
                <div class="curriculum-progress-fill"></div>
              </div>
              <span class="progress-text">0 of 16 weeks explored</span>
            </div>
          </div>
          
          <div class="curriculum-search-container">
            <input type="search" id="curriculum-search" placeholder="Search curriculum content..." />
            <div id="search-results" class="search-results"></div>
          </div>
        </header>

        <nav class="week-navigation">
          <button class="prev-week nav-btn">&larr; Previous</button>
          <span class="current-week-indicator">Week 1 of 16</span>
          <button class="next-week nav-btn">Next &rarr;</button>
        </nav>

        <div class="week-selector">
          ${Array.from({ length: 16 }, (_, i) => i + 1)
            .map(
              (week) =>
                `<button class="week-nav-btn ${
                  week === 1 ? 'active' : ''
                }" data-week="${week}">${week}</button>`,
            )
            .join('')}
        </div>

        <main class="curriculum-main">
          <div class="loading-indicator">Loading curriculum content...</div>
          <div id="content-container">
            <div id="curriculum-content">
              <!-- Content will be loaded dynamically -->
            </div>
          </div>
        </main>
      </div>
    `;
  }

  getStyles() {
    return `
      .curriculum-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .curriculum-header {
        padding: 2rem 0;
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 2rem;
      }

      .curriculum-title h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .progress-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .curriculum-progress-bar {
        flex: 1;
        height: 8px;
        background: #f0f0f0;
        border-radius: 4px;
        overflow: hidden;
      }

      .curriculum-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        transition: width 0.3s ease;
        width: 0%;
      }

      .progress-text {
        font-size: 0.9rem;
        color: #666;
        white-space: nowrap;
      }

      .curriculum-search-container {
        position: relative;
        margin-top: 1rem;
      }

      #curriculum-search {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.2s;
      }

      #curriculum-search:focus {
        outline: none;
        border-color: #667eea;
      }

      .search-results {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        max-height: 300px;
        overflow-y: auto;
        z-index: 1000;
      }

      .search-result {
        padding: 1rem;
        border-bottom: 1px solid #f0f0f0;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .search-result:hover {
        background-color: #f8f9ff;
      }

      .search-result h4 {
        margin: 0 0 0.5rem 0;
        color: #333;
      }

      .result-snippet {
        font-size: 0.9rem;
        color: #666;
        line-height: 1.4;
      }

      .result-snippet mark {
        background-color: #fff3cd;
        padding: 0 2px;
      }

      .week-navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding: 1rem 0;
      }

      .nav-btn {
        padding: 0.5rem 1rem;
        border: 2px solid #667eea;
        background: white;
        color: #667eea;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.2s;
      }

      .nav-btn:hover:not(:disabled) {
        background: #667eea;
        color: white;
      }

      .nav-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .current-week-indicator {
        font-weight: 600;
        color: #333;
        font-size: 1.1rem;
      }

      .week-selector {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 8px;
      }

      .week-nav-btn {
        padding: 0.5rem;
        border: 1px solid #ddd;
        background: white;
        border-radius: 4px;
        cursor: pointer;
        min-width: 40px;
        transition: all 0.2s;
      }

      .week-nav-btn:hover {
        background: #e9ecef;
      }

      .week-nav-btn.active {
        background: #667eea;
        color: white;
        border-color: #667eea;
      }

      .curriculum-main {
        min-height: 600px;
        position: relative;
      }

      .loading-indicator {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.1rem;
        color: #666;
        display: none;
      }

      #curriculum-content {
        line-height: 1.6;
        color: #333;
      }

      #curriculum-content h1 {
        color: #2c3e50;
        border-bottom: 3px solid #667eea;
        padding-bottom: 0.5rem;
      }

      #curriculum-content h2 {
        color: #34495e;
        margin-top: 2rem;
      }

      #curriculum-content .magic-word-link {
        background: linear-gradient(135deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 600;
        cursor: pointer;
        position: relative;
      }

      #curriculum-content .magic-word-link:hover {
        text-decoration: underline;
      }

      #curriculum-content .ai-prompt-block {
        background: #f8f9ff;
        border-left: 4px solid #667eea;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 0 8px 8px 0;
      }

      #curriculum-content .prompt-header {
        font-weight: 600;
        color: #667eea;
        margin-bottom: 0.5rem;
      }

      #curriculum-content .copy-prompt {
        background: #667eea;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        transition: all 0.2s;
      }

      #curriculum-content .copy-prompt:hover {
        background: #5a6fd8;
      }

      #curriculum-content .copy-prompt.copied {
        background: #28a745;
      }

      .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
      }

      .modal-content {
        background-color: white;
        margin: 15% auto;
        padding: 2rem;
        border-radius: 8px;
        width: 80%;
        max-width: 600px;
        position: relative;
      }

      .close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
      }

      .error-content {
        text-align: center;
        padding: 3rem;
        color: #666;
      }

      .error-content h2 {
        color: #e74c3c;
        margin-bottom: 1rem;
      }

      .error-actions button {
        background: #667eea;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1rem;
        margin-top: 1rem;
      }

      @media (max-width: 768px) {
        .curriculum-title h1 {
          font-size: 2rem;
        }
        
        .week-navigation {
          flex-direction: column;
          gap: 1rem;
        }
        
        .week-selector {
          justify-content: center;
        }
        
        .modal-content {
          margin: 10% auto;
          width: 95%;
          padding: 1rem;
        }
      }
    `;
  }
}

customElements.define('curriculum-component', CurriculumComponent);

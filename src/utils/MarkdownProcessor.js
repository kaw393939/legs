/**
 * MarkdownProcessor - Dynamic markdown content management system
 * Handles curriculum content loading, processing, and rendering
 */

import { marked } from 'marked';

export class MarkdownProcessor {
  constructor() {
    this.contentCache = new Map();
    this.basePath = this.getBasePath();
    this.setupMarkdownRenderer();
  }

  getBasePath() {
    // Handle GitHub Pages base path
    const path = window.location.pathname;
    if (path.includes('/legs/')) {
      return '/legs';
    }
    return '';
  }

  setupMarkdownRenderer() {
    // Configure marked with custom renderer for LEGS curriculum
    marked.setOptions({
      highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
      breaks: true,
      gfm: true,
    });

    // Custom renderer for curriculum-specific elements
    const renderer = new marked.Renderer();

    // Custom heading renderer with curriculum week tracking
    renderer.heading = (text, level, rawtext) => {
      const anchor = rawtext.toLowerCase().replace(/[^\w]+/g, '-');
      return `<h${level} id="${anchor}" class="curriculum-heading level-${level}">
        <a href="#${anchor}" class="anchor-link">${text}</a>
      </h${level}>`;
    };

    // Custom blockquote for learning objectives and key concepts
    renderer.blockquote = (quote) => {
      if (quote.includes('Learning Objective:')) {
        return `<div class="learning-objective">${quote}</div>`;
      }
      if (quote.includes('Magic Word:')) {
        return `<div class="magic-word">${quote}</div>`;
      }
      if (quote.includes('AI Prompt:')) {
        return `<div class="ai-prompt">${quote}</div>`;
      }
      return `<blockquote class="curriculum-quote">${quote}</blockquote>`;
    };

    // Custom code renderer for different code types
    renderer.code = (code, language) => {
      if (language === 'prompt') {
        return `<div class="ai-prompt-block">
          <div class="prompt-header">AI Prompt Template</div>
          <code class="prompt-code">${code}</code>
          <button class="copy-prompt" onclick="copyToClipboard(this)">Copy Prompt</button>
        </div>`;
      }
      if (language === 'magic-word') {
        return `<div class="magic-word-definition">
          <div class="magic-word-header">Magic Word Definition</div>
          <code class="magic-word-code">${code}</code>
        </div>`;
      }
      return `<pre><code class="language-${language}">${code}</code></pre>`;
    };

    marked.use({ renderer });
  }

  /**
   * Load curriculum content for specific week
   */
  async loadWeekContent(weekNumber) {
    const cacheKey = `week-${weekNumber}`;

    if (this.contentCache.has(cacheKey)) {
      return this.contentCache.get(cacheKey);
    }

    try {
      const response = await fetch(
        `${this.basePath}/curriculum/week-${weekNumber.toString().padStart(2, '0')}.md`,
      );
      if (!response.ok) {
        throw new Error(`Failed to load week ${weekNumber} content`);
      }

      const markdownText = await response.text();
      const processedContent = this.processMarkdown(markdownText);

      this.contentCache.set(cacheKey, processedContent);
      return processedContent;
    } catch (error) {
      console.error(`Error loading week ${weekNumber}:`, error);
      return this.getErrorContent(weekNumber);
    }
  }

  /**
   * Process markdown with curriculum-specific enhancements
   */
  processMarkdown(markdownText) {
    // Extract metadata from frontmatter
    const { frontMatter, content } = this.parseFrontMatter(markdownText);

    // Process content with marked
    const htmlContent = marked.parse(content);

    // Add curriculum-specific enhancements
    const enhancedContent = this.addCurriculumEnhancements(
      htmlContent,
      frontMatter,
    );

    return {
      metadata: frontMatter,
      html: enhancedContent,
      rawMarkdown: content,
    };
  }

  /**
   * Parse YAML frontmatter from markdown
   */
  parseFrontMatter(markdownText) {
    const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = markdownText.match(frontMatterRegex);

    if (!match) {
      return {
        frontMatter: {},
        content: markdownText,
      };
    }

    const frontMatterText = match[1];
    const content = match[2];

    // Simple YAML parser for our needs
    const frontMatter = {};
    frontMatterText.split('\n').forEach((line) => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        const value = line
          .substring(colonIndex + 1)
          .trim()
          .replace(/['"]/g, '');
        frontMatter[key] = value;
      }
    });

    return { frontMatter, content };
  }

  /**
   * Add curriculum-specific enhancements to processed HTML
   */
  addCurriculumEnhancements(html, metadata) {
    let enhanced = html;

    // Add progress tracking
    if (metadata.week) {
      const progressBar = this.generateProgressBar(metadata.week);
      enhanced = progressBar + enhanced;
    }

    // Add magic word glossary links
    enhanced = this.linkMagicWords(enhanced);

    // Add AI prompt interaction buttons
    enhanced = this.addPromptInteractions(enhanced);

    return enhanced;
  }

  /**
   * Generate progress bar for curriculum week
   */
  generateProgressBar(weekNumber) {
    const progress = (weekNumber / 16) * 100;
    return `
      <div class="curriculum-progress">
        <div class="progress-header">
          <span class="week-indicator">Week ${weekNumber} of 16</span>
          <span class="progress-percentage">${Math.round(progress)}% Complete</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>
    `;
  }

  /**
   * Link magic words to glossary definitions
   */
  linkMagicWords(html) {
    const magicWords = [
      'leverage',
      'arbitrage',
      'reciprocity',
      'commitment',
      'social proof',
      'authority',
      'liking',
      'scarcity',
      'hero archetype',
      'outlaw archetype',
      'golden ratio',
      'design economics',
      'technical debt',
      'atomic commits',
    ];

    let enhanced = html;
    magicWords.forEach((word) => {
      const regex = new RegExp(`\\b(${word})\\b`, 'gi');
      enhanced = enhanced.replace(
        regex,
        `<span class="magic-word-link" data-word="${word}">$1</span>`,
      );
    });

    return enhanced;
  }

  /**
   * Add interaction buttons to AI prompts
   */
  addPromptInteractions(html) {
    return html.replace(
      /<div class="ai-prompt-block">([\s\S]*?)<\/div>/g,
      (match, content) => {
        return `<div class="ai-prompt-block interactive">
          ${content}
          <div class="prompt-actions">
            <button class="try-prompt" onclick="openAIChat(this)">Try in ChatGPT</button>
            <button class="customize-prompt" onclick="customizePrompt(this)">Customize</button>
            <button class="save-prompt" onclick="savePrompt(this)">Save to Library</button>
          </div>
        </div>`;
      },
    );
  }

  /**
   * Load AI prompt library for specific category
   */
  async loadPromptLibrary(category) {
    try {
      const response = await fetch(
        `${this.basePath}/ai-prompts/${category}.json`,
      );
      const prompts = await response.json();
      return prompts;
    } catch (error) {
      console.error(`Error loading ${category} prompts:`, error);
      return [];
    }
  }

  /**
   * Search curriculum content
   */
  async searchContent(query) {
    const results = [];

    // Search through cached content
    for (const [key, content] of this.contentCache) {
      if (this.contentMatches(content, query)) {
        results.push({
          source: key,
          ...content,
          relevanceScore: this.calculateRelevance(content, query),
        });
      }
    }

    return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
  }

  contentMatches(content, query) {
    const searchableText =
      `${content.rawMarkdown} ${JSON.stringify(content.metadata)}`.toLowerCase();
    return searchableText.includes(query.toLowerCase());
  }

  calculateRelevance(content, query) {
    const text = content.rawMarkdown.toLowerCase();
    const queryLower = query.toLowerCase();

    // Simple relevance scoring
    let score = 0;
    const matches = text.match(new RegExp(queryLower, 'g'));
    if (matches) {
      score += matches.length;
    }

    // Boost for title matches
    if (
      content.metadata.title &&
      content.metadata.title.toLowerCase().includes(queryLower)
    ) {
      score += 10;
    }

    return score;
  }

  getErrorContent(weekNumber) {
    return {
      metadata: {
        title: `Week ${weekNumber} - Content Loading Error`,
        week: weekNumber,
      },
      html: `<div class="error-content">
        <h2>Content Temporarily Unavailable</h2>
        <p>Week ${weekNumber} content is being prepared. Please check back soon!</p>
        <div class="error-actions">
          <button onclick="location.reload()">Retry Loading</button>
          <a href="#curriculum-overview">Return to Overview</a>
        </div>
      </div>`,
      rawMarkdown: `# Week ${weekNumber} - Content Loading Error\n\nContent is being prepared...`,
    };
  }
}

// Global utility functions for curriculum interactions
window.copyToClipboard = function (element) {
  const promptCode = element.parentNode.querySelector('.prompt-code');
  navigator.clipboard.writeText(promptCode.textContent);

  const originalText = element.textContent;
  element.textContent = 'Copied!';
  setTimeout(() => {
    element.textContent = originalText;
  }, 2000);
};

window.openAIChat = function (element) {
  const promptCode = element
    .closest('.ai-prompt-block')
    .querySelector('.prompt-code');
  const prompt = encodeURIComponent(promptCode.textContent);
  window.open(`https://chat.openai.com/?q=${prompt}`, '_blank');
};

window.customizePrompt = function () {
  // Implementation for prompt customization interface
  console.log('Customize prompt functionality - to be implemented');
};

window.savePrompt = function () {
  // Implementation for saving prompts to personal library
  console.log('Save prompt functionality - to be implemented');
};

export default MarkdownProcessor;

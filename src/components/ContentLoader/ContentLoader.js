import { BaseComponent } from '../BaseComponent.js';

export class ContentLoader extends BaseComponent {
  constructor() {
    super('ContentLoader');
    this.currentContent = null;
  }

  static get observedAttributes() {
    return ['content-path', 'content-type', 'auto-load'];
  }

  async connectedCallback() {
    await super.connectedCallback();

    if (this.getAttribute('auto-load') === 'true') {
      await this.loadContent();
    }
  }

  async updateContent() {
    const contentPath = this.getAttribute('content-path');
    const contentType = this.getAttribute('content-type') || 'markdown';

    if (contentPath) {
      await this.loadContent(contentPath, contentType);
    }
  }

  async loadContent(path = null, type = 'markdown') {
    const contentPath = path || this.getAttribute('content-path');
    const basePath = window.PathUtils ? window.PathUtils.getBasePath() : '';

    if (!contentPath) {
      this.renderError('No content path specified');
      return;
    }

    try {
      this.renderLoading();

      const response = await fetch(`${basePath}/content/${contentPath}`);
      if (!response.ok) {
        throw new Error(`Failed to load content: ${response.status}`);
      }

      const content = await response.text();

      if (type === 'markdown') {
        await this.renderMarkdown(content);
      } else {
        this.renderPlainText(content);
      }

      this.currentContent = content;
      this.dispatchEvent(
        new CustomEvent('content-loaded', {
          detail: { path: contentPath, content },
        }),
      );
    } catch (error) {
      console.error('Error loading content:', error);
      this.renderError(`Failed to load content: ${error.message}`);
    }
  }

  async renderMarkdown(content) {
    // For now, we'll use a simple markdown-to-HTML converter
    // In the future, we can integrate a proper markdown library
    const htmlContent = this.simpleMarkdownToHtml(content);

    const contentContainer =
      this.shadowRoot.querySelector('.content-container');
    if (contentContainer) {
      contentContainer.innerHTML = htmlContent;
    }
  }

  simpleMarkdownToHtml(markdown) {
    return (
      markdown
        // Headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        // Code blocks
        .replace(/```([\\s\\S]*?)```/gim, '<pre><code>$1</code></pre>')
        // Inline code
        .replace(/`([^`]*)`/gim, '<code>$1</code>')
        // Links
        .replace(/\[([^\]]*)\]\(([^)]*)\)/gim, '<a href="$2">$1</a>')
        // Line breaks
        .replace(/\\n/gim, '<br>')
    );
  }

  renderPlainText(content) {
    const contentContainer =
      this.shadowRoot.querySelector('.content-container');
    if (contentContainer) {
      contentContainer.innerHTML = `<pre>${content}</pre>`;
    }
  }

  renderLoading() {
    const contentContainer =
      this.shadowRoot.querySelector('.content-container');
    if (contentContainer) {
      contentContainer.innerHTML = `
        <div class="loading">
          <div class="loading-spinner"></div>
          <p>Loading content...</p>
        </div>
      `;
    }
  }

  renderError(message) {
    const contentContainer =
      this.shadowRoot.querySelector('.content-container');
    if (contentContainer) {
      contentContainer.innerHTML = `
        <div class="error">
          <h3>Error Loading Content</h3>
          <p>${message}</p>
        </div>
      `;
    }
  }

  // Public methods for external control
  async reload() {
    await this.loadContent();
  }

  setContentPath(path) {
    this.setAttribute('content-path', path);
    return this.loadContent();
  }
}

// Register the component
customElements.define('content-loader', ContentLoader);

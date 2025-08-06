import { describe, it, expect, beforeEach } from 'vitest';
import MarkdownProcessor from '../../src/utils/MarkdownProcessor.js';

// Mock fetch for testing
global.fetch = vi.fn();

describe('MarkdownProcessor', () => {
  let processor;

  beforeEach(() => {
    processor = new MarkdownProcessor();
    fetch.mockClear();
  });

  it('should initialize with correct base path', () => {
    expect(processor.basePath).toBeDefined();
    expect(typeof processor.basePath).toBe('string');
  });

  it('should parse frontmatter correctly', () => {
    const markdown = `---
title: Test Title
week: 1
magic_words: ["test", "example"]
---

# Content

This is test content.`;

    const result = processor.parseFrontMatter(markdown);

    expect(result.frontMatter.title).toBe('Test Title');
    expect(result.frontMatter.week).toBe('1');
    expect(result.content).toContain('# Content');
  });

  it('should handle markdown without frontmatter', () => {
    const markdown = `# Test Content

This is a test.`;

    const result = processor.parseFrontMatter(markdown);

    expect(result.frontMatter).toEqual({});
    expect(result.content).toBe(markdown);
  });

  it('should calculate relevance scores', () => {
    const content = {
      rawMarkdown: 'This is test content about business strategy',
      metadata: { title: 'Business Strategy Guide' },
    };

    const query = 'business';
    const score = processor.calculateRelevance(content, query);

    expect(score).toBeGreaterThan(0);
  });

  it('should link magic words in content', () => {
    const html =
      '<p>This content discusses leverage and arbitrage opportunities.</p>';

    const enhanced = processor.linkMagicWords(html);

    expect(enhanced).toContain('class="magic-word-link"');
    expect(enhanced).toContain('data-word="leverage"');
    expect(enhanced).toContain('data-word="arbitrage"');
  });

  it('should generate progress bar HTML', () => {
    const progressBar = processor.generateProgressBar(4);

    expect(progressBar).toContain('Week 4 of 16');
    expect(progressBar).toContain('25% Complete');
    expect(progressBar).toContain('width: 25%');
  });

  it('should add prompt interactions to HTML', () => {
    const html = `
      <div class="ai-prompt-block">
        <div class="prompt-code">Test prompt content</div>
      </div>
    `;

    const enhanced = processor.addPromptInteractions(html);

    expect(enhanced).toContain('Try in ChatGPT');
    expect(enhanced).toContain('Customize');
    expect(enhanced).toContain('Save to Library');
  });
});

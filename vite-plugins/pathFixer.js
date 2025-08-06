/**
 * Vite plugin to automatically fix paths in HTML files for GitHub Pages
 */
export function pathFixerPlugin() {
  return {
    name: 'path-fixer-plugin',
    transformIndexHtml: {
      enforce: 'pre',
      transform(html, ctx) {
        // Only apply in production build for GitHub Pages
        if (ctx.bundle && process.env.NODE_ENV === 'production') {
          console.log('🔧 Fixing paths for GitHub Pages deployment...');

          // Fix absolute paths in HTML
          html = html.replace(/src="\/images\//g, 'src="/legs/images/');
          html = html.replace(/href="\/(?!legs)/g, 'href="/legs/');
          html = html.replace(/url\(\/images\//g, 'url(/legs/images/');

          // Add base tag for proper resource resolution
          const baseTag = '<base href="/legs/">';
          html = html.replace('<head>', `<head>\n    ${baseTag}`);

          console.log('✅ HTML paths fixed for GitHub Pages');
        }

        return html;
      },
    },
  };
}

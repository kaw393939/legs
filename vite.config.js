import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction ? '/legs/' : '/';

  return {
    base,
    root: 'src',
    publicDir: '../public',

    build: {
      outDir: '../dist',
      emptyOutDir: true,

      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'),
          properties: resolve(__dirname, 'src/properties.html'),
          contact: resolve(__dirname, 'src/contact.html'),
          propertyManagement: resolve(
            __dirname,
            'src/services/property-management.html',
          ),
          investmentAnalysis: resolve(
            __dirname,
            'src/services/investment-analysis.html',
          ),
          marketResearch: resolve(
            __dirname,
            'src/services/market-research.html',
          ),
        },

        output: {
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
              return `assets/images/[name]-[hash].${ext}`;
            }
            if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
              return `assets/fonts/[name]-[hash].${ext}`;
            }
            return `assets/[name]-[hash].${ext}`;
          },
        },
      },

      // Optimize build
      target: 'es2020',
      minify: 'terser',
      sourcemap: false,

      // Asset handling
      assetsInclude: [
        '**/*.svg',
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.gif',
      ],
    },

    server: {
      port: 3000,
      open: true,
      cors: true,

      // Proxy API calls in development
      proxy: {
        '/api': {
          target: 'http://localhost:8000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },

    preview: {
      port: 4173,
      open: true,
    },

    // Plugin configuration
    plugins: [],

    // CSS preprocessing
    css: {
      postcss: {
        plugins: [],
      },
    },

    // Optimization
    optimizeDeps: {
      include: [],
      exclude: [],
    },
  };
});

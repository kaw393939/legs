import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction ? '/legs/' : '/';

  return {
    base,
    root: 'src',
    publicDir: '../public',

    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'components/Header/*',
            dest: 'components/Header',
          },
          {
            src: 'components/Hero/*',
            dest: 'components/Hero',
          },
          {
            src: 'components/PropertyCard/*',
            dest: 'components/PropertyCard',
          },
          {
            src: 'components/Footer/*',
            dest: 'components/Footer',
          },
        ],
      }),
    ],

    // Define global variables available to the app
    define: {
      __APP_BASE_PATH__: JSON.stringify(base),
      __IS_PRODUCTION__: JSON.stringify(isProduction),
    },

    build: {
      outDir: '../dist',
      emptyOutDir: true,

      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'),
          curriculum: resolve(__dirname, 'src/curriculum.html'),
          properties: resolve(__dirname, 'src/properties.html'),
          contact: resolve(__dirname, 'src/contact.html'),
          404: resolve(__dirname, 'src/404.html'),
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
  };
});

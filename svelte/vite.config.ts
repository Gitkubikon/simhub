import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/racinghub/',
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/*',
          dest: 'assets'
        }
      ]
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    visualizer({
      filename: './dist/stats.html',
      open: true
    })
    // clearConsoleOnHMR() // Add the custom plugin here
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@nav': path.resolve(__dirname, './src/nav'),
      '@popups': path.resolve(__dirname, './src/popups'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@windows': path.resolve(__dirname, './src/windows'),
      '@config': path.resolve(__dirname, './src/config'),
      'main': path.resolve(__dirname, './src/main'),
      '@public': path.resolve(__dirname, './public'),
      '@assets': path.resolve(__dirname, './assets'),
    },
  },
  assetsInclude: [
    '**/*.glb', '**/*.gltf', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg',
    '**/*.mp3', '**/*.wav', '**/*.ogg', '**/*.bin', '**/*.hdr', '**/*.env', '**/*.csv'
  ],
  build: {
    // Uncomment or adjust according to your deployment strategy:
    // outDir: 'dist',
    // assetsDir: 'assets',
    minify: 'terser', // Use Terser for minification for better optimization
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        passes: 2, // Increase the number of passes for better compression
      },
      format: {
        comments: false, // Remove comments in production
      },
      keep_fnames: true,
      keep_classnames: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    sourcemap: false, // Disable sourcemap for production build to improve build speed
  },
  optimizeDeps: {
    include: ['svelte', '@sveltejs/vite-plugin-svelte']
  },
});

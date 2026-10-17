import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Suppress the 500kB warning — we're splitting properly now
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        /**
         * Manual chunk splitting — Vite 8 (Rolldown) requires a FUNCTION, not an object.
         *
         * WHY SPLIT AT ALL?
         *  Before: one 1,140 kB JS file — browser downloads + parses everything before
         *          rendering a single pixel.
         *  After:  5 small vendor chunks downloaded in parallel over HTTP/2.
         *          Each chunk is independently cached — if React doesn't change,
         *          the browser never re-downloads vendor-react on the next deploy.
         *
         * CHUNK STRATEGY:
         *  vendor-react   — React + Router (most stable, longest cache life)
         *  vendor-leaflet — Map library (only used on /map route)
         *  vendor-recharts— Chart library (only used on /analytics & /dashboard)
         *  vendor-supabase— Auth + DB SDK
         *  vendor-icons   — lucide-react icon set
         */
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom') || id.includes('react-dom') || id.includes('/react/')) {
              return 'vendor-react'
            }
            if (id.includes('leaflet') || id.includes('react-leaflet')) {
              return 'vendor-leaflet'
            }
            if (id.includes('recharts')) {
              return 'vendor-recharts'
            }
            if (id.includes('@supabase')) {
              return 'vendor-supabase'
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons'
            }
          }
        },
      },
    },
  },
})

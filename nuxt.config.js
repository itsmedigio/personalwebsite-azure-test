
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  ssr: false, // Disable server-side rendering

  // Other config options...
  nitro: {
    preset: 'service-worker'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    // Generate the static HTML files in the output folder
    // Use 'npm run generate' instead of 'npm run build' to trigger the generation
    // If using 'nuxt export', remove this 'generate' property
    generate: {
      fallback: true // If you want to use dynamic routes, set this to 'true'
    }
  }
}

// Standalone Sanity Studio config — used by `sanity deploy` to host the admin
// panel at <studioHost>.sanity.studio. Re-exports the shared studio config so
// the Studio is NOT bundled into the Next.js website Worker.
export { default } from './src/sanity/config'

import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'msq7ysrf',
    dataset: 'production',
  },
  // Hostname for the hosted Studio: https://<studioHost>.sanity.studio
  studioHost: 'esm-business-school',
})

import { defineCloudflareConfig } from '@opennextjs/cloudflare'

// Minimal config: no R2 incremental cache binding required.
// ISR pages fall back to on-demand rendering (fine for a low-traffic marketing site).
export default defineCloudflareConfig()

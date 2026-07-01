# WhatsApp Link & QR Generator

Free tool at https://mayantha.ae/whatsapp-link-generator - a single static page served by a
Cloudflare Worker routed onto the mayantha.ae zone.

- `public/whatsapp-link-generator.html` - the whole tool (self-contained HTML/CSS/JS)
- `wrangler.jsonc` - static assets Worker + zone route

Deploy: `npx wrangler deploy`

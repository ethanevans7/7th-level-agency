# 7th Level Agency

Client-facing Next.js website and portfolio with a simple Formspree inquiry form. No CMS, application database, lead API, or admin dashboard is required. Content is edited in `src/lib/content.ts`, `src/lib/articles.ts`, and the page/showcase components.

## Local development

Run `npm install`, copy `.env.example` to `.env.local`, then `npm run dev`. Preview at http://localhost:3007. Run `npm run check` and `npm run build` before deploying. This repository builds independently with its own locked dependencies.

## Connect inquiries

1. Create a form at https://formspree.io. Select and verify the receiving inbox.
2. Copy the form ID from `https://formspree.io/f/YOUR_ID` into `FORMSPREE_FORM_ID`.
3. Redeploy (or restart development) after setting the variable.
4. Review Formspree spam protection and domain restrictions. If enabling CAPTCHA, test compatibility with the direct AJAX submission flow; do not enable a challenge that this form does not render.
5. Submit an inquiry from the deployed site. Verify it appears in Formspree and reaches your inbox. Success on this website means the provider accepted the submission, not that inbox delivery was independently confirmed.

The form collects name, email, optional phone number, budget range, and message. Service or project context is included when visitors arrive from a relevant page. Budget ranges are editable in `src/lib/inquiry-options.ts`. It uses browser validation, a honeypot, provider spam filtering, and a pending state preventing repeated clicks. Failed requests keep entered details available. Missing configuration disables submission and displays an availability message. No automatic prospect confirmation email is promised; configure it in Formspree if desired.

## Vercel

Use the repository root (`.`) as the Vercel project root. Framework: Next.js. Build: `npm run build`. Default output settings. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain and `SITE_INDEXABLE=true` only for production. Keep preview indexing disabled. Configure `FORMSPREE_FORM_ID`. Scheduling and GA4 are optional; see `.env.example`.

No Supabase, Resend, admin users, or session secrets are needed. If you previously added those variables to Vercel, remove them. Never commit `.env.local`.

## Launch checks

- Run a fresh dependency install, type check, and production build.
- Check desktop and mobile pages, images, navigation, trailers, and external watch links.
- Verify a real Formspree submission and inbox notification; check spam folder and reply-to address.
- Confirm failure handling, sender validation, and double-click protection.
- Verify final canonical URLs, sitemap, robots, domain redirect, privacy contact and retention practices.
- Enable analytics only with the appropriate privacy and consent behavior for the audience.

Third-party form delivery remains unverified until the owner's endpoint is configured and a real submission is tested.

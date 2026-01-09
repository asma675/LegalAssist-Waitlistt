# LegalAssist Landing + Waitlist (Next.js)

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
- Upload this folder to GitHub, then import in Vercel
- Or zip the folder and upload to Vercel

## Waitlist storage
This project supports an optional webhook:
- Set environment variable `WAITLIST_WEBHOOK_URL` to your endpoint (Zapier/Make/n8n/custom backend).
- If not set, signups are logged to serverless function logs.

## Add your demo video
- Option A: Replace the iframe src in `app/page.tsx`
- Option B: Add `public/demo.mp4` and uncomment the `<video>` section

## Waitlist modal
- A join modal auto-opens after you scroll. Edit trigger in `app/components/WaitlistModal.tsx`.

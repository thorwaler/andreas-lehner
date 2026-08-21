# Replace all photos with the new portrait, square and face-focused

## What changes

The new uploaded portrait becomes the only photo of you on the site, cropped square with your face centered:

- Home hero: same circular frame (a square image cropped to a circle), face centered rather than the body dominating.
- Fractional page hero: switches from the tall 3:4 frame to a square, rounded-corner frame so the crop stays on your face.

Everything else (logo/icon, book cover, wave graphics, dashboard screenshots) stays untouched.

## Technical notes

- Upload the WebP portrait via the assets CLI to `src/assets/andreas-portrait.webp.asset.json`; import the pointer and use its URL.
- `src/pages/Index.tsx`: replace the `profile-casual.jpg` import with the pointer; keep `rounded-full`, `object-cover`, add `object-top` so the face (upper part of the frame) stays in view.
- `src/pages/Fractional.tsx`: replace the hardcoded `/lovable-uploads/...jpg` src with the pointer URL, change `aspect-[3/4]` to `aspect-square`, keep `rounded-2xl` and add `object-top`.
- Drop the unused `profile-professional.jpeg` import and delete the two now-unused photo files from `src/assets`.

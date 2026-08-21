# Replace all photos with the new portrait

## What changes

The new uploaded portrait becomes the single photo of you used across the site:

- Home hero (currently `profile-casual.jpg`, circular crop)
- Fractional page hero (currently an older uploaded JPG, 3:4 portrait crop)

Everything else (logo/icon, book cover, wave graphics, dashboard screenshots) stays as is.

## Technical notes

- Upload the WebP version via the assets CLI to `src/assets/andreas-portrait.webp.asset.json` (smaller than the PNG, same image).
- `src/pages/Index.tsx`: import the pointer, use its URL for the hero image; keep the round crop and existing classes.
- `src/pages/Fractional.tsx`: replace the hardcoded `/lovable-uploads/...jpg` src with the same asset URL; keep the `aspect-[3/4]` framing.
- Remove the now-unused `profile-casual.jpg` and `profile-professional.jpeg` imports/files.

# Make the new portrait work on Netlify

## Why it's missing

The new portrait is stored as a CDN pointer (`/__l5e/assets-v1/...`) served by Lovable's hosting layer. Netlify has no such route, so the image 404s there. Every other image on the site (logo, icon, book cover, waves, dashboards) is a real file in the repo and therefore builds fine anywhere.

## Fix

Bring the portrait back into the repository so the build bundles it, exactly like the other images:

- Add the square, face-focused crop as `src/assets/andreas-portrait.webp` (a real file, ~48 KB).
- `src/pages/Index.tsx` and `src/pages/Fractional.tsx`: import the image file directly instead of the `.asset.json` pointer; framing and classes stay unchanged.
- Delete `src/assets/andreas-portrait.webp.asset.json` and remove the CDN asset so nothing dangles.

Result: the portrait is hashed into the build output and loads identically on Lovable, Netlify, or any other host.

## Alternative (not recommended)

Keep the pointer and add a Netlify proxy rule from `/__l5e/*` to the Lovable CDN. That keeps the repo lighter but makes the site depend on Lovable's CDN at runtime, so it is not worth it for one small image.

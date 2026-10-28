# Hotel atmosphere film

Created 28 October 2026 for the user-confirmed cosy, understated boutique-hotel direction. The film is AI-created and labelled beneath the player. The three room galleries remain actual Little Pawcious photographs.

## Credits and provenance

User cap: 35 credits, including preparation. Starting verified balance 759.25; ending verified balance 739.75. Actual total **19.5 credits**. No retries, batches or paid upscales.

| Asset | Higgsfield job | Model | Credits |
|---|---|---|---|
| Landscape lounge reference | f7566a18-9f92-45e1-bd70-5ba9e7d88a2f | Nano Banana Pro request, Nano Banana 2 result | 2 |
| Silent 10-second film | b9235ab6-de9f-4de4-aa28-bb00cabf6066 | Kling 3.0 Pro | 17.5 |

Reference photograph: https://littlepawcious.sg/wp-content/uploads/2024/05/background_living.webp

Generated frame: https://d8j0ntlcm91z4.cloudfront.net/user_3HOQsp3aI9QdUt9ZM3bz4dnBtay/hf_20261028_055510_f7566a18-9f92-45e1-bd70-5ba9e7d88a2f.png

Original film: https://d8j0ntlcm91z4.cloudfront.net/user_3HOQsp3aI9QdUt9ZM3bz4dnBtay/hf_20261028_055822_b9235ab6-de9f-4de4-aa28-bb00cabf6066.mp4

The same landscape frame was supplied as both start and end images. Full submitted prompts and parameters are in `media-generation.json`.

## Web edit

The generated cat enters around 2.5 seconds and exits around 8 seconds. To shorten the empty lead-in and soften the join, the final edit plays original seconds 2–9.5, blending its last 0.5 seconds into original seconds 1.5–2. The join contains only an empty room; the cat is neither reversed nor dissolved. Result: 7.5 seconds, 24 fps, H.264, no audio, fast-start MP4.

- `public/video/hotel-loop.mp4`: 1920×1080, approximately 922 KB.
- `public/video/hotel-loop-mobile.mp4`: 960×540, approximately 245 KB.
- `public/images/hotel-film-poster.jpg`: extracted at edited second 2.5; 1600×900, approximately 124 KB.

`src/video.js` loads the appropriate file only when playback is requested and the film is visible. Reduced-motion and data-saving preferences start with the static poster. Explicit Play remains available. Playback pauses when offscreen, hidden or a dialog is open; the user's Pause choice persists for the page session. A failed video retains the poster and exposes Retry. No external video player or tracking embed.

The full redesign reuses the same film and poster without new generation. Fonts are now self-hosted Gabarito and Albert Sans, licensed under the bundled SIL Open Font License files in `public/fonts/`. The original authored paw-print cursor SVGs were replaced at the user’s request with the existing hotel’s grey-and-pink paw artwork.

## Original hotel paw

Source as rendered in the original site header on 28 October 2026: https://i0.wp.com/littlepawcious.sg/wp-content/uploads/2023/12/icon-logo-square-format-512-%C3%97-512-px.png?resize=150%2C150&ssl=1

- `public/cursors/original-paw.png`: unchanged 150×150 transparent PNG, used for header/footer marks.
- `public/cursors/paw.png`: proportional 32×32 export of the same artwork, used as the native desktop cursor. Hotspot 19,7 meets the upper paw tip. No recolouring or AI generation.
- Original source page currently uses this as its header artwork, rather than a CSS cursor; the new preview adapts that same artwork for the requested cursor.

Latest cursor refinement: user requested just the pink paw. `pink-paw.svg` is a small authored paw-pad interface icon in soft pink, without the grey leg, used only for fine-pointer cursors. The original PNG remains the header/footer logo artwork and favicon. No AI generation or new credits.

The pink cursor is now displayed at 24×24 with hotspot 12,16; its 32-unit viewBox preserves the same paw geometry.

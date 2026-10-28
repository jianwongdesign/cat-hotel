# Design handoff — 28 October 2026

> Historical first-cut/refinement record. The current full redesign is documented in [REDESIGN-HANDOFF.md](REDESIGN-HANDOFF.md).

## Direction

User-confirmed direction: **a cosy, understated boutique hotel**. Warm cream, terracotta and dark brown stay; Newsreader display type and DM Sans body type are now self-hosted. The wide, quiet lounge film is the main visual moment. Room listings use open horizontal layouts and real photographs. Decorative stamps, arches, badges, handwritten flourishes and eyebrow labels have been removed.

Higgsfield spend for the film and reference frame: **19.5 of the 35-credit cap**. See `MEDIA.md` and `media-generation.json` for provenance, prompts, costs and loop processing. The generated atmosphere film is labelled as AI-created. Room galleries still use actual hotel photographs. No fabricated review scores or claims of live availability.

## Verified reference pages

- https://littlepawcious.sg/ — brand direction, real hotel/cat photos, daily updates, licence.
- https://littlepawcious.sg/rooms/felis-cabins/ — updated starting rate S$45/day; 1 medium/large or 2 small cats. Size 1.2 × 0.6 × 0.7 m. Adjoining rooms not priced in the preview.
- https://littlepawcious.sg/rooms/panthera-suites/ — updated starting rate S$80/day for the first 2 cats, S$20/day per additional cat, max 4.
- https://littlepawcious.sg/rooms/felidae-suites/ — starting rate S$100/day for the first 2 cats, S$20/day per additional cat, max 6. Size 2.3 × 1.4 × 2.3 m.
- https://littlepawcious.sg/contact/ — phone, email and street address.
- https://littlepawcious.sg/faq/ — boarding and arrival guidance. Confirm directly before production.
- https://littlepawcious.sg/boarding-requirements/ — linked directly for complete requirements.

Some source pages contain older and revised rates. This design uses the explicit revised starting rates, not a claim of availability or a final quote. The three-day estimate excludes check-out day solely as a documented prototype assumption. Peak surcharges, add-ons and final billing rules are not implemented.

## Photography

All following paths are relative to https://littlepawcious.sg/wp-content/uploads/:

| Local asset | Original source |
| --- | --- |
| cat-portrait.webp | 2023/11/IMG_1508-scaled.jpeg.webp |
| hotel-lounge.webp | 2024/05/background_living.webp |
| felis.jpg | 2023/12/img_1229.jpg |
| felis-detail.jpeg | 2023/11/IMG_1506.jpeg |
| panthera.avif | 2024/11/IMG_9305-scaled.avif |
| panthera-detail.avif | 2024/11/IMG_9228-scaled.avif |
| felidae.avif | 2024/11/IMG_9309-scaled.avif |
| felidae-detail.avif | 2024/11/IMG_9230-scaled.avif |

## Structure

- `src/app.js`: homepage, room dialogs and booking UI.
- `src/styles.css`: responsive design system and modal layouts.
- `src/booking.js`: room data, Singapore date defaults, validation, preview estimates.
- `tests/booking.test.js`: date, capacity and pricing edge cases.
- `scripts/build.mjs`: dependency-free static build.
- `.github/workflows/pages.yml`: automated preview publishing.

## Next production decisions

1. Confirm current WordPress reservation plugin and desired migration/integration route.
2. Obtain actual room-unit identifiers, occupancy constraints, pricing calendar, add-ons and cancellation policy.
3. Define payment provider and merchant setup; prototype displays current site's Stripe, PayNow and PayPal options but connects none.
4. Implement server-authoritative prices, unit-level inventory, expiring holds and transactional booking creation.
5. Integrate hosted payment sessions and signed webhook confirmation; verify retries, duplicates, expiry, failed payments, refunds and double-booking prevention.
6. Add admin booking management, transactional email delivery, privacy/retention controls and production monitoring.
7. Approve design/content, test all actual operational journeys and then release to the production domain.

The client's existing website has not been modified.

## Release and verification

- Public preview: https://jianwongdesign.github.io/cat-hotel/
- Repository: https://github.com/jianwongdesign/cat-hotel
- First design commit: `f436ac12ce88faba1106fbc2be004df93797f6fe`.
- Successful build and deployment: https://github.com/jianwongdesign/cat-hotel/actions/runs/40639001187 (rerun after enabling Pages).
- Public HTTP 200 verified; public homepage and booking dialog checked in Chrome, including image load and empty-date validation.
- Browser layouts inspected at 320, 390, 768, 1440 and the default large desktop viewport. No document horizontal overflow at the explicitly measured 320, 390, 768 or 1440 widths.
- Room filtering, second gallery photo, mobile navigation, guest-detail validation, five-cat capacity selection, S$480 three-day Felidae estimate and PayNow preview completion checked in-browser. No external booking or payment was submitted.
- Four Node test groups pass: date boundaries, invalid inputs, base/extra-cat pricing and capacity rejection.
- Desktop evidence saved locally at `.cache/qa/desktop-preview.jpg` (excluded from Git).


## Boutique refinement — 28 October 2026

- 7.5-second silent loop with an empty-room crossfade; approximately 922 KB desktop / 245 KB mobile. Play/pause control and poster fallback.
- Video pauses offscreen, when a dialog opens, and when the document is hidden. Reduced-motion/data-saving preferences default to the poster; explicit playback remains possible.
- Preserved room/date/guest/payment-preview journey. Capacity change now restores keyboard focus and room selection avoids disabled over-capacity options.
- Room gallery now leads Panthera with the actual interior rather than the cat close-up.
- Verified five cats, three days, Felidae S$480 through PayNow preview completion; no real transaction. Mobile navigation, filtering, second room photo, play/pause and offscreen pause checked.
- Refined layout measured without document overflow at 320, 390, 768 and 1440 px. Screenshot evidence in `.impeccable/review/`.
- Reduced-motion emulation was blocked by the browser permission check; no workaround attempted. Fallback reviewed in source but its runtime preference check remains unverified. Data-saving preference is likewise source-reviewed only.
- Impeccable detector: one cream-background warning, accepted because the user explicitly requested the existing warm palette. No repeated detector pass.

- Independent finish review: `ship` for the sole material fix, the contact-section focus outline. Cream outlines verified for both phone and viewing CTA; all five required recaptures accepted. Review at `.impeccable/review/finish-review.md`.
- Large desktop also measured at 2320 px without overflow. Final browser console had no errors or warnings. Actual film loop/mute state and 7.5-second duration confirmed in browser.

## Published boutique preview

- Design/video commit: `0855f7e501930118da0705cdba85e038afa3d681`.
- Deployment passed: https://github.com/jianwongdesign/cat-hotel/actions/runs/40642327313 (build including tests and Pages deploy succeeded).
- Public page verified in Chrome at https://jianwongdesign.github.io/cat-hotel/: revised Newsreader design, labelled film playing from the repository MP4, readyState 4, duration 7.5 seconds, no horizontal overflow and no console errors.
- Published screenshot: `.cache/qa/published-boutique-preview.jpg` (local evidence, ignored by Git).
- Original OFL licence files are retained as downloaded, including upstream line endings/trailing spaces.

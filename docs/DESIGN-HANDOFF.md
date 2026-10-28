# Design handoff — 28 October 2026

## Direction

A warmer, more spacious evolution of the existing ivory-and-red theme: cream backgrounds, terracotta accents, dark brown text, Manrope headings, DM Sans body copy and a restrained italic serif accent. A large real cat portrait, room photography and quiet handwritten-style details carry the personality.

No Higgsfield credits used (0 of the authorised maximum 75). All photographs are from the client’s existing public site; they remain the property of their respective owner. No generated room interiors or invented review scores are used. Copy is newly written for this preview. Google Fonts loads externally.

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

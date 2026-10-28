# Full redesign — 28 October 2026

The user rejected the previous restrained design as too plain and empty, chose direct working-page implementation, and requested a desktop paw cursor with a ready mobile version. This supersedes the visual direction described in the earlier DESIGN-HANDOFF.md. Product and pricing facts remain unchanged.

## Current implementation

- Gabarito display and Albert Sans body type, self-hosted with OFL licences.
- Immersive lounge-film hero with prominent headline and a usable date/guest reservation desk in the opening viewport.
- Three-room photographic catalogue with actual interiors, capacities, starting rates, gallery details and room-specific booking actions.
- Plum care chapter, concise arrival checklist, updated FAQ/contact/footer and matching dialogs.
- Native CSS paw cursor on desktop fine pointers with hover. Accent paw on actions; text cursor in editable inputs; normal cursor on coarse/touch devices. No JavaScript cursor follower or trailing animation.
- Existing 7.5-second cat film reused. No new Higgsfield spend; total stays 19.5 of the 35-credit cap. AI disclosure preserved.

## Boundaries

This remains a design and booking/payment preview. No unit inventory, reservation holds, merchant checkout, backend or confirmation emails are connected. See the production decisions in DESIGN-HANDOFF.md before enabling real bookings. The original littlepawcious.sg site is unchanged.

## Verification

- Four automated booking test groups pass.
- Mobile 390px: menu, family filter, second room photo, room-to-booking path, empty guest validation, five-cat capacity selection, S$480 three-day Felidae quote, PayNow preview completion.
- No horizontal page overflow at 320, 390, 768, 1440 or 2320 px. Evidence under `.impeccable/review-redesign/`.
- Native paw cursor CSS and assets verified on desktop; touch exclusion is defined by pointer/hover media queries, not viewport width.
- Source video plays; mobile chooses the small encode; offscreen pause checked. No new raw-CDP permission requests or preference emulation after the prior browser refusal.
- Existing film reduced-motion/data-saving fallback remains source-reviewed only.

Direction contract: `.impeccable/surfaces/index-html.md`. Product truth: PRODUCT.md. Final implementation tokens: DESIGN.md and `.impeccable/design.json`.

Final review fix batch: removed the small reservation eyebrow, replaced booking Back/progress glyphs with the shared SVG icons, and restored heading focus plus scroll-to-top on Back/Edit details. Mobile browser verification confirms both return focus to `booking-title`, reset dialog scroll to 0 and preserve guest data. All four automated tests still pass; browser console is clear.

Independent finish verdict: `ship` for all three scored fixes; corrected 320px evidence accepted. Report: `.impeccable/review-redesign/finish-review.md`.

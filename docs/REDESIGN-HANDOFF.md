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

## Published release

- Design commit: `c70add44440424ff2297ae15a29333dae3877934`.
- Successful build/test/deployment: https://github.com/jianwongdesign/cat-hotel/actions/runs/40645001340.
- Public preview: https://jianwongdesign.github.io/cat-hotel/.
- Public desktop checked: new Gabarito headline, film playing with readyState 4 / 7.5-second duration, both paw cursor URLs applied and HTTP 200, no horizontal overflow or console errors.
- Public mobile checked at 390px: mobile navigation present, small video encode selected, no horizontal overflow. Desktop viewport restored afterwards.
- Published screenshots saved locally under `.cache/qa/published-redesign-desktop.jpg` and `published-redesign-mobile.jpg`.

## Minor cosy polish and click repair — 28 October 2026

The user approved the current design and asked for softer corners plus a fix for unreliable paw-cursor clicks. This pass preserves layout, typography, copy and media.

- Both native paw cursors now use the same centre-pad hotspot (16,21), marked by a small ivory aim dot; previously the hotspot was offset at (8,5). Disabled room labels show the disabled cursor.
- Booking date, guest-count and room changes update controls and the estimate in place. Previously replacing the whole form on a date change could remove the intended click target during blur. Invalid dates hide the estimate until corrected; capacity and auto-adjusted checkout still update.
- Ivory paper surfaces and consistent softer corners: buttons 14px, fields 10px, room photos/desktop desk 20px, desktop hero 28px, desktop dialog 24px; mobile hero 20px and desk/dialog 16px. Gallery/close controls have 44px hit areas.
- Local Chrome QA: 1440px desktop; 390px mobile menu, room gallery and room-to-booking path; 320px narrow layout; 768px tablet. No horizontal overflow at these widths. Browser console clear.
- Booking QA: changed dates then clicked Continue once; blank-date validation and recovery; check-in beyond checkout auto-adjustment; five-cat selection disables smaller rooms; switch back to two cats restores choices; Panthera 3-day S$240 estimate and PayNow preview completion. Keyboard Escape closes room dialog.
- Four existing automated booking tests and static build pass. Single design scan: new intentional radii documented; unchanged type-size advisories and the explicitly approved warm-cream palette retained. No additional video generation or credits.
- Screenshots: `.cache/qa/cosy-desktop.jpg`, `cosy-mobile.jpg`, `cosy-narrow.jpg`, `cosy-mobile-room.jpg` (local, ignored).

Polish published as `47403b114edb66225b7193b633df592e3b4189da`; Pages build/test/deploy succeeded: https://github.com/jianwongdesign/cat-hotel/actions/runs/40646382050. Public verification confirmed 28px desktop hero, 14px buttons, ivory surfaces, cursor hotspot 16,21 and first-click continuation after a date change. At 390px the published mobile hero uses 20px corners with no horizontal overflow; browser console clear. Screenshots: `.cache/qa/published-cosy-desktop.jpg` and `published-cosy-mobile.jpg`. Browser viewport restored.

## Original paw artwork — 28 October 2026

User requested the paw from https://littlepawcious.sg/. Its current header displays the grey paw with pink pads; the source page does not currently apply it as a CSS cursor. Replaced the authored cursor SVGs with that exact transparent artwork, proportionally exported at 32px. The native cursor hotspot is 19,7 at the top of the paw, consistent between background and actions. Header/footer marks now reuse the original 150px asset. Provenance is in MEDIA.md. Existing booking click fix and touch-only behaviour preserved.

Local verification: original header/footer assets loaded at 150px; default/action cursor both point to the new PNG and use the same hotspot; Book a stay and Close booking work; 390px mobile header fits without horizontal overflow. Static build and diff checks passed. No additional credits spent.

## Matching home hero width — 28 October 2026

Hero now shares `.container` with the header, booking desk and page content, replacing its independent 1680px maximum and outer gutters. Removed the mobile booking desk's wider override so its edges also match. Hero height, film, corners and typography preserved; versioned CSS/module URLs refreshed.

Verified equal left/right edges in Chrome: 320px (20–300), 390px (20–370), 768px (32–736), 1440px (90–1350), 1920px (240–1680). No horizontal overflow; narrow headline and booking fields fit. Static build and diff checks pass. Single design scan has only existing type/radius advisories and approved cream-palette warning; no new design changes made from these.

## Pink cursor and larger booking wording — 28 October 2026

User requested just the pink paw for the cursor, original artwork for the logo, and slightly larger booking wording. Cursor now uses `pink-paw.svg` at hotspot 16,21; header/footer and favicon retain the original grey-and-pink artwork. Increased quick-book labels/values, modal labels/inputs/actions, room options and right-side price summary. Text fields 16px, labels and summary rows 14px, supporting notices 12px. At ≤480px booking dialog dates stack to preserve legibility; larger phones/tablets retain appropriate columns. Hero alignment preserved.

QA: desktop 1440px and tablet 768px modal screenshots; 390px quick booking/header; 320px date, guest, payment and completed preview journey. No page/dialog horizontal overflow in checked states after stacking date fields; clicks work with updated cursor. Original logo asset confirmed. Build and diff check pass. One detector scan retains established typography/radius advisories and explicitly approved cream palette. No media generation or credit spending.

## Booking status and smoother UI motion — 28 October 2026

User requested proper 01–03 status and smoother website animation. The booking progress component is now a connected sequence with explicit In progress / Upcoming / Completed labels, SVG ticks and filled completed connectors. It stays visible with all three stages complete on preview completion. `aria-current=step` identifies only the active stage.

Motion uses 160ms control colour feedback, 160–240ms interruptible menu/dialog fades and short transforms, and a 180ms booking-content fade. Booking dialog height remains consistent between steps to prevent repositioning. A stable scrollbar gutter prevents horizontal shifts on scroll lock. Removed full-screen backdrop blur and photo brightness filtering in favour of a lightweight overlay. Native anchor scrolling and the existing film remain; no animation library, scroll reveals, cursor followers or new video generation. Reduced-motion CSS keeps the existing suppression; preference runtime emulation remains unverified/source-reviewed. No claim of measured frame-rate gains: playback-quality counters were unavailable through the browser inspection interface.

Also repaired modal handoff scroll locking: closing the room gallery no longer unlocks the body if the booking dialog is already open. Mobile menu closes with Escape and restores focus.

QA: desktop 1440px forward/back status, guest form, review (two completed), and completion (three completed, no current step); 320/390/768px layouts without dialog horizontal overflow. Mobile menu open/close/Escape, native dialog Escape, room-to-booking handoff and scroll lock verified. Mobile film resumes after closing, readyState 4, 7.5-second source, mobile encode selected. Browser console clear. Four booking tests and build pass. Single detector scan: approved palette and established sizing advisories; new motion colours documented. Screenshots in `.cache/qa/progress-review-desktop.jpg` and `progress-mobile.jpg`.

---
name: Little Pawcious
description: A contemporary cat-hotel showroom with warm colour, substantial photography and clear reservation controls.
colors:
  cream: "#fffaf4"
  paper: "#fffdf9"
  ink: "#3b262b"
  muted: "#756368"
  rust: "#9e403b"
  rust-dark: "#7d2b2a"
  line: "#e4d8d2"
  blush: "#f4e6dd"
  plum: "#492932"
  peach: "#f6c6a8"
  room-clay: "#f2e6dd"
  filter-clay: "#e5d5c9"
  faq-cream: "#f7eee6"
  summary-clay: "#f0e2d8"
  error: "#a32b1b"
  success-bg: "#e2e7d5"
  success-ink: "#596944"
typography:
  display:
    fontFamily: "Gabarito, sans-serif"
    fontSize: "clamp(52px, 5.6vw, 84px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Gabarito, sans-serif"
    fontSize: "clamp(38px, 3.6vw, 56px)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-.035em"
  title:
    fontFamily: "Gabarito, sans-serif"
    fontSize: "27px"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-.025em"
  body:
    fontFamily: "Albert Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "Albert Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.35
  field-label:
    fontFamily: "Albert Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.65
rounded:
  field: "10px"
  filter-option: "10px"
  button: "14px"
  room-option: "14px"
  mobile-desk: "16px"
  photo: "20px"
  dialog: "24px"
  hero: "28px"
spacing:
  section: "76px"
  section-tablet: "60px"
  section-mobile: "45px"
  room-grid: "25px"
  button-block: "16px"
  button-inline: "22px"
components:
  button-primary:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "16px 22px"
  button-primary-hover:
    backgroundColor: "{colors.rust-dark}"
  button-light:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.rust}"
    rounded: "{rounded.button}"
    padding: "16px 22px"
  button-light-hover:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.plum}"
  form-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "11px"
  room-option:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.room-option}"
    padding: "12px"
  room-filter-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.rust}"
    rounded: "{rounded.filter-option}"
    padding: "9px 15px"
---

# Design System: Little Pawcious

## Overview

**Creative North Star: "A contemporary cat-hotel showroom"**

Warm white, espresso-plum and clay frame substantial real photography. Rounded humanist headings, compact content groupings and confident colour give the cosy boutique identity more presence. Controls are inset, approachable and easy to find; imagery carries the setting without decorative sticker badges.

This source-derived record supersedes the previous restrained Newsreader/DM Sans design, which the user rejected as too plain and empty. It captures `src/styles.css`, `src/app.js` and `src/video.js` on 28 October 2026. Product truth belongs to `PRODUCT.md`; the homepage composition and direction belong to `.impeccable/surfaces/index-html.md`. The implementation remains a design and booking/payment preview. No inventory, reservation holds, payment collection or confirmation emails are connected.

**Key Characteristics:**

- Warm white surfaces, plum chapters, clay backgrounds and rust actions.
- Gabarito headings with Albert Sans body and control text.
- Substantial room photography, visible capacity/rates and close content grouping.
- Rounded inset controls, a native desktop paw cursor and touch-ready layouts.
- A controlled atmosphere film and explicit preview notices.

## Colors

The frontmatter preserves the exact CSS values. Core names map directly to custom properties in `src/styles.css`; descriptive keys such as `room-clay` record existing literal values rather than new CSS variables.

- **Rust / deep rust:** primary actions, rates, selected inputs and interaction feedback. The deeper tone is the primary-button hover state.
- **Espresso-plum:** the preview strip, care chapter, mobile hero background and text selection. Peach supplies the care heading and icon contrast.
- **Warm white / paper:** page canvas and inset ivory controls. `cream` is the source token name for the current warm white, not the former cream value.
- **Ink / muted:** body text and supporting copy. Line and blush remain source primitives; blush is retained in the stylesheet but is not a major painted surface.
- **Clay surfaces:** room catalogue, filter tray, FAQ and booking summary each use their extracted tone.
- **Error / success:** the booking error text and completed-preview icon use these local status colours. Completion means only that the design journey is complete.

**The Contrast Rule.** Use the rust focus outline on pale surfaces, warm white on the hero and rust contact section, and peach on the care chapter action.

## Typography

**Display font:** Gabarito, sans-serif; self-hosted variable face, weights 400–800. **Body font:** Albert Sans, sans-serif; self-hosted variable face, weights 400–700. Font files and OFL licences live in `public/fonts/`. The legacy `--serif` variable aliases the current sans-serif heading family and is not a serif directive.

The hierarchy is rounded and compact, with negative tracking on headings. The base display, headline, title and body tokens are normative above; actual surface variants follow the stylesheet:

- Hero: 600 weight, line-height 1.02; 92px at ≥1700px, 68px at ≤1150px, 61px at ≤850px, 47px/1.01 at ≤600px, 42px at ≤359px.
- Room titles: 27px/1.15 normally, 23px at ≤1150px, 29px at ≤600px and 26px at ≤359px. Prices use Gabarito and tabular numerals.
- Care headline: `clamp(42px, 4.4vw, 64px)`; 44px at ≤850px and 47px at ≤600px.
- Booking heading: 35px, 28px on mobile. Room dialog heading: 36px, 30px at ≤850px. Booking form section titles: 20px.
- Dialog text fields: 14px normally and 16px at ≤600px. Local supporting text ranges from small disclosure labels to 13–14px paragraphs; do not treat the 16px body token as every paragraph's computed size.

## Layout

The desktop container is `min(1260px, calc(100% - 96px))`. Sections use 76px vertical padding and the three-column room grid uses a 25px gap. The current homepage places the film above an overlapping reservation desk, followed by a concise introduction, three-room photographic catalogue, plum care chapter, arrival checklist, FAQ, rust contact section and warm-white footer. That sequence is a surface implementation, not a requirement for every future screen.

| Media condition | Implemented response |
| --- | --- |
| ≥1700px | Container `min(1440px, calc(100% - 160px))`; hero 720px tall; room photos 430px; care photo minimum 730px. |
| ≤1150px | Container `calc(100% - 64px)`; hero 550px; room photos 330px; room grid gap 20px; tighter navigation and desk. |
| ≤850px | Navigation collapses to a menu under the 76px header; hero 520px; desk caption hidden; room grid remains three columns with 285px photos and stacked card actions. Sections use 60px padding. Booking columns become content plus a 225px summary. |
| ≤600px | Container `calc(100% - 40px)`; header 70px; hero 465px; film begins 180px down within the hero. Desk uses two columns and a `calc(100% - 24px)` width. Catalogue, care, arrival, FAQ and contact become one column; room photos are 370px. Sections use 45px padding. Booking summary follows the form; dialog width `calc(100% - 20px)`, maximum height 94dvh, sticky bottom form actions. |
| ≤359px | Brand icon hidden; hero heading 42px; room photos 325px; smaller gaps and action labels keep the narrow layout usable. |

Desktop hero outer padding is 20px 24px 0, stage maximum width 1680px, height `clamp(520px, 42vw, 680px)`. The reservation desk overlaps by 48px, reducing to 42px at ≤850px and 34px at ≤600px. Desktop room-detail dialogs use `.9fr 1.1fr`; booking dialogs use content plus a 290px summary. Dialogs default to a maximum height of 90dvh and width `min(1080px, calc(100% - 40px))`.

## Elevation & Depth

Coloured chapters and photographic crops provide most depth. The white reservation desk has a restrained structural shadow; dialogs use stronger elevation and a dark blurred backdrop. Room catalogue bodies stay open against the clay chapter rather than becoming separate raised cards.

- Reservation desk: `0 12px 40px #48283213`; mobile: `0 8px 26px #48283213`.
- Dialog: `0 30px 100px #251c2340`; backdrop `#2c211db0` with `blur(5px)`.
- Selected booking room: `0 0 0 1px var(--rust)` alongside the rust border.
- Desktop hero text shading uses a horizontal dark-to-transparent gradient; mobile uses a plum-to-transparent vertical gradient, keeping the heading above the lower film crop.

**The Purposeful Depth Rule.** Use elevation to clarify the reservation desk, modal layer and selected room; retain open catalogue text and stationary cards.

## Shapes

Rounded rectangles repeat across controls and media: buttons 14px, photographs and desktop reservation desk 20px, desktop hero 28px and dialogs 24px. Form fields use 10px corners; booking room choices use 14px. At ≤600px the hero becomes 20px and desk/dialog 16px. Gallery controls, close buttons and booking progress markers are circular. Keep the original paw brand icon and native paw cursor; the current direction does not call for decorative sticker badges.

## Components

**Buttons and text actions.** Primary buttons use rust with white text, 16px 22px padding, minimum height 48px and a 22px icon gap. Hover changes to deep rust over .18s. Light buttons invert to warm white/rust and hover to peach/plum. Text actions use a fine underline, 7px vertical padding and minimum height 36px; room-card and booking back actions remove the underline. Smaller variants are defined per context rather than through a new universal scale. Focus is 3px with 5px offset. There is no separate authored pressed transform.

**Navigation and footer.** The sticky warm-white header has a fine bottom rule, paw lockup, centred links and a booking action. The mobile menu button exposes its expanded state and switches its accessible label. Footer content groups the lockup, hotel line and social/contact links above a divider, licence, privacy link and preview label; mobile stacks the links and wraps the bottom row.

**Room catalogue and filters.** Three columns pair portrait interiors with title, daily starting rate, guest capacity, features, photo/details actions and room-specific booking. Rounded filter buttons sit inside a clay tray; the active filter is white with rust text and `aria-pressed=true`. Room image hover darkens the image to brightness(.94) over .2s, with no lift. Gallery and close controls have 44px hit areas. Gallery controls expose multiple real photographs; the active number uses rust/white. Room facts and provenance remain in the product/source records.

**Reservation desk.** Date and guest controls sit directly beneath the film in a white overlapping surface. Desktop fields use thin vertical dividers; mobile uses two columns, lower input rules and a visible action. The earlier “Going somewhere?” eyebrow is absent. The desk opens the working preview with selected dates and guest count.

**Inputs and room choices.** Dialog fields use white fill, line borders, 11px padding and a 43px minimum height. Selected room choices receive the rust border and ring. Capacity-ineligible choices are disabled and faded to .45; the UI explicitly distinguishes guest capacity from live availability. Payment choices are preview radios only. Validation errors appear in a `role=alert` region; no live card-entry or banking form exists.

**Booking dialog.** Dates/room, guest details, review/payment and completion are distinct states. The current step has a rust marker and `aria-current=step`; completed markers contain an inline SVG check. Back uses the shared SVG arrow rotated 180 degrees. Continue, Back and Edit details reset dialog scroll and focus the new heading with `preventScroll`; date, guest-count and room changes update the existing form controls and estimate in place. Keeping controls mounted prevents a date blur from swallowing a pending click. Preview notices, estimates, consent and completion wording consistently state that nothing is booked or charged.

**FAQ.** Native details/summary rows use dividing lines and a plus icon that rotates 45 degrees when open. Keep keyboard focus visible and the native disclosure semantics.

**Desktop paw cursor.** Reuse the original grey paw with pink pads from the hotel's existing header. `public/cursors/original-paw.png` preserves the 150px source artwork for the header/footer; `public/cursors/paw.png` is its proportional 32px cursor export. Only `(hover: hover) and (pointer: fine)` receives the custom cursor, with hotspot 19 7 at the upper paw tip. The same image and hotspot apply to page and actions, with `auto` and `pointer` fallbacks respectively. Editable text inputs retain a text cursor; disabled controls and room labels use `not-allowed`. Coarse/touch devices retain platform behaviour. No cursor follower or trailing animation. See `docs/MEDIA.md` for provenance.

**Atmosphere film and motion.** The existing 7.5-second AI-created silent loop remains visibly disclosed. A poster and Play/Pause/Retry control are present. At first source assignment, ≤600px selects the 960×540 encode; larger screens select 1920×1080. The source is assigned only when playback is requested and the film is visible. Playback pauses offscreen, in a hidden document or while a dialog is open. Reduced-motion/data-saving preferences start with the poster; explicit Play is available. Preference changes toward reduced motion or data saving stop requested playback. Reduced motion also disables CSS transitions/animations and switches smooth scrolling to auto. Film source, mobile encode and offscreen pause have prior handoff evidence; reduced-motion/data-saving runtime emulation remains unverified, with behaviour reviewed from source only. See `docs/REDESIGN-HANDOFF.md` and `docs/MEDIA.md` for verification limits and provenance.

## Do's and Don'ts

### Do:

- **Do** use Gabarito, Albert Sans, warm white, plum, rust and clay as the current implemented identity.
- **Do** keep actual room photographs, capacity and rates prominent and close together.
- **Do** preserve visible focus, native controls, film controls and fine-pointer-only paw cursors.
- **Do** keep AI atmosphere footage distinct from actual room photography.
- **Do** retain explicit preview notices throughout booking and payment states.

### Don't:

- **Don't** restore the superseded sparse Newsreader/DM Sans aesthetic.
- **Don't** add decorative sticker badges, cursor followers or trailing animations.
- **Don't** turn the open catalogue into floating cards or add hover lifts and scroll reveals.
- **Don't** invent reviews, live availability, reservation success or payment collection.
- **Don't** describe source-reviewed preference behaviour as runtime verified.

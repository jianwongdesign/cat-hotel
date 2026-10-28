---
name: Little Pawcious
description: Cosy, understated boutique cat hotel design preview.
colors:
  cream: "#f8f5ee"
  paper: "#fffdf8"
  ink: "#382c28"
  muted: "#70645b"
  rust: "#a84e39"
  rust-dark: "#873b2b"
  line: "#dcd3c6"
  blush: "#eee3d6"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(48px, 5.1vw, 78px)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(42px, 4.4vw, 65px)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.35
  field-label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 500
rounded:
  button: "3px"
  field: "5px"
  room-option: "7px"
  dialog: "15px"
  dialog-mobile: "6px"
spacing:
  section: "105px"
  section-tablet: "75px"
  section-mobile: "60px"
  field-padding: "11px"
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
  form-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "{spacing.field-padding}"
  room-option:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.room-option}"
    padding: "12px"
---

# Design System: Little Pawcious

## Overview

**Creative North Star: "A cosy, understated boutique hotel"**

Preserve the confirmed cream and terracotta identity, restrained Newsreader display type, clear DM Sans text and generous open layouts. Real room photographs carry the catalogue; one calm lounge film supplies atmosphere. The remaining paw mark belongs to the brand lockup, not decorative stamps.

This is a source-derived record of the current design preview, captured 28 October 2026 from `src/styles.css`, `src/app.js` and `src/video.js`. Reservations, availability and payments are not live. Direction is recorded in `.impeccable/direction.md`; production gates and asset provenance remain in `docs/DESIGN-HANDOFF.md` and `docs/MEDIA.md`.

**Key Characteristics:**

- Warm, quiet surfaces with dark brown text and terracotta actions.
- Rectangular photography, open room rows and fine dividing rules.
- Serif headings paired with small, legible task labels.
- A single controlled atmosphere film and explicit preview notices.

## Colors

The root palette above is normative; token names retain the implementation's naming.

**Primary:** Rust is the action, selection and contact-section color; rust-dark is the primary-button hover. Cream becomes the text and keyboard-focus color on the rust contact surface.

**Neutral:** Cream is the page and dialog canvas, paper the field and option surface, ink the principal text, muted the supporting text, line the borders, and blush the room-image fallback. Additional local surfaces remain deliberately local: care section (`#eee7dc`), booking summary (`#ede5d9`), and review/success summary (`#eee6da`). Validation uses red (`#a32b1b`); completion uses a muted green icon (`#596944`) on pale green (`#e2e7d5`). These are status treatments, not new brand accents.

**The Contrast Rule.** Keep the global rust focus outline on pale surfaces and the cream override on the rust contact section.

## Typography

Newsreader and DM Sans are self-hosted WOFF2 fonts, with bundled SIL Open Font Licenses. Newsreader loads weights 400–500; DM Sans loads 400–700. The frontmatter records base roles, not a fabricated modular scale.

Hero and section headings use the display and headline roles. Room names are a local title variant (36px desktop, 32px at 850px, 33px at 600px). Body defaults are overridden by 14px/1.8 introductory and room copy; room descriptions stop at 430px and care copy at 440px. Navigation is 12px; labels and supporting notes commonly use 10–13px. The brand is serif (29px), with a small tracked sans-serif location line (8px, 0.15em).

The hero becomes 52px at 850px, then `clamp(43px, 11.6vw, 68px)` with line-height 1.08 at 600px. Section headings become 43px at 600px. At 1700px and above the hero is 87px. Room prices use Newsreader (29px), lining and tabular numerals; they become 27px on mobile.

## Layout

The default container is `min(1320px, calc(100% - 112px))`. Sections use the frontmatter's section spacing. The header is sticky with a bottom rule; its navigation row is 91px high. The hero has a heading/copy split above a 16:9 film. The booking strip has a caption and four-column form (`1fr 1fr .8fr auto`).

Room catalogue rows pair equally sized image and text columns with a 58px gap, 42px bottom padding and a dividing rule; images are 370px tall. Care uses `1fr .9fr` with a 120px gap. Stay, FAQ and contact use equal columns with a 70px gap. Desktop dialogs are at most 1080px wide and 90dvh high; booking uses a flexible form plus a 290px summary with a 30px gap.

| Media query | Implemented response |
| --- | --- |
| `min-width: 1700px` | Container becomes `min(1440px, calc(100% - 180px))`; hero top padding 70px; room images 410px tall. |
| `max-width: 1100px` | Container has 32px side gutters; booking caption hides; room gap 35px and image height 350px. |
| `max-width: 850px` | Header row 80px; navigation becomes a toggled dropdown; sections 75px; room gap 30px and image height 330px; booking summary width 225px. |
| `max-width: 600px` | Container has 20px side gutters; header row 74px; hero stacks and film bleeds to viewport edges; booking strip becomes two columns; sections 60px. Room, care, stay, FAQ and contact stack; room images are 310px tall. Dialogs become viewport width minus 20px, at most 94dvh; booking summary follows the form and actions are sticky at the bottom. |
| `max-width: 359px` | Brand icon hides, brand shrinks to 21px; room heading/rate stack; room images are 280px tall; booking progress tightens. |

Anchor scroll clearance is 110px, reduced to 90px on mobile. No viewport class is inferred from device names alone; preserve the actual inclusive media queries.

## Elevation & Depth

The homepage uses tonal sections, photography and fine borders rather than raised cards. The only ambient surface shadow belongs to dialogs (`0 30px 100px #251c2340`), over a dark backdrop (`#2c211db0`) with 5px blur. Selected room options use a precise 1px rust ring (`0 0 0 1px var(--rust)`), not a lift.

**The Quiet Surface Rule.** Keep room catalogue rows unboxed and stationary; reserve elevation for modal separation and selection feedback.

## Shapes

Photography and catalogue rows are rectangular. Buttons and form fields use the small corners in frontmatter; dialogs use a softer corner that tightens on mobile. Room-option thumbnails use 4px corners. Film controls use 2px corners; close, gallery and progress controls are circular. Borders are generally 1px; active room filters use a 2px underline. These functional circles do not reinstate ornamental stamps or arches.

## Components

**Buttons and links.** Primary buttons use a rust border and fill, paper text, a 24px internal gap and 18px icons; hover darkens the fill and border with a 0.18s background transition. Light contact buttons use cream with rust text and a local warm hover (`#ebd9c4`). Text actions have an underline, no fill, 5px vertical padding and a 22px gap; hover turns rust. The contact address links retain cream on hover. Compact variants use smaller typography/padding as implemented.

**Keyboard focus.** Buttons, links, inputs, selects, textareas and summaries use a 2px solid rust outline with 5px offset. Contact buttons/links override the outline to cream. The skip link appears at the top on focus. Preserve these rings in component snippets and future edits.

**Fields and options.** Quick-book controls are transparent with a bottom rule (`#b8aa98`), square corners and 8px vertical padding. Dialog fields use paper, a line border, the field radius/padding, 12px text and a minimum height of 43px. Radios and checkboxes are 16px with rust accent. Selected room options gain a rust border and ring; over-capacity options are disabled, 45% opaque and use the not-allowed cursor. Form errors appear in a `role="alert"` message. Inputs retain native browser date/select behavior.

**Navigation and filters.** Desktop navigation is a centered text row. At 850px and below, the menu button toggles a cream dropdown and updates its expanded state. Room filters are plain text buttons, with rust text and an underline for the active choice and `aria-pressed` state; they are not chips. FAQ uses native details/summary with a plus that rotates 45 degrees when open.

**Room catalogue and dialogs.** Real images open a two-image room dialog. A cream action label sits at the bottom right of each catalogue photo; descriptions, capacities and starting rates sit openly beside it. Booking retains distinct dates/room, guest-details, review/payment and completion screens. All payment options and totals remain visibly marked as previews.

**Atmosphere film.** The 7.5-second silent, looping film is AI-created and labelled below the player. It uses muted inline playback, a poster, and Play/Pause/Retry control. The 600px media query chooses the 960×540 mobile source; larger viewports use 1920×1080. The source is assigned only when playback is requested and the film is visible. Playback pauses offscreen, when the page is hidden or while a dialog is open. Reduced-motion/data-saving preferences start with the poster; explicit Play remains available. Reduced motion also disables CSS transitions/animations and smooth scrolling. There are no scroll reveals or hover lifts. Preference behavior is documented from source; its runtime emulation remains unverified in the handoff.

## Do's and Don'ts

- **Do** preserve cream, terracotta, Newsreader and DM Sans as the confirmed identity.
- **Do** keep room photography, factual capacity/rates and open catalogue layouts together.
- **Do** retain visible keyboard focus, motion controls and explicit preview notices.
- **Do** distinguish the AI atmosphere film from real room photographs.
- **Don't** add decorative paw stamps, stars, arches, scribbled arrows or floating callouts.
- **Don't** add scroll reveals, hover lifts or framed room cards to this refinement.
- **Don't** imply that the booking design reserves inventory or takes payment.

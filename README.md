# Little Pawcious — cat hotel website

Cat-hotel website and interactive booking prototype, based on the Little Pawcious brand and real room photography. Fully redesigned 28 October 2026 after feedback that the previous page felt too plain and empty: immersive lounge film, prominent reservation form, fuller room galleries and a desktop paw cursor.

[View the shared design preview](https://jianwongdesign.github.io/cat-hotel/) · [GitHub repository](https://github.com/jianwongdesign/cat-hotel)

## Run locally

Node.js 22 or later; no dependency installation required.

```sh
npm run dev
# http://127.0.0.1:4187
npm test
npm run build
npm run preview
```

Stop the dev server before running preview; both use port 4187. Production output is in `dist/`. Relative assets support GitHub Pages repository subpaths. Pushes to `main` run the pricing/date tests, build, and publish via GitHub Actions.

## Included

- A 7.5-second looping cat film, responsive encodes, pause control and reduced-motion poster fallback. Generation cost: 19.5 of 35 authorised credits; [media provenance](docs/MEDIA.md).
- Responsive homepage, room filtering, two-image room galleries, care and boarding sections, FAQs and contact links.
- Booking preview: dates, 1–6 guests, room capacity, guest information, price estimate, payment-method selection and preview completion.
- Native modal dialogs, keyboard navigation, reduced-motion support, noindex preview.
- Paw cursor for desktop mouse users, distinct action state and normal text-entry cursor. Touch devices keep native behavior. Responsive navigation, room galleries and booking forms.
- In-memory sample guest details only. No local storage, database, tracking, booking requests or payment requests.

## Production boundary

**This is a design preview, not a functioning reservation or payment service.** It does not reserve inventory or send emails. No payment SDK, card fields, QR code, real payment session, merchant keys or payment webhook is connected.

Before production: confirm real room-unit inventory, occupancy/size rules, billable-day calculation, peak/blackout pricing, deposits, cancellations, arrival times and add-on charges with the hotel. Connect a server-backed availability/hold/booking service and hosted checkout. Verify payment webhooks, idempotency, expiring unpaid holds, concurrency, receipts and booking confirmations before enabling real bookings. Choose the final architecture after confirming whether to integrate the current WordPress booking system or replace it.

Current redesign and verification: [docs/REDESIGN-HANDOFF.md](docs/REDESIGN-HANDOFF.md). Original source mapping, pricing assumptions and production gates: [docs/DESIGN-HANDOFF.md](docs/DESIGN-HANDOFF.md).

# One-week client review access

Configured 28 October 2026 at the user's request.

- Expiry: **4 November 2026, 4:45 pm SGT** (`2026-11-04T08:45:04Z`).
- Source of truth: `src/preview-config.js`.
- `src/preview.js` checks expiry before loading the app, updates the visible remaining-time label, replaces an already-open page when the deadline arrives, and rechecks when the tab becomes visible.
- The Pages workflow is scheduled at 08:46 UTC on 4 November. After expiry, `scripts/build.mjs` publishes only a standalone expiry page, 404 page, robots file and .nojekyll. It omits all app code, photographs, fonts and video. GitHub scheduling/deployment can be delayed; the browser gate applies the configured deadline using the visitor's clock. Cron has no year field and repeats annually unless removed.
- To renew, update the expiry configuration and scheduled trigger, then redeploy. Preserve the expiry-page-only build after the deadline.

## Casual-copy deterrents

Right-click context menus, page copy/cut/select-all shortcuts, Save Page and View Source shortcuts, image/link dragging and ordinary text selection are blocked. Booking text inputs retain normal editing and clipboard behaviour; the right-click menu is still suppressed. A short notice explains blocked actions. No DevTools trapping, focus stealing or clipboard data is read.

These are deterrents, not DRM. Screenshots, developer tools, direct downloads, copied files and previously cached assets cannot be revoked. **The GitHub repository is public**, so removing assets from Pages does not remove the repository or Git history. Real confidentiality requires private source and authenticated hosting; neither was silently changed here.

## Verification

Six tests cover booking calculations, the exact expiry boundary, nonnegative countdowns and an expired build that contains no website assets. Manual browser checks cover contextmenu/copy handling, normal booking editing and an isolated past-expiry runtime fixture, plus a 15-second active-to-expired test that removed the app, video and dialogs from an already-open page. Test fixtures under `.cache/qa/` are ignored and not deployed.

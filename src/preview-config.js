export const PREVIEW_EXPIRES_AT = '2026-11-04T08:45:04Z';
export const PREVIEW_EXPIRY_LABEL = '4 Nov 2026, 4:45 pm SGT';
export const previewHasExpired = (now = Date.now()) => now >= Date.parse(PREVIEW_EXPIRES_AT);
export function previewTimeLeft(now = Date.now()) {
 const minutes = Math.max(0, Math.ceil((Date.parse(PREVIEW_EXPIRES_AT) - now) / 60000));
 const days = Math.floor(minutes / 1440), hours = Math.floor(minutes % 1440 / 60);
 return days ? `${days}d ${hours}h remaining` : hours ? `${hours}h ${minutes % 60}m remaining` : `${minutes}m remaining`;
}
export const expiredMarkup = `<style>html{background:#fffaf4}body{margin:0;color:#3b262b;font:16px/1.6 system-ui,sans-serif;min-height:100dvh;display:grid;place-items:center}.preview-ended{box-sizing:border-box;width:min(560px,100%);padding:40px 28px}.preview-ended p{color:#756368}.preview-ended h1{font-size:clamp(30px,6vw,42px);line-height:1.15;letter-spacing:-.035em;margin:24px 0 18px}.preview-ended .preview-brand{font-weight:700;color:#9e403b}</style><main class="preview-ended"><div class="preview-brand">Little Pawcious · Website preview</div><h1>This design preview has expired.</h1><p>Please contact the team who shared this link to arrange renewed access.</p></main>`;
export const expiredPage = () => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Preview expired — Little Pawcious</title></head><body>${expiredMarkup}</body></html>`;

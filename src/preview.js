import { PREVIEW_EXPIRES_AT, PREVIEW_EXPIRY_LABEL, previewHasExpired, previewTimeLeft, expiredMarkup } from './preview-config.js';
let expired = false, expiryTimer, noticeTimer;
const editable = target => target instanceof Element && !!target.closest('input,textarea,[contenteditable="true"]');
function copyNotice() {
 let notice = document.querySelector('#copy-notice');
 if (!notice) {
  notice = document.createElement('div');
  notice.id = 'copy-notice'; notice.setAttribute('role','status');

 }
 (document.querySelector('dialog[open]') || document.body).append(notice);
 notice.textContent = 'Copying is disabled for this design preview.';
 clearTimeout(noticeTimer);
 noticeTimer = setTimeout(() => notice.remove(), 2500);
}
function block(event) { event.preventDefault(); copyNotice(); }
document.addEventListener('contextmenu', block, true);
document.addEventListener('copy', event => { if (!editable(event.target)) block(event); }, true);
document.addEventListener('cut', event => { if (!editable(event.target)) block(event); }, true);
document.addEventListener('dragstart', event => { if (!editable(event.target)) event.preventDefault(); }, true);
document.addEventListener('keydown', event => {
 if (!(event.ctrlKey || event.metaKey)) return;
 const key = event.key.toLowerCase();
 if (['s','u'].includes(key) || (!editable(event.target) && ['a','c','x'].includes(key))) block(event);
}, true);
function showExpired() {
 if (expired) return;
 expired = true; clearTimeout(expiryTimer);
 document.querySelectorAll('video').forEach(video => video.pause());
 document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close());
 document.body.classList.remove('modal-open');
 document.title = 'Preview expired — Little Pawcious';
 document.body.innerHTML = expiredMarkup;
}
function checkAccess() {
 clearTimeout(expiryTimer);
 if (previewHasExpired()) { showExpired(); return; }
 const timer = document.querySelector('[data-preview-countdown]');
 if (timer) { timer.textContent = `Preview access: ${previewTimeLeft()}`; timer.title = `Access ends ${PREVIEW_EXPIRY_LABEL}`; }
 expiryTimer = setTimeout(checkAccess, Math.min(60000, Date.parse(PREVIEW_EXPIRES_AT) - Date.now()));
}
document.addEventListener('visibilitychange', checkAccess);
if (previewHasExpired()) showExpired();
else {
 await import('./app.js?v=review-week');
 document.querySelectorAll('img,video').forEach(media => media.draggable = false);
 checkAccess();
}

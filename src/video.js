// The lounge film is the page's only ambient motion. Consent to play is reversible.
export function initHotelFilm(icon) {
  const video = document.querySelector('#hotel-video');
  const toggle = document.querySelector('#film-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const connection = navigator.connection;
  let requested = !reduced.matches && !connection?.saveData;
  let visible = false;
  let failed = false;
  let loaded = false;
  function label() {
    const playing = !video.paused;
    toggle.innerHTML = `${icon(playing ? 'pause' : 'play')}<span>${failed ? 'Retry film' : playing ? 'Pause film' : 'Play film'}</span>`;
    toggle.setAttribute('aria-label', failed ? 'Retry hotel film' : playing ? 'Pause hotel film' : 'Play hotel film');
  }
  function sync() {
    const canPlay = requested && visible && !document.hidden && !document.querySelector('dialog[open]');
    if (!canPlay) { video.pause(); return; }
    if (!loaded) {
      video.src = matchMedia('(max-width: 600px)').matches
        ? './public/video/hotel-loop-mobile.mp4' : './public/video/hotel-loop.mp4';
      video.muted = true;
      loaded = true;
    }
    video.play().catch(error => {
      // A visibility/dialog pause can interrupt an in-flight play request.
      if (error.name !== 'AbortError') requested = false;
      label();
    });
  }
  toggle.addEventListener('click', () => {
    requested = video.paused;
    if (failed) { failed = false; video.load(); }
    sync();
  });
  video.addEventListener('play', label);
  video.addEventListener('pause', label);
  video.addEventListener('error', () => { failed = true; requested = false; label(); });
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting; sync();
  }, { threshold: 0.1 });
  observer.observe(video);
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', () => { if (reduced.matches) requested = false; sync(); });
  connection?.addEventListener('change', () => { if (connection.saveData) requested = false; sync(); });
  new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  label();
}

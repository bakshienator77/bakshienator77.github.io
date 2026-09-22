// Links remain ordinary YouTube links when JavaScript is unavailable.
document.querySelectorAll('[data-video]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${link.dataset.video}?autoplay=1`;
    frame.title = link.dataset.title;
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    link.closest('.research-row').classList.add('video-playing');
    link.replaceWith(frame);
    frame.focus();
  });
});

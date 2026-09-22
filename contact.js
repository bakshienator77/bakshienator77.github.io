// Obfuscation for simple HTML scrapers, not a security boundary.
// The LinkedIn links remain usable if JavaScript is disabled.
const address = atob('bmlraGlsYW5nYWRiYWtzaGlAZ21haWwuY29t');
document.querySelectorAll('[data-email]').forEach((link) => {
  link.href = `mailto:${address}`;
  if (link.dataset.email === 'address') link.textContent = address;
});

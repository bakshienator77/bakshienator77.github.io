// Obfuscation deters simple HTML scrapers; it is not a security boundary.
const address = atob('bmlraGlsYW5nYWRiYWtzaGlAZ21haWwuY29t');
const emailText = document.getElementById('email-address');
const revealButton = document.getElementById('unscramble-email');

function scramble(value) {
  const letters = [...value];
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.join('');
}

emailText.textContent = scramble(address);
revealButton.hidden = false;
revealButton.addEventListener('click', () => {
  revealButton.hidden = true;
  const finish = () => {
    emailText.textContent = address;
    emailText.tabIndex = -1;
    emailText.focus({ preventScroll: true });
  };
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finish();
    return;
  }
  let revealed = 0;
  const animation = setInterval(() => {
    revealed += 2;
    if (revealed >= address.length) {
      clearInterval(animation);
      finish();
    } else {
      emailText.textContent = address.slice(0, revealed) + scramble(address.slice(revealed));
    }
  }, 40);
}, { once: true });

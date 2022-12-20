const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  // store the triggered events
  window.deferredPrompt = event;

  // Remove the hidden class from the install button
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener(`click`, async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }

  // Show the install prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable; it can only be used once
  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});

butInstall.addEventListener('click', async () => {});

window.addEventListener('appinstalled', (event) => {
  // clear prompt
  console.log(`install hit`);
  window.deferredPrompt = null;
});

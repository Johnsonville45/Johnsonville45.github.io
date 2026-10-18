// Pahe Plus content script
// This file is intended to integrate with the target page and initialize the player experience.

(() => {
  const isSupportedPage = () => {
    const body = document.body;
    return !!(body && document.location.href);
  };

  if (!isSupportedPage()) {
    return;
  }

  console.log('Pahe Plus content script loaded');

  const root = document.createElement('div');
  root.className = 'pahe-plus-root';
  root.setAttribute('data-pahe-plus', 'ready');
  document.body.appendChild(root);
})();

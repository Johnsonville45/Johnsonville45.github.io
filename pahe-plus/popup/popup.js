document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('status-button');
  if (!button) return;

  let pending = false;

  function setButton(text, disabled = false) {
    button.textContent = text;
    button.disabled = disabled;
  }

  async function sendMessage(message) {
    const browserApi = (typeof browser !== 'undefined') ? browser : chrome;

    // Some implementations return a Promise from runtime.sendMessage (browser/Firefox).
    // Try that first; otherwise fall back to the callback-style API used in Chrome.
    try {
      const maybePromise = browserApi.runtime.sendMessage(message);
      if (maybePromise && typeof maybePromise.then === 'function') {
        return await maybePromise;
      }
    } catch (e) {
      // If the call threw synchronously, fall back to callback-style below.
    }

    return new Promise((resolve, reject) => {
      try {
        browserApi.runtime.sendMessage(message, (response) => {
          if (browserApi.runtime && browserApi.runtime.lastError) {
            reject(browserApi.runtime.lastError);
            return;
          }
          resolve(response);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  button.addEventListener('click', async () => {
    if (pending) return; // prevent repeated clicks
    pending = true;
    setButton('Checking...', true);

    try {
      const response = await sendMessage({ type: 'PING' });
      if (response && response.ok) {
        setButton('Pahe Plus active', false);
      } else {
        setButton('Status unknown', false);
      }
    } catch (error) {
      console.error('Pahe Plus popup error contacting background:', error);
      setButton('Background unavailable', false);
    } finally {
      pending = false;
    }
  });
});

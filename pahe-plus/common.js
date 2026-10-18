// Shared browser utilities for Pahe Plus.

function getBrowser() {
  return typeof browser !== 'undefined' ? browser : chrome;
}

function sendMessageToBackground(message) {
  return new Promise((resolve, reject) => {
    const browserApi = getBrowser();
    browserApi.runtime.sendMessage(message, (response) => {
      if (browserApi.runtime.lastError) {
        reject(browserApi.runtime.lastError);
        return;
      }
      resolve(response || { ok: true });
    });
  });
}

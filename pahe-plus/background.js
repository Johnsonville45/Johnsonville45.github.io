// Pahe Plus background script
// Initial scaffold for the extension lifecycle and messaging flow.

chrome.runtime.onInstalled.addListener(() => {
  console.log('Pahe Plus installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message && message.type === 'PING') {
    sendResponse({ ok: true, message: 'Pahe Plus background ready' });
    return true;
  }

  return false;
});

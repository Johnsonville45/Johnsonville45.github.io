document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('status-button');

  if (!button) return;

  button.addEventListener('click', async () => {
    try {
      const response = await chrome.runtime.sendMessage({ type: 'PING' });
      button.textContent = response && response.ok ? 'Pahe Plus active' : 'Status unknown';
    } catch (error) {
      button.textContent = 'Background unavailable';
      console.error(error);
    }
  });
});

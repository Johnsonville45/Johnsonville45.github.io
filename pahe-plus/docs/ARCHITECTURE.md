# Architecture

## Purpose

Pahe Plus is built as a browser-extension project with a content script that runs on supported pages and a popup for user interaction. The project separates browser-specific configuration from the base manifest and common logic.

## Component layout

- `background.js` – handles runtime messages and lifecycle events.
- `common.js` – shared helpers for browser compatibility.
- `content/main.js` – content script that loads into the page and initializes the feature.
- `content/main.css` – styling for injected UI.
- `content/player.js` – player logic and additional behaviors.
- `popup/popup.html` and `popup/popup.js` – extension popup UI.

## Browser builds

The repository contains separate build folders for Chromium and Firefox, allowing browser-specific packaging without altering the shared source tree.

## Security considerations

Before production deployment, verify the required permissions and confirm the extension does not request unnecessary privileges.

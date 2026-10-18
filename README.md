Pahe Plus

Version: 0.2.0
Project: Pahe Plus Browser Extension
Repository: Johnsonville45/Johnsonville45.github.io
Project directory: "pahe-plus/"

Overview

Pahe Plus is a browser-extension project with separate Chromium and Firefox builds.

Project Structure

pahe-plus/
├── README.md
├── PRIVACY.md
├── manifest.json
├── manifest.chromium.json
├── background.js
├── common.js
├── content/
│   ├── main.js
│   ├── main.css
│   └── player.js
├── popup/
│   ├── popup.html
│   └── popup.js
├── docs/
│   ├── ARCHITECTURE.md
│   ├── FEATURES.md
│   ├── PERMISSIONS.md
│   └── USAGE.md
├── builds/
│   ├── chromium/
│   └── firefox/
└── releases/
    ├── Pahe-Plus-Chromium-v0.2.0.zip
    ├── Pahe-Plus-Firefox-v0.2.0.zip
    └── pahe-plus-source-v0.2.0.zip

File Descriptions

Filename| Description
"README.md"| Project overview and instructions
"PRIVACY.md"| Privacy information
"manifest.json"| Extension configuration and permissions
"manifest.chromium.json"| Chromium-specific configuration
"background.js"| Background extension functionality
"common.js"| Shared JavaScript functions
"content/main.js"| Main website integration script
"content/main.css"| Website styling
"content/player.js"| Player-related functionality
"popup/popup.html"| Extension popup interface
"popup/popup.js"| Popup interactions
"docs/ARCHITECTURE.md"| Architecture documentation
"docs/FEATURES.md"| Feature documentation
"docs/PERMISSIONS.md"| Permission explanations
"docs/USAGE.md"| Usage instructions
"builds/chromium/"| Chromium build files
"builds/firefox/"| Firefox build files
"releases/"| Packaged ZIP releases

Installation and Upload

1. Download the Pahe Plus project ZIP.

2. Extract the archive.

3. Open the GitHub repository.

4. Create or open the "pahe-plus/" directory.

5. Upload the project files while preserving their directory structure.

6. Commit the changes with the message:
   
   "Add Pahe Plus browser extension v0.2.0"

Browser Builds

- Chromium: "builds/chromium/"
- Firefox: "builds/firefox/"

Release Packages

- "Pahe-Plus-Chromium-v0.2.0.zip"
- "Pahe-Plus-Firefox-v0.2.0.zip"
- "pahe-plus-source-v0.2.0.zip"

Testing Status

This is an early development build. The extension has not been fully tested against the live website in a browser. Review the requested permissions and test the extension before relying on it.

Repository Destination

The intended project directory is:

"Johnsonville45.github.io/pahe-plus/"

Existing website files should remain unchanged.

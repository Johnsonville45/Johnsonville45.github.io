# Pahe Plus

Version: 0.2.0

Pahe Plus is a browser extension project for separate Chromium and Firefox builds. This repository folder contains the extension source scaffold and documentation for the initial 0.2.0 release.

## Project

- Project: Pahe Plus Browser Extension
- Repository: Johnsonville45/Johnsonville45.github.io
- Project directory: `pahe-plus/`

## Overview

This folder is intended to hold the browser extension files without modifying the existing website content in the root of the GitHub Pages site.

## Structure

- `manifest.json` – base extension manifest
- `manifest.chromium.json` – Chromium-specific override
- `background.js` – background page logic
- `common.js` – shared browser logic
- `content/` – website integration scripts and styling
- `popup/` – extension popup interface
- `docs/` – architecture, features, permissions, and usage notes
- `builds/` – build output folders for Chromium and Firefox
- `releases/` – packaged release artifacts

## Notes

This is an early development build. Review permissions and validate the extension in a browser before depending on it in production.

## Commit message

`Add Pahe Plus browser extension v0.2.0`

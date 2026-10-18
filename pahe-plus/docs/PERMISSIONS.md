# Permissions

Pahe Plus may require permission to interact with the active tab and inject scripts into pages. The permissions should remain minimal and only match the features that are needed.

## Default permissions

- `activeTab` – access the current tab when the user invokes the extension.
- `storage` – store extension state or preferences.
- `scripting` – inject code into documents when necessary.

## Host access

The extension may use `<all_urls>` while under early development. Reduce host permissions to specific sites when the extension reaches production readiness.

## Review checklist

- Confirm that every requested permission is required.
- Remove unused or debug permissions before release.
- Validate that the extension does not overreach into unrelated pages.

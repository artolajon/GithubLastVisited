# GitHub Last Visited

GitHub Last Visited is a lightweight browser extension (Chrome / Edge / Chromium-based browsers) that displays a list of your most recently visited GitHub repositories directly on your GitHub dashboard.

It helps you quickly return to projects you were recently working on without searching or checking browser history.

---

## Features

- Tracks recently visited repositories
- Displays a list on your GitHub homepage
- Configurable settings:
  - Set maximum number of repositories to store/display
  - Optional owner/organization filtering
- No login required
- No external database
- 100% local storage; all data stays in your browser

---

## Installation (Developer Mode)

1. Clone the repository.
2. Open your browser extensions page:
   - Chrome: chrome://extensions/
   - Edge: edge://extensions/
3. Enable Developer mode.
4. Click "Load unpacked".
5. Select the cloned repository folder.

---

## How It Works

### Repository Tracking

When you visit a GitHub repository page:

- The extension detects the repository URL.
- It saves the repository path locally.
- Duplicate entries are removed.
- The list is trimmed to your configured maximum.

### Dashboard Injection

When you visit the GitHub homepage:

- The extension retrieves your stored repository list.
- It injects a container into the dashboard.
- Your recent repositories appear as clickable links.

---

## Configuration

Click the extension icon to configure:

- Maximum number of repositories.
- Owner filter (comma-separated usernames/organizations).

Settings are stored using the browser sync storage API.

---

## Permissions

The extension requires:

- activeTab
- scripting
- storage
- Host permission for https://github.com/*

These permissions are used only to:

- Detect GitHub pages.
- Store local configuration.
- Inject the recent repositories UI.

---

## Technical Details

- Manifest V3
- JavaScript and HTML
- Uses browser storage APIs
- No external dependencies

---

## Limitations

- Works only on GitHub pages.
- Clearing browser storage removes saved history.
- Settings sync depends on browser support.

---

## License

This project is licensed under the MIT License.
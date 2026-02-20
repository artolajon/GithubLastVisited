document.addEventListener('DOMContentLoaded', restoreSettings);
document.getElementById('save').addEventListener('click', saveSettings);

function saveSettings() {
  const max = parseInt(document.getElementById('maxRepos').value, 10) || 10;
  const filter = document.getElementById('filter').value;
  try {
    chrome.storage.sync.set({ maxRepos: max, filter: filter }, () => {
        const status = document.getElementById('status');
        status.textContent = 'Saved.';
        setTimeout(() => (status.textContent = ''), 1200);
    });
  } catch (e) {
    // chrome.storage not available or error occurred
  }
}

function restoreSettings() {
    try{
        chrome.storage.sync.get({ maxRepos: 10, filter: '' }, (items) => {
            document.getElementById('maxRepos').value = items.maxRepos;
            document.getElementById('filter').value = items.filter;
        });
    } catch (e) {
        // chrome.storage not available or error occurred
    }
}

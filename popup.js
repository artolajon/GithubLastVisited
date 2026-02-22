document.addEventListener('DOMContentLoaded', restoreSettings);
document.getElementById('save').addEventListener('click', saveSettings);

function saveSettings() {
  const max = parseInt(document.getElementById('maxRepos').value, 10) || 10;
  let filter = document.getElementById('filter').value;
  if (filter){
    filter = filter.replace(/[\s\t\n;]/g, ',').split(',').map(f => f.trim()).filter(f => f).join(',');
  }
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
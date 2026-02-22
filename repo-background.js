let REPO_LIMIT = 10;
let FILTER = [];

async function applyConfig() {
  try {
    const { maxRepos, filter } = await chrome.storage.sync.get({ maxRepos: 10, filter: '' });
    REPO_LIMIT = maxRepos;
    FILTER = filter ? filter.split(',').map(f => f.trim()) : [];
  } catch (e) {
    // chrome.storage not available or error occurred
  }
}

const getCleanPath = () => {
  const match = window.location.pathname.match(/^\/[^/]+\/[^/]+/);
  return match ? match[0] : null;
}

(async () => {
  await applyConfig();
  
  const currentPath = getCleanPath();
  if (!currentPath) return;
  
  let lastRepos = JSON.parse(localStorage.getItem("lastRepos") || "[]");
  if (FILTER.length > 0) {
    const [owner] = currentPath.split('/').slice(1);
    if (!FILTER.includes(owner)) {
      return;
    }
  }
  
  lastRepos = lastRepos.filter(repo => repo !== currentPath);
  lastRepos.unshift(currentPath);
  if (lastRepos.length > REPO_LIMIT) lastRepos.splice(REPO_LIMIT);

  localStorage.setItem("lastRepos", JSON.stringify(lastRepos));
})();
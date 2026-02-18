const REPO_LIMIT = 10;

const getCleanPath = () => {
  const match = window.location.pathname.match(/^\/[^/]+\/[^/]+/);
  return match ? match[0] : null;
}

let currentPath = getCleanPath();
if (currentPath){
    let lastRepos = JSON.parse(localStorage.getItem("lastRepos") || "[]");
    
    lastRepos = lastRepos.filter(repo => repo !== currentPath);
    lastRepos.unshift(currentPath);
    if (lastRepos.length > REPO_LIMIT) lastRepos.pop();

    localStorage.setItem("lastRepos", JSON.stringify(lastRepos));
}
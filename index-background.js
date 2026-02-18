const divGen =  (titleTxt, repos) => {

  // Container
  const container = document.createElement("div");
  container.className = "js-repos-container";

  // Title
  const header = document.createElement("div");
  header.className = "hide-sm hide-md mb-1 d-flex flex-justify-between flex-items-center";

  const title = document.createElement("h2");
  title.className = "f5";

  title.appendChild(document.createTextNode(titleTxt));

  header.appendChild(title);
  container.appendChild(header);

  // List
  const ul = document.createElement("ul");
  ul.className = "list-style-none";

  repos.forEach((path) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.className = "color-fg-default lh-0 mb-2 markdown-title";
    a.href = path;
    a.setAttribute("aria-keyshortcuts", "Alt+ArrowUp");

    a.appendChild(document.createTextNode("- "+path));

    li.appendChild(a);
    ul.appendChild(li);
  });

  container.appendChild(ul);

  return container;

}
setTimeout(() => {
    let lastRepos = localStorage.getItem("lastRepos");
    if (lastRepos) {
        lastRepos = JSON.parse(lastRepos);
        const lastReposContainer = divGen("Last visited repositories", lastRepos);
        const dashboard = document.querySelector(".js-repos-container")?.parentElement;
        
        if (dashboard){
            dashboard.insertBefore(lastReposContainer, dashboard.firstChild);
        }
    }
}, 3000);
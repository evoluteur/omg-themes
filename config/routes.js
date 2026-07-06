const routes = [
  { id: "home", url: "index.html", name: "Home" },
  { id: "demos", url: "demos.html", name: "Demos" },
  { id: "ideas", url: "ideas.html", name: "Ideas" },
  // { id: "projects", url: "projects.html", name: "Projects" },
  { id: "contact", url: "contact.html", name: "Contact" },
];

let routesMap = {};
routes.forEach((r, idx) => (routesMap[r] = routes[idx]));

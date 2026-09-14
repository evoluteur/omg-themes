const themes = ["dark", "light", "evol-blue"];
const themesColors = {
  "evol-blue": "#0288d1",
  dark: "#1a212d",
  light: "#fdfdff",
};
// const densities = ["huge", "big", "medium", "small", "tiny"];
const densities = ["big", "medium", "small", "tiny"];

const setupPage = (id) => {
  // if (id === "home") {
  //   //
  //   alert("home");
  // }
  let elem;
  if (routes?.length) {
    elem = document.getElementById("omg-nav");
    if (elem) {
      const h = routes.map((r) => `<a href="${r.url}">${r.name}</a>`).join("");
      elem.innerHTML = h;
    }
  }
  const theme = localStorage.getItem("omg-theme") || "dark";
  const density = localStorage.getItem("omg-density") || "medium";
  setTheme(theme);
  renderThemePicker(theme);
  setDensity(density);
  renderDensityPicker(density);
};


const renderThemePicker = (id) => {
  elem = document.getElementById("omg-theme-picker");
  if (elem) {
    elem.innerHTML = themes
      .map(
        (t) => `
       <a class="${id === t ? "selected" : ""}" style="background-color:${
          themesColors[t]
        }" href="javascript:setTheme('${t}')" alt="${t}"></a>`
      )
      .join("");
  }
};

const renderDensityPicker = (id) => {
  elem = document.getElementById("omg-density-picker");
  if (elem) {
    elem.innerHTML =
      "Density: " +
      densities
        .map(
          (d) => `<a href="javascript:setDensity('${d}')" alt="${d}">${d}</a>`
        )
        .join("");
  }
};

const setTheme = (id) => {
  if (!id) {
    return;
  }
  let elem = document.getElementById("omg-theme-css");
  if (elem) {
    elem.setAttribute("href", `css/themes/${id}/${id}.css`);
    localStorage.setItem("omg-theme", id);
  }
};

const setDensity = (id) => {
  if (!id) {
    return;
  }
  let elem = document.getElementById("omg-body");
  if (elem) {
    elem.className = id;
    localStorage.setItem("omg-density", id);
  }
};

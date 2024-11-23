
const themeSelect = document.getElementById("theme-select");
const listStyleSelect = document.getElementById("list-style-select");
const dynamicList = document.getElementById("dynamic-list");


document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const savedListStyle = localStorage.getItem("listStyle") || "bulleted";


  applyTheme(savedTheme);
  applyListStyle(savedListStyle);

  
  themeSelect.value = savedTheme;
  listStyleSelect.value = savedListStyle;

  populateList();
});

themeSelect.addEventListener("change", () => {
  const theme = themeSelect.value;
  applyTheme(theme);
  localStorage.setItem("theme", theme);
});

listStyleSelect.addEventListener("change", () => {
  const listStyle = listStyleSelect.value;
  applyListStyle(listStyle);
  localStorage.setItem("listStyle", listStyle);
});

function applyTheme(theme) {
  document.body.className = `${theme}-theme`;
}

function applyListStyle(style) {
  dynamicList.className = style;
}

function populateList() {
  const items = [
    "Learn JavaScript",
    "Build a Website",
    "Master CSS",
    "Understand DOM Manipulation",
    "Practice Projects"
  ];

  dynamicList.innerHTML = ""; 

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    dynamicList.appendChild(li);
  });
}

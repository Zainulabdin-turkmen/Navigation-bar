const bar = document.getElementById("bar");
const linksContainer = document.querySelector(".links-container");
const closeSvg = document.querySelector(".close-svg");

bar.addEventListener("click", function () {
  linksContainer.classList.add("show");
});

closeSvg.addEventListener("click", function () {
  linksContainer.classList.remove("show");
});

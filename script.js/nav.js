const hamburgerTag = document.getElementById("hamburger");
const crossTag = document.getElementById("cross");
const menuListTag = document.getElementById("menu");

hamburgerTag.onclick = () => {
  crossTag.style.display = "block";
  hamburgerTag.style.display = "none";
  menuListTag.style.transform = "translateX(-5px)";
};

crossTag.onclick = () => {
  menuListTag.style.transform = "translateX(120px)";
  crossTag.style.display = "none";
  hamburgerTag.style.display = "block";
};

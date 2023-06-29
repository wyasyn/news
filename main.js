const BtnOpen = document.querySelector("#openMenu");
const BtnClose = document.querySelector("#closeMenu");
const navMenu = document.querySelector(".mobile-nav-menu");
const link = document.querySelectorAll(".link-item");


function openMenu() {
     navMenu.classList.add("active");
     BtnClose.style.display = "flex";
     BtnOpen.style.display = "none";
}
function closeMenu() {
    navMenu.classList.remove("active");
    BtnClose.style.display = "none";
    BtnOpen.style.display = "flex";
}

BtnOpen.onclick = openMenu;
BtnClose.onclick = closeMenu;
link.forEach(link => link.onclick = closeMenu);
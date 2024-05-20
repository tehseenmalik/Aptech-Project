const bars = document.getElementById("bars");
const close = document.getElementById("close");
const navMenu = document.getElementById("nav-menu");

if (bars) {
    bars.addEventListener("click", () => {
        navMenu.classList.add("active");
    })
}
if (close) {
    close.addEventListener("click", () => {
        navMenu.classList.remove("active");
    })
}
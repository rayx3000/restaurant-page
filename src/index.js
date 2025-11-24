import "./styles.css";
import { homePage } from "./scripts/home";
import { menuPage } from "./scripts/menu";
import { aboutPage } from "./scripts/about";
import { updateNav } from "./scripts/resize";

const content = document.getElementById("content");

content.innerHTML = homePage;


document.addEventListener("click", (e) => {

    if (e.target.id === "home") {
        content.innerHTML = homePage;
    }

    if (e.target.id === "menu") {
        content.innerHTML = menuPage;
    }

    if (e.target.id === "about") {
        content.innerHTML = aboutPage;
    }
});

document.addEventListener("DOMContentLoaded", updateNav);

window.addEventListener('resize', updateNav);

console.log("Hi");
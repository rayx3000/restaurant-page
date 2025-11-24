import "./styles.css";
import { homePage } from "./scripts/home";
import { menuPage } from "./scripts/menu";
import { aboutPage } from "./scripts/about";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

const content = document.getElementById("content");

content.innerHTML = homePage;

homeButton.addEventListener("click", () => {
    content.innerHTML = homePage;
});

menuButton.addEventListener('click', () => {
    content.innerHTML = menuPage;
});

aboutButton.addEventListener("click", () => {
    content.innerHTML = aboutPage;
});

console.log("Hi");
export const nav = document.querySelector("nav");

export const mobileMode = `
    <div class="nav-buttons">
        <button id="home">Home</button>
        <button id="menu">Menu</button>
        <button id="about">About</button>
    </div>
    <span class="material-symbols-outlined" id="toggleMenu">menu</span>
`;

export const regularMode = `
    <button id="home">Home</button>
    <button id="menu">Menu</button>
    <button id="about">About</button>
`;

export let currentView = null; 

export function toggleVisibilityOnClick(button, container) {
    if (!button || !container) return;

    container.style.display = "none";
    let isVisible = false;
    
    button.onclick = (e) => {
        e.stopPropagation();
        isVisible = !isVisible;
        container.style.display = isVisible ? "flex" : "none"; 
    };

    document.onclick = (e) => {
        if (isVisible && !container.contains(e.target) && !button.contains(e.target)) {
            isVisible = false;
            container.style.display = "none";
        }
    };
}

export const updateNav = () => {
    const isMobile = window.innerWidth < 425;
    
    if (isMobile && currentView === 'mobile') return;
    if (!isMobile && currentView === 'regular') return;

    if (isMobile) {
        currentView = 'mobile';
        nav.innerHTML = mobileMode;

        const toggleMenu = document.getElementById("toggleMenu");
        const navButtonsContainer = document.querySelector(".nav-buttons");
        
        toggleVisibilityOnClick(toggleMenu, navButtonsContainer);
    } else {
        currentView = 'regular';
        nav.innerHTML = regularMode;
    }
}

document.addEventListener("DOMContentLoaded", updateNav);

window.addEventListener('resize', updateNav);
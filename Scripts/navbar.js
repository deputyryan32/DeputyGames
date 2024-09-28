const navbarHTML = `
    <nav class="navbar">
        <a href="#" class="nav-logo">DeputyMods</a>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="index.html" class="nav-link">Home</a>
            </li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
        </div>
    </nav>
`;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close menu when a link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

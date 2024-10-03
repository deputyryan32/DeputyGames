function openNavbar() {
    document.getElementById("navbar-overlay").style.display = "block";
}

function closeNavbar() {
    document.getElementById("navbar-overlay").style.display = "none";
}

// Click event to close the navbar when clicking outside of it
window.addEventListener('click', function(event) {
    const overlay = document.getElementById("navbar-overlay");
    if (event.target === overlay) {
        closeNavbar();
    }
});

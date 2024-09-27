document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        // Highlight the active link
        const currentPage = window.location.pathname.split("/").pop(); // Get the current page
        const links = document.querySelectorAll('.nav-link');
        
        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});

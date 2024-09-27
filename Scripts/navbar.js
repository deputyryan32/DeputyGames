document.getElementById('navbar-container').innerHTML = `
    <div class="navbar">
        <a href="index.html" class="nav-link ${window.location.pathname.endsWith('index.html') ? 'active' : ''}">Home</a>
    </div>
`;

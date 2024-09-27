const pages = [
    { name: "Home", url: "index.html" },
    { name: "Our Team", url: "ourteam.html" },
    // Add new pages here
    // { name: "Page Title", url: "page.html" },
];

document.getElementById('navbar-container').innerHTML = `
    <div class="navbar">
        ${pages.map(page => `
            <a href="${page.url}" class="nav-link ${window.location.pathname.endsWith(page.url) ? 'active' : ''}">${page.name}</a>
        `).join('')}
    </div>
`;

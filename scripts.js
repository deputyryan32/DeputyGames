// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const gamesList = document.getElementById("games");

    // Simulated list of game folders (this would normally come from a server)
    const games = [
        { name: "Flappy Bird", path: "flappy_bird/index.html" },
        { name: "3D Hartwig Chess", path: "hartwig_chess/index.html"}
        // You can add more games here
    ];

    // Dynamically create list items for each game folder
    games.forEach(game => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${game.path}">${game.name}</a>`;
        gamesList.appendChild(li);
    });
});

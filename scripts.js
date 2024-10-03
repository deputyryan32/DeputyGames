// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const gamesList = document.getElementById("games");

    // Updated list of game folders, only referencing index.html
    const games = [
        { name: "Flappy Bird", path: "flappy_bird/index.html" },
        { name: "javascript_snake", path: "javascript_snake/index.html" },
        { name: "snake", path: "snake/index.html" },
        { name: "snake_game", path: "snake_game/docs/index.html" },
        { name: "backbone", path: "backbone/index.html" }
        // Add more games as needed
    ];

    // Create list items for each game
    games.forEach(game => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${game.path}">${game.name}</a>`;
        gamesList.appendChild(li);
    });
});
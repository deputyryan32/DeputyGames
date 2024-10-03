// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const gamesList = document.getElementById("games");

    // Updated list of game folders, only referencing index.html
    const games = [
        { name: "Flappy Bird", path: "flappy_bird/index.html" },
        { name: "hartwig_chess", path: "hartwig_chess/index.html" }  // Add your new game here
        // Add more games as needed
    ];

    // Create list items for each game
    games.forEach(game => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${game.path}">${game.name}</a>`;
        gamesList.appendChild(li);
    });
});
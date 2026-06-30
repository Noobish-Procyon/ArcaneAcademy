const defaultSave = {
  hp: 60,
  maxHp: 60,
  level: 1,
  xp: 0,
  xpToNext: 40,
  gold: 50,
  inventory: ["Potion"],
  equipment: { weapon: null, armor: null },
  stats: { attack: 5, defense: 2 },
  quests: {}
};

let save = JSON.parse(localStorage.getItem("arcaneSave")) || JSON.parse(JSON.stringify(defaultSave));

function saveGame() {
  localStorage.setItem("arcaneSave", JSON.stringify(save));
}

function resetGame() {
  save = JSON.parse(JSON.stringify(defaultSave));
  saveGame();
  console.log("Game reset.");
}

window.save = save;
window.saveGame = saveGame;
window.resetGame = resetGame;

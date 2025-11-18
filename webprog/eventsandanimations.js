const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const params = new URLSearchParams(window.location.search);
const playerName = params.get("playername") || "Guest";
const difficulty = params.get("choice") || "1";

const DIFFICULTY_LABELS = { "1": "easy", "2": "medium", "3": "hard" };
const selectedDifficulty = DIFFICULTY_LABELS[difficulty] || "easy";

let leaderboard = {
  easy: [
    { name: "jozsef", score: 300 },
    { name: "sandior", score: 220 },
    { name: "enmegaziren", score: 150 },
  ],
  medium: [
    { name: "szomszedneni", score: 190 },
    { name: "produkcio", score: 100 },
    { name: "iroda", score: 50 },
  ],
  hard: [
    { name: "pepe", score: 190 },
    { name: "alegnagyobb", score: 110 },
    { name: "goat", score: 90 },
  ],
};

const level = levels[selectedDifficulty];
const gridSize = level.cols;
const timeLimit = level.time * 60;
let score = 0;

const scoreDisplay = $("[data-score]");
const gridContainer = $("[data-grid-container]");
const playButton = $("[data-reveal-btn]");
const timerDisplay = $("[data-timer]");

const formatScore = (val) => String(val).padStart(6, "0");

const updateScoreDisplay = () => {
  if (scoreDisplay) scoreDisplay.textContent = formatScore(score);
};

const setPlayerInfo = () => {
  const rows = $$(".gamedata tr");
  if (!rows.length) return;
  rows[0].innerHTML = `<td>Player: ${playerName}</td>`;
  rows[1].innerHTML = `<td>Difficulty: ${selectedDifficulty}</td>`;
  rows[2].innerHTML = `<td>Time: <span data-timer></span></td>`;
};

const buildGrid = () => {
  gridContainer.innerHTML = "";
  gridContainer.style.cssText = `
    display: grid;
    grid-template-columns: repeat(${gridSize}, 1fr);
    width: min(40em, 90vw);
    aspect-ratio: 1 / 1;
    grid-auto-rows: 1fr;
  `;

  return Array.from({ length: gridSize * gridSize }, (_, i) => {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.dataset.index = i;
    const img = document.createElement("img");
    img.classList.add("logo");
    cell.appendChild(img);
    gridContainer.appendChild(cell);
    return cell;
  });
};

const getLogos = () => evolutions
  .filter(e => e.difficulty === selectedDifficulty)
  .map(e => e.steps[0]?.img)
  .filter(Boolean)
  .map(img => `assets/logos/${img}`);
  
const revealImage = (cell) => {
  if (cell.classList.contains("revealed")) return;

  const options = evolutions.filter(e => e.difficulty === selectedDifficulty);
  const evo = options[Math.floor(Math.random() * options.length)];
  const step = evo.steps[0];

  cell.dataset.evolution = evo.name;
  cell.dataset.step = step.step;
  cell.dataset.difficulty = evo.difficulty;
  cell.innerHTML = `<img src="assets/logos/${step.img}" alt="${step.name}" class="grid-img">`;
  cell.classList.add("revealed");
};


const getPoints = (step) => {
  const stepPoints = { 1: 5, 2: 10, 3: 15 };
  return stepPoints[step] || step * 5;
};

const setupCellEvents = (cells) => {
  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      if (!cell.classList.contains("revealed")) {
        revealImage(cell);
      } else {
        handleCellClick(cell);
      }
    });
  });
};

const setupPlayButton = (cells) => {
  if (!playButton) return;
  playButton.addEventListener("click", () => {
    const hidden = cells.filter(c => !c.classList.contains("revealed"));
    if (!hidden.length) return;
    const randomCell = hidden[Math.floor(Math.random() * hidden.length)];
    revealImage(randomCell);
  });
};

const autoRevealCells = (cells) => {
  const revealCount = { easy: 4, medium: 6, hard: 8 }[selectedDifficulty] || 4;
  const toReveal = cells
    .filter(c => !c.classList.contains("revealed"))
    .sort(() => Math.random() - 0.5)
    .slice(0, revealCount);

  toReveal.forEach(revealImage);
};

const tooltip = (() => {
  const el = document.createElement("div");
  el.classList.add("tooltip-box");
  document.body.appendChild(el);
  return el;
})();

let hoverTimeout = null;

const setupTooltips = (cells) => {
  cells.forEach(cell => {
    cell.addEventListener("mouseenter", () => {
      hoverTimeout = setTimeout(() => showTooltip(cell), 3000);
    });
    cell.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimeout);
      tooltip.style.display = 'none';
    });
  });
};

const showTooltip = (cell) => {
  const evo = evolutions.find(e => e.name === cell.dataset.evolution);
  if (!evo) return;
  tooltip.innerHTML = `
    <h2>${evo.steps[1]?.name || ""}</h2>
    <p>${evo.description || ""}</p>
    <div><img src="assets/evolutions/${evo.tooltip}"></div>
  `;
  const rect = cell.getBoundingClientRect();
  tooltip.style.cssText = `
    top: ${rect.bottom + window.scrollY + 5}px;
    left: ${rect.left + window.scrollX}px;
    display: block;
  `;
};

let selectedCells = [];

const handleCellClick = (cell) => {
  if (selectedCells.includes(cell)) {
    cell.classList.remove("selected");
    selectedCells = selectedCells.filter(c => c !== cell);
    return;
  }

  if (selectedCells.length < 2) {
    cell.classList.add("selected");
    selectedCells.push(cell);

    if (selectedCells.length === 2) {
      tryMerge();
    }
  }
};

const tryMerge = () => {
  const [a, b] = selectedCells;
  const sameEvo = a.dataset.evolution === b.dataset.evolution;
  const sameStep = a.dataset.step === b.dataset.step;

  if (sameEvo && sameStep) {
    const evolution = evolutions.find(e => e.name === a.dataset.evolution);
    const next = evolution?.steps.find(s => s.step === parseInt(a.dataset.step) + 1);

    if (next) {
      a.dataset.step = next.step;
      a.innerHTML = `<img src="assets/logos/${next.img}" alt="${next.name}" class="grid-img">`;
      b.innerHTML = "";
      b.classList.remove("revealed");
      delete b.dataset.step;
      delete b.dataset.evolution;

      score += getPoints(next.step);
      updateScoreDisplay();
    }
  }

  selectedCells.forEach(c => c.classList.remove("selected"));
  selectedCells = [];
};

let remainingTime = timeLimit;
let timerInterval = null;

const updateTimer = () => {
  const mins = String(Math.floor(remainingTime / 60)).padStart(2, "0");
  const secs = String(remainingTime % 60).padStart(2, "0");
  const el = $("[data-timer]");
  if (el) el.textContent = `${mins}:${secs}`;

  if (remainingTime-- <= 0) {
    clearInterval(timerInterval);
    showGameOverScreen();
  }
};

const loadLeaderboard = () => {
  const saved = localStorage.getItem("leaderboard");
  if (saved) leaderboard = JSON.parse(saved);
};

const saveLeaderboard = () => {
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
};

const updateLeaderboard = () => {
  const scores = leaderboard[selectedDifficulty];
  const lowest = scores[scores.length - 1];
  if (score > lowest.score) {
    scores.push({ name: playerName, score });
    leaderboard[selectedDifficulty] = scores.sort((a, b) => b.score - a.score).slice(0, 3);
    saveLeaderboard();
    renderLeaderboard();
  }
};

const renderLeaderboard = () => {
  const container = $(".leaderboard-container");
  if (!container) return;

  container.innerHTML = `
    <h3>LEADERBOARD</h3>
    ${["hard", "medium", "easy"].map(level => `
      <div class="board-section">
        <h4>${level.toUpperCase()}</h4>
        ${leaderboard[level].map(player => `
          <p>${player.name.toUpperCase()} : <span>${formatScore(player.score)}</span></p>
        `).join("")}
        <p>******** : <span>000000</span></p>
      </div>
    `).join("")}
  `;
};

const showGameOverScreen = () => {
  updateLeaderboard();
  const overlay = document.createElement("div");
  overlay.classList.add("game-over-overlay");
  overlay.innerHTML = `
    <div class="game-over-box">
      <h2>Game Over!</h2>
      <p>Your Score: ${formatScore(score)}</p>
      <button data-retry>Try Again</button>
      <button data-home>Back to Home</button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector("[data-retry]").onclick = () =>
    window.location.href = `gamearea.html?playername=${playerName}&choice=${difficulty}`;
  overlay.querySelector("[data-home]").onclick = () =>
    window.location.href = "index.html";
};

(() => {
  setPlayerInfo();
  const cells = buildGrid();
  updateScoreDisplay();
  setupCellEvents(cells);
  setupPlayButton(cells);
  setupTooltips(cells);
  autoRevealCells(cells);
  loadLeaderboard();
  renderLeaderboard();
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
})();

console.log(`Evoluciok "${selectedDifficulty}":`, evolutions);
console.log(`A tablazat generalasa sikeres ${gridSize * gridSize} cellaval.`);
console.log(`Ido limit: ${remainingTime}`);
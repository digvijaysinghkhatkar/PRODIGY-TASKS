// Selectors for game elements
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("statusText");
const restartBtn = document.getElementById("restartBtn");

// Game state variables
const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

// Winning combinations
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Function to check if there's a winner
const checkWinner = () => {
  let winner = null;
  winningConditions.forEach((condition) => {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
      isGameActive = false;
      statusText.textContent = `${winner} Wins!`;
      highlightWinningCells([a, b, c]); // Highlight the winning cells
    }
  });

  if (!board.includes("") && winner === null) {
    isGameActive = false;
    statusText.textContent = "It's a Draw!";
  }
};

// Function to highlight winning cells
const highlightWinningCells = (indices) => {
  indices.forEach((index) => {
    cells[index].style.backgroundColor = "#61dafb"; // Highlight color
  });
};

// Handle cell click events
const handleCellClick = (e) => {
  const index = e.target.getAttribute("data-index");

  if (board[index] !== "" || !isGameActive) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  checkWinner();

  if (isGameActive) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
  }
};

// Restart the game
const restartGame = () => {
  board.fill("");
  isGameActive = true;
  currentPlayer = "X";
  statusText.textContent = "Player X's Turn";
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.style.backgroundColor = ""; // Reset background color
  });
};

// Event Listeners
cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
restartBtn.addEventListener("click", restartGame);

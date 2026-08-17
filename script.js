// ==========================================
// CHESS CLUB JEOPARDY
// Edit the categories, questions, and answers
// below to customize the game.
// ==========================================

const categories = [
  "Openings",
  "Endgames",
  "Tactics",
  "History",
  "Rules"
];

const questions = [
  [
    "Name the opening: 1.e4 e5 2.Nf3 Nc6 3.Bb5",
    "What is the Sicilian Defense first move for Black?",
    "Name the gambit: 1.d4 d5 2.c4",
    "Which opening starts with 1.f4?",
    "What is the move order for the King's Indian Defense?"
  ],
  [
    "What is the minimum material to force checkmate with King?",
    "What is the \"square rule\" in pawn endgames?",
    "What is Philidor's position?",
    "Can a lone Bishop checkmate?",
    "What is opposition in King endgames?"
  ],
  [
    "What is a fork?",
    "What is a pin?",
    "What is a skewer?",
    "What is a discovered attack?",
    "What is zugzwang?"
  ],
  [
    "Who was the first official World Champion?",
    "In what year was FIDE founded?",
    "Who defeated Kasparov in 1997?",
    "Which country hosted the 1972 \"Match of the Century\"?",
    "Who is the longest-reigning World Champion?"
  ],
  [
    "How many squares are on a chess board?",
    "What is en passant?",
    "When can you castle?",
    "What is stalemate?",
    "How does a pawn promote?"
  ]
];

const answers = [
  [
    "Ruy Lopez",
    "The Sicilian Defense begins with ...c5",
    "Queen's Gambit",
    "Bird Opening",
    "1.d4 Nf6 2.c4 g6 3.Nc3 Bg7"
  ],
  [
    "King and queen, or king and rook, depending on the position",
    "A pawn can catch a passed pawn by counting the squares to promotion",
    "A defensive setup that holds a draw in rook endgames",
    "No; king and bishop versus king is a draw",
    "A king-to-king opposition that restricts the opposing king"
  ],
  [
    "One piece attacks two or more targets",
    "An attacked piece cannot move without exposing a more valuable piece",
    "An attack on a valuable piece that forces it to move, exposing another piece",
    "An attack revealed when another piece moves away",
    "A position where every legal move worsens the position"
  ],
  [
    "Wilhelm Steinitz",
    "1924",
    "IBM's Deep Blue",
    "Iceland",
    "Emanuel Lasker"
  ],
  [
    "64",
    "A special pawn capture immediately after a two-square advance",
    "When neither the king nor rook has moved and the path is clear and safe",
    "A draw when the player to move has no legal move but is not in check",
    "By reaching the last rank and becoming a queen, rook, bishop, or knight"
  ]
];

// ------------------------------------------
// Slide navigation
// ------------------------------------------

function goSlide(id) {
  document.querySelectorAll(".slide").forEach((slide) => {
    slide.classList.remove("active");
  });

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
  }
}

// ------------------------------------------
// Build Jeopardy board
// ------------------------------------------

const board = document.getElementById("jeopardy-board");

categories.forEach((category) => {
  const header = document.createElement("div");
  header.className = "category-cell";
  header.textContent = category;
  board.appendChild(header);
});

for (let row = 0; row < 5; row++) {
  const points = (row + 1) * 100;

  categories.forEach((category, column) => {
    const cell = document.createElement("button");

    cell.className = "jeopardy-cell";
    cell.textContent = points;

    cell.addEventListener("click", () => {
      showQuestion(column, row, cell);
    });

    board.appendChild(cell);
  });
}

// ------------------------------------------
// Question modal
// ------------------------------------------

function showQuestion(column, row, cell) {
  document.getElementById("modal-category").textContent = categories[column];
  document.getElementById("modal-points").textContent =
    `${(row + 1) * 100} Points`;

  document.getElementById("modal-question").textContent =
    questions[column][row];

  document.getElementById("modal-answer").textContent =
    `Answer: ${answers[column][row]}`;

  document.getElementById("modal-answer").classList.remove("show");
  document.getElementById("show-answer-btn").style.display = "inline-block";

  document.getElementById("question-modal").classList.add("show");

  // Mark the square as used.
  cell.classList.add("used");
}

function showAnswer() {
  document.getElementById("modal-answer").classList.add("show");
  document.getElementById("show-answer-btn").style.display = "none";
}

function closeModal() {
  document.getElementById("question-modal").classList.remove("show");
}

// Allow Escape to close the question.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

const gameBoard = document.querySelector(".game-board");
const moveDisplayPara = document.querySelector("#current_move");
const cells = document.querySelectorAll(".cell");
const resetGameBoardBtn = document.querySelector("#reset-game");

let turn = "X";
let isGamePlayable = true;

const checkWin = () => {
  const winCombo = [
    // horizontal winCombo
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical winCombo
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal winCombo
    [0, 4, 8],
    [2, 4, 6],
  ];

  // grabbing all the 'cell-text' para
  const cellTexts = document.querySelectorAll(".cell-text");

  winCombo.forEach((e) => {
    if (
      cellTexts[e[0]].innerText === cellTexts[e[1]].innerText &&
      cellTexts[e[1]].innerText === cellTexts[e[2]].innerText &&
      cellTexts[e[0]].innerText !== ""
    ) {
      moveDisplayPara.innerText = `${cellTexts[e[0]].innerText} won`;
      isGamePlayable = false;
    }
  });
};

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const element = cell.querySelector(".cell-text");
    if (element.innerText === "" && isGamePlayable) {
      // console.log(cell);
      element.innerHTML = turn;
      turn = changeTurn();
      moveDisplayPara.innerText = `It's ${turn}' turn`;
      checkWin();
    }
  });
});

resetGameBoardBtn.addEventListener("click", () => {
  cells.forEach((cell) => {
    const element = cell.querySelector(".cell-text");
    element.innerText = "";
    isGamePlayable = true;
    turn = "X";
    moveDisplayPara.innerText = `It's ${turn} turn`;
  });
});

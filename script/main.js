const gameBoard = document.querySelector(".game-board");
const moveDisplayPara = document.querySelector("#current_move");
const cells = document.querySelectorAll(".cell");
const resetGameBoardBtn = document.querySelector("#reset-game");

let turn = "X";
let isGamePlayable = true;

const checkWin = () => {
  const winCombo = [
    //  HORIZONTAL winCombo
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //  VERTICAL winCombo
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //  DIAGONAL winCombo
    [0, 4, 8],
    [2, 4, 6],
  ];

  //  GRABBING ALL THE 'CELL-TEXT' PARA
  const cellTexts = document.querySelectorAll(".cell-text");

  //  RUNNING THROUGH EVERY ARRAY OF THE 'winCombo'
  //  THE COMPARING THE SUB-ARRAY ELEMENTS WITH EACHOTHER TO CHECK THE WINNER
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
    //  CHECKING IF THE CONTENT OF THE PARA IS EMPTY AND THE GAME IS PLAYABLE
    if (element.innerText === "" && isGamePlayable) {
      element.innerText = turn;
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

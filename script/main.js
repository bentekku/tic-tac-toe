const GAMEBOARD = document.querySelector("#gameBoard");
const GAME_INFO = document.querySelector("#gameInfo");
const squares = ["", "", "", "", "", "", "", "", ""];
let move = "X";
let isGamePlayable = true;

function drawGameBoard() {
  if (isGamePlayable) {
    squares.forEach((_cells, index) => {
      const CELL = document.createElement("div");
      CELL.classList.add("square");
      CELL.id = index;
      CELL.addEventListener("click", (event) => {
        if (move === "X" && !event.target.classList.contains("disabled")) {
          console.log(move);

          event.target.textContent = "X";
          event.target.classList.add("cross");
          event.target.classList.add("disabled");
          move = "O";
          GAME_INFO.textContent = `${move} is now playing`;
        } else if (
          move === "O" &&
          !event.target.classList.contains("disabled")
        ) {
          console.log(move);

          event.target.textContent = "O";
          event.target.classList.add("circle");
          event.target.classList.add("disabled");
          move = "X";
          GAME_INFO.textContent = `${move} is now playing`;
        }
        checkProgress(event);
      });
      // might just use plain function to checkProgress instead of feeding in a param too
      GAMEBOARD.append(CELL);
    });
  }
}
GAME_INFO.textContent = `${move} is now playing`;
drawGameBoard();

function checkProgress(event) {
  // grabbing all the children of GAMEBOARD and matching the values according to the logic of the tic-tac-toe game
  // row-wise | column-wise | diagonal-wise
  // rework on logic 'Wednesday, June 21st'

  // 1st row condition
  if (
    !event.target.index[0].textContent &&
    event.target.index[0].textContent === event.target.index[1].textContent &&
    event.target.index[1].textContent === event.target.index[2].textContent
  ) {
    GAME_INFO.textContent = `The winner is: ${event.target.textContent}`;
    isGamePlayable = false;
  }
  // 2nd row condition
  else if (
    !event.target.index[3] &&
    event.target.index[3] === event.target.index[4] &&
    event.target.index[4] === event.target.index[5]
  ) {
    GAME_INFO.textContent = `The winner is: ${event.target.textContent}`;
    isGamePlayable = false;
  }
  // 3rd row condition
  else if (
    !event.target.index[6] &&
    event.target.index[6] === event.target.index[7] &&
    event.target.index[7] === event.target.index[8]
  ) {
    GAME_INFO.textContent = `The winner is: ${event.target.textContent}`;
    isGamePlayable = false;
  }
  // 1st column condition
  else if (
    !event.target.index[0] &&
    event.target.index[0] === event.target.index[3] &&
    event.target.index[3] === event.target.index[6]
  ) {
    GAME_INFO.textContent = `The winner is: ${event.target.textContent}`;
    isGamePlayable = false;
  }
  // 2nd column condition
  else if (
    !event.target.index[1] &&
    event.target.index[1] === event.target.index[4] &&
    event.target.index[4] === event.target.index[7]
  ) {
    GAME_INFO.textContent = `The winner is: ${event.target.textContent}`;
    isGamePlayable = false;
  }
  // 3rd column condition
  else if (
    !event.target.index[2] &&
    event.target.index[2] === event.target.index[5] &&
    event.target.index[5] === event.target.index[8]
  ) {
    GAME_INFO.textContent = `The winner is: ${event.target.textContent}`;
    isGamePlayable = false;
  }
  // diagonal left-2-right
  else if (
    !event.target.index[0] &&
    event.target.index[0] === event.target.index[4] &&
    event.target.index[4] === event.target.index[8]
  ) {
    GAME_INFO.textContent = `The winner is: ${event.target.textContent}`;
    isGamePlayable = false;
  }
  // diagonal right-2-left
  else if (
    !event.target.index[2] &&
    event.target.index[2] === event.target.index[4] &&
    event.target.index[4] === event.target.index[6]
  ) {
    GAME_INFO.textContent = `The winner is: ${event.target.textContent}`;
    isGamePlayable = false;
  }
}

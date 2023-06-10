let init=0;
// this  array.from converts the div/ cell classes to elements in an array
const announcer=document.querySelector(".announcer")
const tiles=Array.from(document.querySelectorAll(".cell"))
const displaySec=document.querySelector(".display-2")
const playerStatus=document.querySelector(".display-player")
const resetBtn=document.getElementById("reset")
const gameOnEl=document.getElementById("gameOn")
/* let startingPlayer= ""
let currentPlayer=startingPlayer */
let board=["","","","","","","","",""]
let currentPlayer="X"
let gameOn=true

//Initializing the loading page
function loader(){
  init = setTimeout(showPage, 5000);
}


function showPage() {
  document.getElementById("preloader").style.display = "none";

}

// The below constant is set from the tile board indexes ie
                /*  [0 1 2]
                    [3 4 5]
                    [6 7 8] */


const playerOWon="playeroWon"
const playerXWon="playerxWon"
const Tie="tie"

let winConditions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [2,5,8],
  [1,4,7]
]
//Initialise game
announcer.classList.remove('hide')
displaySec.classList.remove("noshow")
// forEach method iterates across the elements in the tiles array applies any function to all tiles in the board
tiles.forEach((tile,index)=>{
  tile.addEventListener("click", () =>
   displaySymbol(tile,index)
  )}
)
// a constant is declared that holds the value assedby a function which checks that the tile being selected has a vlaue in it. This is using truthy or falsy values
const isValidTurn = (tile) => {
  if (tile.innerText === 'X' || tile.innerText === 'O'){
      return false;
  }

  return true;
};
function displaySymbol (tile, index){
  if(isValidTurn(tile) && gameOn) {
      tile.innerText = currentPlayer;
      tile.classList.add(`player${currentPlayer}`);
      appendBoard(index);
      validateResult();
      changePlayerTurn();
  }
}

function changePlayerTurn(){
  if (currentPlayer==="X"){
    currentPlayer="O"
    playerStatus.innerText=currentPlayer
  }else{
    currentPlayer="X"
    playerStatus.innerText=currentPlayer
  }
}
// updates the board
function appendBoard(index){
  board[index]=currentPlayer
}

function validateResult() {
  let win = false;
  for (let i = 0; i <= 7; i++) {
      const winCondition = winConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === "" || b === "" || c === "") {
          continue;
      }
      if (a === b && b === c) {
          win = true;
          break;
      }
  }


if (win) {
      declare(currentPlayer === "X" ? playerXWon : playerOWon);
      gameOn = false;
      return;
  }

if (!board.includes("")){
    declare(Tie);
}
}

function declare(type) {
  switch(type){
      case playerOWon:
          announcer.innerHTML = 'Fatality! Player <span class="playerO">O</span> Wins';
          mySound.play()
          break;
      case playerXWon:
          announcer.innerHTML = ' Fatality! Player <span class="playerX">X</span> Wins';
          mySound.play()
          break;
      case Tie:
          announcer.innerText = 'Its a tie folks!';
  }
  displaySec.classList.add("noshow")
  announcer.classList.remove('hide');
};


//Resets content of each tile
resetBtn.addEventListener("click",()=>{
  board=["","","","","","","","",""]
  currentPlayer="X"
  gameOn=true
  displaySec.classList.remove("noshow")
  announcer.classList.add('hide')
  tiles.forEach((tile)=>{
    tile.innerText=""
  }
  )
})

// Additional Content
class sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    };
    this.stop = function () {
      this.sound.pause();
    };
  }
}
  let mySound = new sound("Fatality.mp3");

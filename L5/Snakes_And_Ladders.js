//Refer to Snakes_And_Ladders.md file in the assets directory for information

function SnakesLadders() {
  //Player 1 & 2:
  //Name and current position on board (initialized at 1)
  this.p1 = {
    name: 'Player 1',
    position: 23
  }
  this.p2 = {
    name: 'Player 2',
    position: 1
  }

  //Keys: "Snake bite" spots on board 
  //Values:  Resulting position
  this.snakes = {
    16: 6,
    46: 25,
    49: 11,
    62: 19,
    64: 60,
    74: 53,
    89: 68,
    92: 88,
    95: 75,
    99: 80
  }

  //Game starts with player 1
  this.currentPlayer = this.p1;

  //Check if player position is on 100
  this.checkWin = () => {
    if (this.currentPlayer.position === 100) {
      return `${this.currentPlayer.name} wins!`;
    }
  }

  //Check if player move lands them on snake head
  //If input (current position) is a valid key in the object,
  //assign its new position the value of the key
  this.isOnSnake = (position) => {
    if (this.snakes[`${position}`]) {
      this.currentPlayer.position = this.snakes[`${position}`];
    }
    else {
        return false;
    }
  }
  
}

SnakesLadders.prototype.play = function (die1, die2) {
  this.currentPlayer.position += die1 + die2;

  console.log();
  if (die1 === die2) {

  }
}

let game = new SnakesLadders();
console.log(game.isOnSnake(game.p1.position));

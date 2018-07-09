//Refer to Snakes_And_Ladders.md file in the assets directory for information

function SnakesLadders() {
  this.p1 = 'Player 1';
  this.p2 = 'Player 2';

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
  };

  this.p1Position = 1;
  this.p2Position = 1;

  this.currentPlayer = this.p1;

  this.board = Array.from({length:10}, (v,i) => i+1 )

  const init = () => {
    console.log(this.board);
  };

  init();
};

SnakesLadders.prototype.play = function (die1, die2) {
    console.log(this.p1);
}

// let game = new SnakesLadders();
// game.play();
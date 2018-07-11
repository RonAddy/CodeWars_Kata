//Refer to Snakes_And_Ladders.md file in the assets directory for information

function SnakesLadders() {
  //Player 1 & 2:
  //name and current position on board (initialized at 1)
  this.p1 = {
      name: 'Player 1',
      position: 1
    }
  this.p2 = {
      name: 'Player 2',
      position: 1
  }

 //  
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

  this.currentPlayer = this.p1;

  this.board = Array.from({length:100}, (v,i) => i+1 )

  this.init = () => {
    console.log(this.p2.name);
  };

  this.checkWin = () =>{
      if (this,currentPlayer.position === 100) return `${this.currentPlayer.name} wins!`;
  }

  this.isOnSnake = (position) => {
    if(this.snakes[`${position}`]){
        console.log(true);
    }
    // const snakes = Object.keys(this.snakes).forEach( ele=> {
    //     if( this.currentPlayer.position === ele){
    //         console.log( `${this.currentPlayer.name} landed on a snake at ${ele}`)
    //     }
    // })
  }

  this.init();
};

SnakesLadders.prototype.play = function (die1, die2) {
    this.currentPlayer.position += die1+die2;

    console.log()
    if( die1 === die2){

    }
}

let game = new SnakesLadders();
console.log(game.isOnSnake(game.p1.position))
// console.log();
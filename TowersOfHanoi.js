var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame() {
  this.stack = [[3, 2, 1], [], []];
}

HanoiGame.prototype.isWon = function () {
  if (this.stack[1].length === 3 || this.stack[2].length === 3) {
    return true;
  }
  return false;
}

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {

  if (!(startTowerIdx <= 2 && startTowerIdx >= 0 && endTowerIdx >=0 &&
      endTowerIdx <= 2)){
        return false;
  }

  if (this.stack[startTowerIdx].length == 0){
    return false;
  }
  var lastElementStart = this.stack[startTowerIdx].slice(-1)[0]
  var lastElementEnd = this.stack[endTowerIdx].slice(-1)[0]

  if (lastElementStart > lastElementEnd){
    return false;
  }

  return true;
}

HanoiGame.prototype.move = function(startTowerIdx, endTowerIdx) {
  var movedDisc = this.stack[startTowerIdx].pop()
  this.stack[endTowerIdx].push(movedDisc)
  this.run();
}

HanoiGame.prototype.print = function() {
  console.log(this.stack);
}

HanoiGame.prototype.promptMove = function(move) {
  var game = this
  reader.question("Select start tower!", function (startIndex) {
    reader.question("Select end tower!", function (endIndex) {
      startTowerIdx = parseInt(startIndex);
      endTowerIdx = parseInt(endIndex);

      if(game.isValidMove(startTowerIdx, endTowerIdx)){
        move.apply(game, [startTowerIdx, endTowerIdx]);
      }
      else{
        console.log("Ya done goofed!")
        game.promptMove(move)
      }
    });
  });

}

HanoiGame.prototype.run = function() {
  var game = this;
  if (game.isWon()){
    console.log("You won!")
    reader.close()
  }
  else {
    game.print();
    game.promptMove(game.move);
  }
}

var HanoiGame = new HanoiGame;
HanoiGame.run()

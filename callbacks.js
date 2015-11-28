function Clock () {
  var currentTime = new Date;
  this.hours = currentTime.getHours();
  this.minutes = currentTime.getMinutes();
  this.seconds = currentTime.getSeconds();
  this.printTime()
  setInterval(this._tick.bind(this), 1000)
}

Clock.prototype.printTime = function () {
  var time_str = this.hours + ":" + this.minutes + ":" + this.seconds;
  console.log(time_str);
};

Clock.prototype._tick = function () {
  this.seconds++;
  if(this.seconds > 59){
    this.seconds = 0;
    this.minutes++;
  }
  if(this.minutes > 59){
    this.minutes = 0
    this.hours++;
  }
  if(this.hours > 23){
    this.hours = 0
  }
  this.printTime()
};

// var clock = new Clock();

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback){
  if( numsLeft > 0){
    reader.question("A number please: ", function(answer){
      var answerInt = parseInt(answer)
      sum += answerInt;
      numsLeft--;
      console.log("Partial sum: " + sum);
      addNumbers(sum, numsLeft, completionCallback);
    })
  }else if ( numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});

function absurdButtleSort(arr, sortCompletionCallback){
  



}

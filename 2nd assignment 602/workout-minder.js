// You can use PHP or Node for this exercise.  +2 points to your overall grade if you develop a solution in BOTH Node and PHP.
// Create an array of abs' workouts (just the names of the exercise).   See: https://www.coachmag.co.uk/exercises/abs-exercises for a list of ab exercises.
// Create an array of encouraging phrases, like:  "Nice Job",  "You are crushing it", "Keep kickin it", "Progress!!", "Keep going", etc....  You randomly use these phrases over and over again, till you have completed all your exercises.
// Create your own event emitter that tells the client <Encouraging Phrase>.  It's time to switch to the <name of the next ab's workout>", every 5 minutes.
// When you have used all your ab exercises, the program exits.


let arr1 = ["Plank", "Hand slide crunch", "Mountain climber", "Reverse crunch", "Grounded Russian twist", "Dead bug", "Leg raise" ]
let arr2 = ["Nice Job",  "You are crushing it", "Keep kickin it", "Progress!!", "Keep going"];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

var events = require('events');
var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(mssg){
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  (async () => {
    for (let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
      console.log();
      shuffleArray(arr2);
      shuffleArray(arr1)
      console.log(`${arr2[j]} It's time to switch to the ${arr1[i]}`);
      await sleep(2000);

      // for (let j = 0; j < arr2.length; j++) {
      //   console.log(arr2[j]);
      //   await sleep(1000);}
    }
  })();
  });


  myEmitter.emit('someEvent')




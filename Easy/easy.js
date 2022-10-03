/* EASY: Write a function that would allow you to do this:
var run = exercise('running');
console.log(run()); // prints "Today's exercise: running" 
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming" */

//Part I- Running
var run = {
  exercise: "running",
};

(function () {
  console.log("Today's exercise: " + run.exercise);
})(run);
//prints "Today's exercise: running"

//Part II- Swimming
var swim = {
  exercise: "swimming",
};

(function () {
  console.log("Today's exercise: " + swim.exercise);
})(swim);
//prints "Today's exercise: swimming"

//Solution 2

function exercise(x) {
  return "Today's exercise: " + x;
}

function run1() {
  var run1 = exercise("running");
  return run1;
}
console.log(run1());

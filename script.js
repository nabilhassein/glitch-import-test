var backgroundColors = ["black", "blue", "green", "white"];
var textColors = ["purple", "red", "lightblue", "black"];

// Write a function that takes a number as an argument,
// and generates random whole numbers between 0 and that number.
function randomUpTo(n) {
  return Math.floor(n * Math.random());
}

document.querySelector("button").addEventListener('click', function() {
  var color = randomUpTo(backgroundColors.length);
  document.querySelector("body").style.backgroundColor = backgroundColors[color];
  document.querySelector("body").style.color = textColors[color];
});



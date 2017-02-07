"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = guessTheNumber(function () {
  var playerNumber = prompt("I'm thinking of a number between 1 and 100. Can you guess the number I'm thinking of?");

  var min = 1;
  var max = 100;

  var randomNumber = Math.random() * (max - min) + min;
  var ourNumber = Math.round(randomNumber);

  if (playerNumber === ourNumber) {
    return alert('Congratulations! You guessed the number we were thinking of!');
  } else {
    return alert("Sorry, my number was " + ourNumber);
  }
});
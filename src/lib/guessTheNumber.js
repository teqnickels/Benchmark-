var playerNumber = prompt("I'm thinking of a number between 1 and 100. Can you guess the number I'm thinking of?")

min = 1
max = 100
var randomize =  Math.random() * (max-min) + min;
var ourNumber  = Math.round(randomize)

while(ourNumber >= max) {
   ourNumber--
}
while(ourNumber == min) {
   ourNumber++
}

if (playerNumber == ourNumber) {
  alert('Congratulations! You guessed the number we were thinking of!')
} else {
  alert('Sorry, my number was' + ' ' + ourNumber)
}

"use strict";

let guessTheNumber = () => {
  let playerNumber = prompt("I'm thinking of a number between 1 and 100. Can you guess the number I'm thinking of?")

  const min = 1
  const max = 100

  let randomNumber =  Math.random() * (max-min) + min;
  let ourNumber  = Math.round(randomNumber)

  if (playerNumber == ourNumber) {
    return alert('Congratulations! You guessed the number we were thinking of!')
  }else{

    while(playerNumber !== ourNumber){

      if(playerNumber !== null){
        return
      }

      if(playerNumber > ourNumber) {
          let playerNumber = prompt('Sorry, your number is too high, try again' )
        }

      if(playerNumber < ourNumber){
        let playerNumber = prompt('Sorry, your number is too low, try again.')
        }
      if(playerNumber == nan){
        prompt('Please enter a NUMBER')
      }
      }
    }
}

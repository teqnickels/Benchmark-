// create an object with key value pairs
//create variables that equal their count
//when user enters the letters in prompt, set the response to equal -1 and the letter entered to the location to do that operation

let letters = {
  A:9,
  B:2,
  C:2,
  D:4,
  E:12,
  F:2,
  G:3,
  H:2,
  I:9,
  J:1,
  K:1,
  L:4,
  M:2,
  N:6,
  O:8,
  P:2,
  Q:1,
  R:6,
  S:4,
  T:6,
  U:4,
  V:2,
  W:2,
  X:1,
  Y:2,
  Z:1,
  _:2
}

let scrabbleBag = ()=> {

  let userTally = prompt('Enter the scrabble tiles that have been played')
  let userLetters = userTally.toUpperCase()

    for (var i = 0; i < userLetters.length; i++) {
         letters[userLetters[i]] = letters[userLetters[i]] - 1
      }
  return letters
}

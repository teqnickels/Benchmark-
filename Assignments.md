## Specifications


### 1: Guess The Number 

Write a program that will generate a number between 1 and 100. Your program will ask the user to guess the generated number.

When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit".

### Solution:
    let guessTheNumber = () => {
          let playerNumber = prompt("I'm thinking of a number between 1 and 100. Can you guess the number I'm thinking of?")

          const min = 1
          const max = 100

          let randomNumber =  Math.random() * (max-min) + min;
          let ourNumber  = Math.round(randomNumber)

          if (playerNumber == ourNumber) {
             alert('Congratulations! You guessed the number we were thinking of!')
          }else{

            while(playerNumber !== ourNumber){

              if(playerNumber !== null){

              }

              if(playerNumber > ourNumber) {
                   playerNumber = prompt('Sorry, your number is too high, try again' )
                }

              if(playerNumber < ourNumber){
                 playerNumber = prompt('Sorry, your number is too low, try again.')
                }
              if(playerNumber == NaN){
                prompt('Please enter a NUMBER')

              if(playerNumbe == "exit")
                return
                }
              }
            }
        }

____________________________________________________________________________________________________________________________

### 2: Scrab-Bag

Scrabble (the game in which players remove tiles with letters on them from a bag and use them to create words on the game board) has a set number of 100 tiles.

This number does not change between games, nor does the frequency of each letter.

[Frequency and point value of each tile.](http://scrabblewizard.com/scrabble-tile-distribution/)

Represent each tile by the letter that appears on it, and blank tiles by underscores (`_`).

**Input:**

An uppercase string with the tiles that have already been played.

E.g., if 14 tiles have been played, you would be given an input like this:

```
AERETOXMYCNS_B
```

**Output:**

```
10: E
9: I
8: A
7: O
5: R, N, T
4: U, L, D
3: G, S
2: P, H, F, V, W
1: B, Y, J, K, M, Q, C, Z, _
0: X
```

### Solution
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
____________________________________________________________________________________________________________________________

### 3: String Indices

Write a program that parses the words in a string by providing a numerical index, similar to how you would access an element in array with a numerical index.

**Example:**

```"Catch me outside, how about that?"```

If you asked for the word at index `3` you would get `outside` back (for the purposes of this challenge, our index will start at `1`, not `0`).

If you ask for the word at index `7`, your program should return an empty string (`''`) because the string contains only 6 words. Negative indices should also return an empty string (`''`).

## Solution

            let stringIndices = (userString, userNumber) => {
                let newArr = []
                let separate = ""

                if(userNumber > newArr || userNumber < 0){
                  return " "
                }else if(userString.indexOf(" ") !== -1){
                    let finalArr = Array.from(newArr)
                    newArr.unshift(" ")
                    return newArr[userNumber]
                }

            }

____________________________________________________________________________________________________________________________



### 5: The Disemvowling

Disemvoweling means removing the vowels (a, e, i, o, u) from text.

**Input:**

A string that contains several words to disemvowel. It will consist of all lowercase letters without punctuation. The only non a-z character you should handle is spaces.

**Output:**

The disemvowled text with spaces removed.

## Solution

            let disemvowel = (str) =>{

              var lowerStr = str.toLowerCase()
              var escapePunct = lowerStr.replace(/[aeiou.,\/#!$%\^&\*;:{}=\-_`~() +?]/g,"")

              return escapePunct
            }
----------------------------------------------------------------------------------------------------------------------------


### 6: Where in the JSON?

```JavaScript
{
    "name": "William Shakespeare",
    "dead" : true,
    "works" : [
        {
            "name" : "Romeo and Juliet",
            "published" : 1591,
            "isAwesome" : true
        },
        {
            "name" : "Richard III",
            "published" : 1592,
            "isAwesome" : false
        }
    ],
    "favoriteSites" : [
        "tumblr",
        "4chan"
    ]
}
```

If you wish to find the name of the first play in the list of Shakespeare's works, the "path" to it would look like like this:

`works -> 0 -> name`

You would say that the value located at this path is "Romeo and Juliet". The value "tumblr" is located at:

`favoriteSites -> 2`

Your task is to find a user-provided key hidden in a JSON object.

You will be given a JSON object, and you will print out the search path that leads to the value "4chan". You are allowed to use any JSON parsing libraries that you want to.

**Input:**

JSON object.

**Output:**

The search path for the string in the format shown above (each element should be joined together with `->` between them.). Each element in the path will either be an integer (if indexing a list) or a string (if indexing an object).

## Solution

            const findThePath = (obj) =>{
              const data = JSON.stringify(obj)
              const json = JSON.parse(data)
              let jsonStr = Object.getOwnPropertyNames(json)
              let index = Object.values(json)
              let value = Object.values(jsonStr)


              jsonStr.forEach(function(jsonStr, index, value){

                if( value.hasOwnProperty(value) ){

                  let nestedObj = Object.getOwnPropertyNames(value)
                  console.log(jsonStr + ' -> ' + index + ' -> ' + obj[jsonStr] + 'nestedObj')

                }else{
                  console.log(jsonStr + ' -> ' + index + ' -> ' + obj[jsonStr])
                }
              })
            }
---



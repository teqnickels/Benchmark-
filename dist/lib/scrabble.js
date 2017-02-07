'use strict';

var _scrabbleBag;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// create an object with key value pairs
// each letter will have a value which is equal to the count of the letters in the bag
//using prompt, ask the users which letters have already been played
//it's always subtraction

var scrabbleBag = (_scrabbleBag = {
  9: 'A',
  2: 'B'
}, _defineProperty(_scrabbleBag, '2', 'C'), _defineProperty(_scrabbleBag, 4, 'D'), _defineProperty(_scrabbleBag, 12, 'E'), _defineProperty(_scrabbleBag, '2', 'F'), _defineProperty(_scrabbleBag, 3, 'G'), _defineProperty(_scrabbleBag, '2', 'H'), _defineProperty(_scrabbleBag, '9', 'I'), _defineProperty(_scrabbleBag, 1, 'J'), _defineProperty(_scrabbleBag, '1', 'K'), _defineProperty(_scrabbleBag, '4', 'L'), _defineProperty(_scrabbleBag, '2', 'M'), _defineProperty(_scrabbleBag, 6, 'N'), _defineProperty(_scrabbleBag, 8, 'O'), _defineProperty(_scrabbleBag, '2', 'P'), _defineProperty(_scrabbleBag, '1', 'Q'), _defineProperty(_scrabbleBag, '6', 'R'), _defineProperty(_scrabbleBag, '4', 'S'), _defineProperty(_scrabbleBag, '6', 'T'), _defineProperty(_scrabbleBag, '4', 'U'), _defineProperty(_scrabbleBag, '2', 'V'), _defineProperty(_scrabbleBag, '2', 'W'), _defineProperty(_scrabbleBag, '1', 'X'), _defineProperty(_scrabbleBag, '2', 'Y'), _defineProperty(_scrabbleBag, '1', 'Z'), _defineProperty(_scrabbleBag, '2', '_'), _scrabbleBag);
var userTally = prompt('Enter the scrabble tiles that have been played in ALL CAPS');
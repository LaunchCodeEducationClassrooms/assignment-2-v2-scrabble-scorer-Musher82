// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  let wordPoints = 0;

	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      wordPoints += Number(pointValue);
		 }
      
      }
	  }
    return wordPoints;
	}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  wordsPlayed = input.question(`Let's play some scrabble!

Enter a word to score: `);
  
};

const simplePointStructure = {
  1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

let simpleScore = function(word) {
  word = word.toUpperCase();
  let letterPoints = "";
  let wordPoints = 0;

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in simplePointStructure) {
      if (simplePointStructure[pointValue].includes(word[i])){
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
        wordPoints += Number(pointValue);
      }
      
    }
  }
  return wordPoints;
}

const vowelPointStructure = {
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U', 'Y']
};

let vowelBonusScore = function(word) {
  word = word.toUpperCase();
  let letterPoints = "";
  let wordPoints = 0;
  
  for (let i = 0; i < word.length; i++) {

    for (const pointValue in vowelPointStructure) {
      if (vowelPointStructure[pointValue].includes(word[i])){
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
        wordPoints += Number(pointValue);
      }
    }
  }
  return wordPoints;
}

function scrabbleScore(word) {
  word = word.toLowerCase();
  
  let wordPoints = 0;

  for (let i = 0; i < word.length; i++) {

        wordPoints += newPointStructure[word[i]];
  }
  return wordPoints;
}

const scoringAlgorithms = [
  {name: "Simple Score", description: "Each letter is worth 1 point.", scoringFunction: simpleScore}, 
  {name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt.", scoringFunction: vowelBonusScore},
  {name: "Scrabble", description: "The traditional scoring algorithm.", scoringFunction: scrabbleScore}];
 
function scorerPrompt() { let scoringSelection = input.question(`Which scoring algorithm would you like to use? 

0 - ${scoringAlgorithms[0].name}: One point per character
1 - ${scoringAlgorithms[1].name}: Vowels are worth 3 points
2 - ${scoringAlgorithms[2].name}: Uses scrabble point system

Enter 0, 1, or 2: `); 

//simple scoring
if (scoringSelection === '0') {
console.log(`Score for '${wordsPlayed}': ${scoringAlgorithms[0].scoringFunction(wordsPlayed)}`);}
// Vowel Bonus
else if (scoringSelection === '1'){
console.log(`Score for '${wordsPlayed}': ${scoringAlgorithms[1].scoringFunction(wordsPlayed)}`);}
// Scrabble
else if (scoringSelection === '2'){
console.log(`Score for '${wordsPlayed}': ${scoringAlgorithms[2].scoringFunction(wordsPlayed)}`);}
else {console.log(`\nPlease enter a valid selection:\n`)
scorerPrompt();}
};

function transform(oldPointStructure) {
  let newPointStructure = {};

  for (pointValue in oldPointStructure) {
    for (let i = 0; i < oldPointStructure[pointValue].length; i++) {
      newPointStructure[oldPointStructure[pointValue][i].toLowerCase()] = Number(pointValue);
    }
  }
  return newPointStructure
};

let newPointStructure = transform(oldPointStructure);
newPointStructure[" "] = 0;


function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


"use strict";
/**this function takes in array of words and return a new array of scores of each word */
function wordScores(words) {
  let wordsScore = [];
  //iterate each word in words
  for (let word of words) {
    let score = 0;
    //iterate each character for each word
    for (let alpha of word) {
      //getting individual score from findScore function
      let points = findScore(alpha);
      //if the points is null, exit inner loop and push null into the wordsScore
      if(points === undefined){
        score = null;
        break;
      }
      score += points;
    }
    wordsScore.push(score);
  }
  return wordsScore;
}

/**this function takes a single character and return a score based on the obj */
function findScore(alphabet){
  //upper case the alphanet
  let upperCaseAlpha = alphabet.toUpperCase();
  if(obj[upperCaseAlpha]){
    return obj[upperCaseAlpha];
  }
}
let obj = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};

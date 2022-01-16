"use strict";
/**takes in a string and return the most freq characters in a new array */
// function mostPopular(string) {
//   let frequencyChar = {};
//   let commonChar = [];
//   let high = 0;
//   for (let char of string) {
//     const newCount = findCounts(char);
//     setAndCompareCounts(newCount, char);
//   }
//   return commonChar.sort();

//   /**separate function to find the counts of the letter */
//   function findCounts(letter){
//     //find the key/value pair in the obj to add 1 or 0
//     const count = (frequencyChar[letter] || 0) + 1;
//     return count;
//   }

//   /**separate function to set and compare counts */
//   //separate the function into set and compare
//   function setAndCompareCounts(num, char){
//     //setting the char variable into frequencyChar
//     frequencyChar[char] = num;
//     //if num is > high, set high = num && commonChar to contain char 
//       //else if same value, push char into commonChar
//     if (num > high) {
//       commonChar = [char];
//       high = num;
//     } else if (num == high) {
//       commonChar.push(char);
//     }
//   }
// }

//my fav of doing from scratch
function mostPopular(string) {
  let common = [];
  let freqsObj = getFreqs(string);
  let max = getMaxFreqValue(freqsObj);
  for(let char in freqsObj){
    if(freqsObj[char] === max){
      common.push(char)
    }
  }
  return common;
}
function getFreqs(string){
  const freqsObj = {};
  for(let char of string){
    freqsObj[char] = (freqsObj[char] || 0) + 1;
  }
  return freqsObj;
}
function getMaxFreqValue(obj){
  let num = Math.max(...Object.values(obj));
  return num;
}
// This program converts strings into whale talk

// Global Variable Initialization
let input = 'This is the string in english. It will be converted into whale talk soon.';
const vowelArray = ['a','e','i','o','u'];
let vowelCount = 0;
let resultArray = [];
let endString = '';

// Nested loop checks each character in input for vowels
for (let counter = 0; counter < input.length; counter++)
  {
    for (let secCounter = 0; secCounter < vowelArray.length; secCounter++)
      {
        if (input.charAt(counter) == vowelArray[secCounter])
          {
            if (vowelArray[secCounter] == 'e') {
              resultArray.push('e');
              resultArray.push('e');}
            else if (vowelArray[secCounter] == 'u') {
              resultArray.push('u');
              resultArray.push('u');}
            else {
              resultArray.push(vowelArray[secCounter])
            }
            vowelCount++;
          }
      }
  }

// Storing the characters in a final string
endString = (resultArray.join('').toUpperCase());

// Final Output
console.log("INPUT: " + input);
console.log("WHALE TALK: " + endString);
console.log("Total Vowels: " + vowelCount);
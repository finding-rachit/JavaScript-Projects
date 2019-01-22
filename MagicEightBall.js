// This program uses control flow. 
// The user will be able to input a question, then the program will output a random fortune.

let userName = 'Parker';

// Greets the user
(userName) ? console.log(`Hello, ${userName}!`) : console.log ("Hello!");

let userQuestion = 'Will I become the CEO of a company?';

// outputs the user's question on screen
console.log(`${userName}, your question is: ${userQuestion}`);

// Stores a random variable from 0 - 8
let randomVariable = Math.floor(Math.random() * 8);
// Initializing an empty string, used later to store
let eightBall = '';

// Utilizes control flow to check 8 cases
switch (randomVariable){
	case 0:
        eightBall = "It is certain";
        break;
	case 1:
  	    eightBall = "It is decidedly so";
        break;
	case 2:
        eightBall = "Reply hazy try again";
 	    break;
 	case 3:
        eightBall = "Cannot predict now";
        break;
  case 4:
		eightBall = "Do not count on it";
        break;
  case 5:
        eightBall = "My sources say no";
        break;
  case 6:
        eightBall = "Outlook not so good";
 	    break;
  case 7:
        eightBall = "Signs point to yes"
        break;
}
// Outputs the fortune.
console.log(`The eight ball answered: ${eightBall}.`);
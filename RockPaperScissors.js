// This function receives the user's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!'); 
  }
}
// This function receives the computer's choice
const getComputerChoice = () => {
  const random = (Math.floor(Math.random() * 3));
	switch (random) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}
// This function determines the winner between user and computer
const getWinner = function(userChoice,computerChoice)
{
  if (userChoice === computerChoice)
    {
      return "The game is a tie";
    }
  else if (userChoice === 'rock')
    {
      if (computerChoice === 'paper')
        {
          return 'Computer Wins! Paper beats Rock.';
        }
      else
        {
          return 'User Wins! Rock beats Scissors.';
        }
    }
  else if (userChoice === 'paper')
    {
      if (computerChoice === 'scissors')
        {
          return 'Computer Wins! Scissors beats Paper.';
        }
      else
        {
          return 'User Wins! Paper beats Rock.';
        }
    }
  else if (userChoice === 'scissors')
    {
      if (computerChoice === 'rock')
        {
          return 'Computer Wins! Rock beats Scissors.';
        }
      else
        {
          return 'User Wins! Scissors beats Paper.';
        }
    }
  else {return "Invalid choice made by the user!"}
}
// Plays the game bw user and computer.
const playGame = () => {
  const user = getUserChoice('rock');
  console.log(`The user chooses: ${user}`);
  const computer = getComputerChoice();
  console.log(`The computer chooses: ${computer}`);
  console.log(getWinner(user,computer));
}

playGame();



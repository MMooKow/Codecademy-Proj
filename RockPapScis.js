//Get user decision on their move
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){ 
   return userInput;                      }else{
  console.log('Error\: Invalid Input'); }
};
//Get computer move through RNG
function getComputerChoice(){
 let compInput = ""
 let randomNum = Math.floor(Math.random() *3);
  switch (randomNum){
    case 0:
      compInput = "rock";
      return compInput;
      break;
    case 1:
      compInput = "paper";
      return compInput;
      break;
    case 2:
      compInput = "scissors";
      return compInput;
      break;
  }
}
//Function to decide winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice){
      return 'Tie game!';
  }
  //Decide outcome if player chooses 'rock'
  if (userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'Player wins! Rock beats scissors.'
    }else{
      return 'Computer wins! Paper beats rock.'
    }
  }
  //Decide outcome if player chooses 'paper'
  if (userChoice === 'paper'){
    if (computerChoice === 'rock'){
      return 'Player wins! Paper beats rock.'
    }else{
      return 'Computer wins! Scissors beat paper.'
    }
  }
  //Decide outcome if player chooses 'scissors'
  if (userChoice === 'scissors'){
    if (computerChoice === 'paper'){
      return 'Player wins! Scissors beats paper.'
    }else{
      return 'Computer wins! Rock beats scissors.'
    }
  }
}
console.log(determineWinner('paper', 'scissors'));
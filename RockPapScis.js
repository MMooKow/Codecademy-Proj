//Get user decision on their move
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){ 
   console.log(userInput);                      }else{
  console.log('Error\: Invalid Input'); }
};
//Get computer move through RNG
function getComputerChoice(){
 let compInput = ""
 let randomNum = Math.floor(Math.random() *3);
  switch (randomNum){
    case 0:
      compInput = "rock";
      console.log(compInput);
      break;
    case 1:
      compInput = "paper";
      console.log(compInput);
      break;
    case 2:
      compInput = "scissors";
      console.log(compInput);
      break;
  }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice){
      console.log('Tie!');
      }else if (userChoice = 'rock' && computerChoice === 'paper') {
      console.log('Player wins!');
   }else if (userChoice === 'paper' && computerChoice === 'rock') {
      console.log('Player wins!');
   }else if (userChoice === 'scissors' && computerChoice === 'paper'){
      console.log('Player wins!');
   }else{
     console.log('Computer wins!');
   }
}
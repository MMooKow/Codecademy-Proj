let userName = 'Dylan';
if (userName){
  console.log('Hello, ' + userName);
}else{
  console.log('Hello!');
}
let userQuestion = 'Eat more chikin?';
console.log('Your question is, ' + userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
if (randomNumber === 0){
    eightBall = console.log('It is certain');
}else if (randomNumber === 1){
    eightBall = console.log('It is decidedly so');
}else if (randomNumber === 2){
    eightBall = console.log('Reply hazy try again');
}else if (randomNumber === 3){
    eightBall = console.log('Cannot predict now');
}else if (randomNumber === 4){
  eightBall = console.log('Do not count on it');
}else if (randomNumber === 5){
  eightBall = console.log('My sources say no');
}else if (randomNumber === 6){
  eightBall = console.log('Outlook not so good');
}else{
  eightBall = console.log('Signs point to yes');
}
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = false;
let runnerAge = 19;
if (earlyRegister && runnerAge > 18){
  raceNumber += 1000;
}
if (earlyRegister && runnerAge > 18){
  console.log(`Your race time will be at 9\:30 AM and your race number is ${raceNumber}`);
}else if (runnerAge > 18 && earlyRegister !== true){
  console.log(`Your race time will be at 11\:00 AM and your race number is ${raceNumber}`);
}else if (runnerAge < 18){
  console.log(`Youth registrants run at 12\:30 pm \(regarless of registration\). Your race number is ${raceNumber}`);
}else{
  console.log('Please see registration desk.');
}
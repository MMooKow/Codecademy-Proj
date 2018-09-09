//Function for any given nights rest
const getSleepHours = day =>{
  switch (day){
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 8;
    case 'Wednesday':
      return 8;
    case 'Thursday':
      return 8;
    case 'Friday':
      return 8;
    case 'Saturday':
      return 8;
    case 'Sunday':
      return 8;
  }
}
//Actual hours slept
const getActualSleepHours = () =>{
  const sleepTotal = 
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
  return sleepTotal;
}
const getIdealSleepHours = () =>{
  const idealHours = 6;
  return idealHours * 7;
}
let calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const sleepDifference = getIdealSleepHours() - getActualSleepHours();
  if (actualSleepHours === idealSleepHours){
    return console.log('You got the perfect amount of sleep!');
  }
  if (actualSleepHours > idealSleepHours){
    return console.log('You got more sleep than you needed. ' + 'You are over your required sleep by: ' + sleepDifference + ' hours.');
  }
  if (actualSleepHours < idealSleepHours){
    return console.log('You should get more sleep.... Shame... ' + 'You are under your required sleep by: ' + sleepDifference + ' hours.');
  }
}
calculateSleepDebt();
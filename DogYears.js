//My age to be converted to dog years.
let myAge = 25;
//Variable created to count as the first 2 human years of a dogs life. Each of these 2 years will count as 10.5 years. This variable will change later.
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2;
//First 2 years of dogs life accounted for above. 2 years subtracted off myAge to account for.
laterYears = laterYears * 4;
//Multiplied the remaining years by 4 to account for human years 3+ of the dogs life time.
let myAgeInDogYears = earlyYears + laterYears;
//Added all years in dog time together for myAgeInDogYears.
const myName = "Dylan".toLowerCase();
//Above, created a variable for my name written in lowercase.
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
//Printed to the console a log that introduces me and gives my age in dog years.
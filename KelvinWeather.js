//Initial temperature set to a constant of 293 degrees Kelvin.
const kelvin = 293;
//Converting degrees Kelvin to degrees Celsius 
const celsius = kelvin - 273;
//Converting from Celcius to Fahrenheit.
let fahrenheit = celsius*(9/5)+32;
//Rounding answer down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//Convert to the Newton scale
newton = celsius*(33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)
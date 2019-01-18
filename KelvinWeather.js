// constant initialization of todays temperature in kelvin
const kelvin = 293;
// kelvin - 273 = celsius
let celsius = kelvin - 273;
// Converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounding down the decimal value
fahrenheit = Math.floor(fahrenheit);
// Converting celsius to newton
let newton = celsius * (33/100);
// Rounding down the decimal value
newton = Math.floor(newton);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
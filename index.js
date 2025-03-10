// Temperature data in Fahrenheit and Celsius
const day1TempF = 32;  // 32°F
const day2TempC = 25;  // 25°C
const day3TempF = 70;  // 70°F
const day4TempC = 18;  // 18°C
const day5TempF = 80;  // 80°F
const day6TempC = 15;  // 15°C
const day7TempF = 72;  // 72°F
const day8TempC = 28;  // 28°C
const day9TempF = 68;  // 68°F
const day10TempC = 20; // 20°C
const day11TempF = 75; // 75°F
const day12TempC = 23; // 23°C
const day13TempF = 82; // 82°F
const day14TempC = 30; // 30°C
const day15TempF = 65; // 65°F
const day16TempC = 22; // 22°C
const day17TempF = 77; // 77°F
const day18TempC = 26; // 26°C
const day19TempF = 78; // 78°F
const day20TempC = 24; // 24°C
const day21TempF = 73; // 73°F
const day22TempC = 21; // 21°C
const day23TempF = 79; // 79°F
const day24TempC = 27; // 27°C
const day25TempF = 71; // 71°F
const day26TempC = 19; // 19°C
const day27TempF = 74; // 74°F
const day28TempC = 17; // 17°C
const day29TempF = 76; // 76°F
const day30TempC = 29; // 29°C

// Conversion functions
const convertFtoC = (tempInFahrenheit) => (tempInFahrenheit - 32) * 5 / 9;
const convertCtoF = (tempInCelsius) => (tempInCelsius * 9 / 5) + 32;

// Sum the temperatures in Celsius and Fahrenheit separately
let tot_temperature_in_fahrenheit = 0;
let tot_temperature_in_celsius = 0;

// Fahrenheit to Celsius conversion for each day in Fahrenheit
tot_temperature_in_fahrenheit += day1TempF;  // 32°F
tot_temperature_in_fahrenheit += day3TempF;  // 70°F
tot_temperature_in_fahrenheit += day5TempF;  // 80°F
tot_temperature_in_fahrenheit += day7TempF;  // 72°F
tot_temperature_in_fahrenheit += day9TempF;  // 68°F
tot_temperature_in_fahrenheit += day11TempF; // 75°F
tot_temperature_in_fahrenheit += day13TempF; // 82°F
tot_temperature_in_fahrenheit += day15TempF; // 65°F
tot_temperature_in_fahrenheit += day17TempF; // 77°F
tot_temperature_in_fahrenheit += day19TempF; // 78°F
tot_temperature_in_fahrenheit += day21TempF; // 73°F
tot_temperature_in_fahrenheit += day23TempF; // 79°F
tot_temperature_in_fahrenheit += day25TempF; // 71°F
tot_temperature_in_fahrenheit += day27TempF; // 74°F
tot_temperature_in_fahrenheit += day29TempF; // 76°F

// Convert Celsius to Fahrenheit and add to sum of Fahrenheit
tot_temperature_in_celsius += convertCtoF(day2TempC);  // 25°C to °F
tot_temperature_in_celsius += convertCtoF(day4TempC);  // 18°C to °F
tot_temperature_in_celsius += convertCtoF(day6TempC);  // 15°C to °F
tot_temperature_in_celsius += convertCtoF(day8TempC);  // 28°C to °F
tot_temperature_in_celsius += convertCtoF(day10TempC); // 20°C to °F
tot_temperature_in_celsius += convertCtoF(day12TempC); // 23°C to °F
tot_temperature_in_celsius += convertCtoF(day14TempC); // 30°C to °F
tot_temperature_in_celsius += convertCtoF(day16TempC); // 22°C to °F
tot_temperature_in_celsius += convertCtoF(day18TempC); // 26°C to °F
tot_temperature_in_celsius += convertCtoF(day20TempC); // 24°C to °F
tot_temperature_in_celsius += convertCtoF(day22TempC); // 21°C to °F
tot_temperature_in_celsius += convertCtoF(day24TempC); // 27°C to °F
tot_temperature_in_celsius += convertCtoF(day26TempC); // 19°C to °F
tot_temperature_in_celsius += convertCtoF(day28TempC); // 17°C to °F
tot_temperature_in_celsius += convertCtoF(day30TempC); // 29°C to °F

// Calculating the average temperature in Fahrenheit and Celsius
const avg_temperature_in_fahrenheit = (tot_temperature_in_fahrenheit + tot_temperature_in_celsius) / 30; // Total sum of all temperatures divided by 30
const avg_temperature_in_celsius = (tot_temperature_in_celsius / 30); // Average of temperatures in Celsius

// Output the results
console.log("Total Temperature in Fahrenheit: " + tot_temperature_in_fahrenheit);
console.log("Total Temperature in Celsius: " + tot_temperature_in_celsius);
console.log("Average Temperature in Fahrenheit: " + avg_temperature_in_fahrenheit);
console.log("Average Temperature in Celsius: " + avg_temperature_in_celsius);


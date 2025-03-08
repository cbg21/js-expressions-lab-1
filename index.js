// Temperature Data
let day1TempF = 32;
let day2TempC = 25;
let day3TempF = 70;
let day4TempC = 18;
let day5TempF = 80;
let day6TempC = 15;
let day7TempF = 72;
let day8TempC = 28;
let day9TempF = 68;
let day10TempC = 20;
let day11TempF = 75;
let day12TempC = 23;
let day13TempF = 82;
let day14TempC = 30;
let day15TempF = 65;
let day16TempC = 22;
let day17TempF = 77;
let day18TempC = 26;
let day19TempF = 78;
let day20TempC = 24;
let day21TempF = 73;
let day22TempC = 21;
let day23TempF = 79;
let day24TempC = 27;
let day25TempF = 71;
let day26TempC = 19;
let day27TempF = 74;
let day28TempC = 17;
let day29TempF = 76;
let day30TempC = 29;

// Convert Temperatures to Fahrenheit
let day2TempF = (day2TempC * 9 / 5) + 32;
let day4TempF = (day4TempC * 9 / 5) + 32;
let day6TempF = (day6TempC * 9 / 5) + 32;
let day8TempF = (day8TempC * 9 / 5) + 32;
let day10TempF = (day10TempC * 9 / 5) + 32;
let day12TempF = (day12TempC * 9 / 5) + 32;
let day14TempF = (day14TempC * 9 / 5) + 32;
let day16TempF = (day16TempC * 9 / 5) + 32;
let day18TempF = (day18TempC * 9 / 5) + 32;
let day20TempF = (day20TempC * 9 / 5) + 32;
let day22TempF = (day22TempC * 9 / 5) + 32;
let day24TempF = (day24TempC * 9 / 5) + 32;
let day26TempF = (day26TempC * 9 / 5) + 32;
let day28TempF = (day28TempC * 9 / 5) + 32;
let day30TempF = (day30TempC * 9 / 5) + 32;

// Convert Temperatures to Celsius
let day1TempC = (day1TempF - 32) * 5 / 9;
let day3TempC = (day3TempF - 32) * 5 / 9;
let day5TempC = (day5TempF - 32) * 5 / 9;
let day7TempC = (day7TempF - 32) * 5 / 9;
let day9TempC = (day9TempF - 32) * 5 / 9;
let day11TempC = (day11TempF - 32) * 5 / 9;
let day13TempC = (day13TempF - 32) * 5 / 9;
let day15TempC = (day15TempF - 32) * 5 / 9;
let day17TempC = (day17TempF - 32) * 5 / 9;
let day19TempC = (day19TempF - 32) * 5 / 9;
let day21TempC = (day21TempF - 32) * 5 / 9;
let day23TempC = (day23TempF - 32) * 5 / 9;
let day25TempC = (day25TempF - 32) * 5 / 9;
let day27TempC = (day27TempF - 32) * 5 / 9;
let day29TempC = (day29TempF - 32) * 5 / 9;

// Calculate Total Temperature in Fahrenheit
let tot_temperature_in_fahrenheit = day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF + day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF + day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF + day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF + day25TempF + day26TempF + day27TempF + day28TempF + day29TempF + day30TempF;

// Calculate Total Temperature in Celsius
let tot_temperature_in_celsius = day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC + day7TempC + day8TempC + day9TempC + day10TempC + day11TempC + day12TempC + day13TempC + day14TempC + day15TempC + day16TempC + day17TempC + day18TempC + day19TempC + day20TempC + day21TempC + day22TempC + day23TempC + day24TempC + day25TempC + day26TempC + day27TempC + day28TempC + day29TempC + day30TempC;

// Calculate Average Temperature in Fahrenheit
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

// Calculate Average Temperature in Celsius
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//Console logs
console.log("Total Temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total Temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average Temperature in Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average Temperature in Celsius:", avg_temperature_in_celsius);

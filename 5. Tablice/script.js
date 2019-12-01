let numberArray = [1, 2, 3];
let stringArray = ['jeden', 'dwa', 'trzy'];
let booleanArray = [true, false, true];

console.log(numberArray);
console.log(stringArray);
console.log(booleanArray);

console.log(numberArray[1]); /* licząc od 0*/
stringArray[2] = 'cztery;'
console.log(stringArray);

booleanArray.push(false); /* dodanie elementu do tablicy*/
console.log(booleanArray);

console.log(stringArray.includes('dwa')); /* sprawdza czy w tablicy znajduje się dany element*/

console.log(booleanArray.length); /* sprawdza ilość elementów tablicy*/
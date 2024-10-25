#!/usr/bin/node

const args = process.argv;
const num1 = parseInt(args[2]);
const num2 = parseInt(args[3]);

if (!isNaN(num1) && !isNaN(num2)) {
	const sum =  num1 + num2; 
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
} else {
	console.log(`Enter a valid number`);
}

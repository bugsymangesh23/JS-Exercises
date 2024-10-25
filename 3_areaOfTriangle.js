#!/usr/bin/node

const args = process.argv;
const base = parseFloat(args[2]);
const height = parseFloat(args[3]);

// check if number is valid
if(!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
	const area = 0.5 * base * height;
	console.log(`The area of the rectangle is: ${area}`);
} else {
	console.log(`Enter a non-negative number!`);
}

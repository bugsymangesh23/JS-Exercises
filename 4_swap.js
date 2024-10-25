#!/usr/bin/node

const args = process.argv;
let num1 = parseFloat(args[2]);
let num2 = parseFloat(args[3]);

if(!isNaN(num1) && !isNaN(num2)){
	let temp = num1;
	num1 = num2;
	num2 = temp;

	console.log(`After swapping we get: ${num1} and ${num2}`);
}

#!/usr/bin/node

const args = process.argv;
num = parseInt(args[2]);

if(!isNaN(num) && num > 0) {
	const sqrt = Math.sqrt(num);
	console.log(`The squareroot of ${num} is: ${sqrt}`);
	} else {
		console.log(`Enter a non-negative number`);
	}

#!/usr/bin/node

const args = process.argv;
const a = parseFloat(args[2]);
const b = parseFloat(args[3]);
const c = parseFloat(args[4]);

//the discriminant equation 
 const discr = b**2-4 *a*c;

 if (!isNaN(a) && !isNaN(b) && !isNaN(c)){
	 if(discr > 0){
		 let root1 = (-b + Math.sqrt(discr)) / (2*a);
		 let root2 = (-b - Math.sqrt(discr)) / (2*a);
		 console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
	 } else if(discr === 0) {
		 let root = -b/(2*a);
		 console.log(`The quadratic equation has a repeated root ${root}`);
	 } else {
		 console.log(`The equation has complex roots`);
	 }
 } else {
		 console.log(`Enter valid coefficients`);
 }

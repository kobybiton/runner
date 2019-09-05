console.log(process.argv)

/*let counter = 0;
setInterval(() => { 
	counter++; 
	console.log(counter) 
}, 3000);*/

function sum(a, b) {
	return Number(a) + Number(b);  
}

console.log(sum(process.argv[2], process.argv[3]));
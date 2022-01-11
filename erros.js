console.log('Hello world! Executando script.js');

const numero = 1;

//const minhaVar = "oi";

console.log(numero);

console.log(minhaVar);



const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

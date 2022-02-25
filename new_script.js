console.log('Hello world! Executando script.js');

//tipagem dinamica
//untyped

let minhaVar = 567;

minhaVar = 'texto';

minhaVar = true;


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

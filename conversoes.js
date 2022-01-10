console.log('Executando script.js');

//tipo de dado

// booleanos

//conversão implícita

const numero = 456;

const numeroString = Number('456a');

console.log(numero);

console.log(numeroString);

//Number() transformar numero uma string

//String() transformar uma string em um numero 

console.log(numero + numeroString);



//conversão explícita






const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

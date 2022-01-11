console.log('Hello world! Executando script.js');

function apresentar(nome) {

	return `meu nome � ${nome}`;
}

//Arrow Function
const apresentarArow = nome => `meu nome � ${nome}`;

const soma = (num1, num2) => num1 + num2;


//Arrow Function com + de 1 linha de Instru��o

const somaNumerosPequenos = (num1, num2) => {

	if (num1 || num2 > 10) {

		return "somente n�meros de 1 a 9"

	} else {

		return num1 + num2;

    }
}

// Hoisting: Arrow Function se comporta como Express�o de Fun��o

// operador maior ou igual que
// >=

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

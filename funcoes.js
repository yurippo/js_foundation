console.log('Hello world! Executando script.js');

//let x = '';

//console.log(x);

//x = 'oi';

// DECLARA��O DE FUN��O

// 1) momento declara a fun��o e diz o que ela faz

					  //string	
function imprimeTexto (texto) {

	console.log(texto);
}

// 2) Momento em que se executa a fun��o (1 ou mais vezes)

imprimeTexto(soma());

// tr�s formas de escrever fun��es

function soma() {
	//outros c�digos
	//v�rios console.log()

	return 2 + 2;
}

//console.log(soma());





const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

console.log('Hello world! Executando script.js');

//let x = '';

//console.log(x);

//x = 'oi';

// DECLARAÇÃO DE FUNÇÃO

// 1) momento declara a função e diz o que ela faz

					  //string	
function imprimeTexto (texto) {

	console.log(texto);
}

// 2) Momento em que se executa a função (1 ou mais vezes)

imprimeTexto(soma());

// três formas de escrever funções

function soma() {
	//outros códigos
	//vários console.log()

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

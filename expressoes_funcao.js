console.log('Hello world! Executando script.js');

// declara��o de fun��o

function minhaFuncao(param) {

//	//bloco de c�digo
	
}

//minhaFuncao("param");


// express�o de fun��o

//console.log(soma(1,1));

const soma = function (num1, num2) {return num1 + num2}

//console.log(soma(1, 1));

//diferen�a principal: HOISTING
//fun��es e var s�o "listadas no topo do arquivo.



console.log(apresentar());

function apresentar() {

	return "ol�";
}



const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

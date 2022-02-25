console.log('Hello world! Executando script.js');

// declaração de função

function minhaFuncao(param) {

//	//bloco de código
	
}

//minhaFuncao("param");


// expressão de função

//console.log(soma(1,1));

const soma = function (num1, num2) {return num1 + num2}

//console.log(soma(1, 1));

//diferença principal: HOISTING
//funções e var são "listadas no topo do arquivo.



console.log(apresentar());

function apresentar() {

	return "olá";
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

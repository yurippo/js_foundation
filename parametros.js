console.log('Hello world! Executando script.js');


//parametros de fun��o

function soma(numero1 , numero2) {

	return numero1 + numero2 ;

}

console.log(soma(2, 2));

console.log(soma(245, 20));

console.log(soma(-500, 600));

// par�metros Vs argumentos pode se usar um ou outro eles s�o a mesma coisa

// ordem dos parametros


function nomeIdade(nome, idade) {

	return `meu nome � ${nome} e minha idade � ${idade}`;

}

//console.log(nomeIdade(40, "Juliana"));

function multiplica(numero1 = 1, numero2 = 1) {

	return numero1 * numero2;
}
                            //9         //6
console.log(multiplica(soma(4, 5)));


function comParametro(param) {
	console.log(param);
}
comParametro();




const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

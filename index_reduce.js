console.log('Executando script.js');

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0);

console.log(soma) //170

//Vamos reescrever o reduce()
//de uma forma um pouco mais extensa para separar melhor as partes do c�digo:

//const soma = numeros.reduce(function (acum, atual) {
//	return atual + acum
//}, 0)

//Uma terceira forma de reescrever seria escrevendo
//a fun��o callback fora do reduce():

//function operacaoNumerica(acum, atual) {
//	return atual + acum
//}

//const soma = numeros.reduce(operacaoNumerica, 0)


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});


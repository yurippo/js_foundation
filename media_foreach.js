console.log('Executando script.js');

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;


//Callback function é uma função que chama outra função nesse caso a arrow function tbm
//foi usada

//Essa função tem o nome de callback e vai ser executada para cada elemento do array,
//sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual,
//respectivamente.

notas.forEach(nota => {

	//a função foreach ja pega automaticamente o index não precisa passar o nota[i] como fizemos antes

	somaDasNotas += nota
});

//a mesma função tbm pode ser escrita dessa forma
//notas.forEach(function (nota) {

//	somaDasNotas += nota

//});

let media = somaDasNotas / notas.length

console.log(media);


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

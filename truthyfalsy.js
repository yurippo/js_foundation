console.log('Executando script.js');

//boolean

const usuarioLogado = true

const contaPaga = false

//truthy ou falsy

// 0 => false

// 1 => true

console.log(0 == false)

console.log("" == false)


// undefined 

//null -> vazio ou nada

let minhaVar;

let varNull = null;

console.log(minhaVar);

console.log(varNull);

let numero = 3;

let texto = 'Alura';

console.log(typeof numero);

console.log(typeof texto);



console.log(typeof minhaVar);

console.log(typeof varNull);







const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

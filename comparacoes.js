console.log('Hello world! Executando script.js');

// == (compara��o impl�cita)

const numero = 5;

const texto = "5";

console.log(numero === texto);

//typeof

console.log(typeof numero);

console.log(typeof texto);

// == s� compara o valor

// === compara o valor e o tipo de dado 

// boas praticas convers�es expl�citas e usar os === iguais


Number()

String()





const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

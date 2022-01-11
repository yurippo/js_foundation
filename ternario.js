console.log('Hello world! Executando script.js');

const idadeMinima = 18;

const idadeCliente = 16;

//if (idadeCliente >= idadeMinima) {

//	console.log("cerveja");

//} else {

//	console.log("leite");
//}

            //condição                    //true      //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "leite");


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

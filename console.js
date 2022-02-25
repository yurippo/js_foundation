console.log('Hello world! Executando script.js');

//log é um registro que é criado no nosso console que não é mostrado na nossa app
//pode ser colocado qualquer registro nele podendo ser um número, uma string, uma variável
//o que agente quiser

const minhaVar = 0;

console.log(minhaVar / 0);

//console.log("eu sou um texto");
//console.log(minhaVar);


// tratamento de erro!

console.error("deu erro!");

console.log(new Error("deu erro"));
console.error("deu erro");




const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

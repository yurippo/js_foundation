console.log('Hello world! Executando script.js');

//log � um registro que � criado no nosso console que n�o � mostrado na nossa app
//pode ser colocado qualquer registro nele podendo ser um n�mero, uma string, uma vari�vel
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

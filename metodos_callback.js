console.log('Executando script.js');

const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num) {
	return num * 10
}

//const arraySomada = arrayNums.map(multiplicaPorDez)

//Para entender melhor, vamos reescrever o código, passando
//a função multiplicaPorDez(num) direto como parâmetro do map():


const arraySomada = arrayNums.map(num => num * 10)

console.log(arraySomada)

console.log(arraySomada)


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});


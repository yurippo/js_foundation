console.log('Executando script.js');

//https://github.com/git-guides/git-add

//tipo de dado

// booleanos

//convers�o impl�cita

const numero = 456;

const numeroString = Number('456a');

console.log(numero);

console.log(numeroString);

//Number() transformar numero uma string

//String() transformar uma string em um numero 

console.log(numero + numeroString);



//convers�o expl�cita



let telefone = 12341234;
console.log("O telefone � " + String(telefone));
// teremos a convers�o do n�mero 12341234 para uma string �12341234� 
//e assim poderemos fazer a concatena��o entre as strings


let usuarioConectado = false;
console.log(String(usuarioConectado));
// teremos a convers�o da booleana para string,
//nesse caso teremos uma string �false�.
usuarioConectado = true;
console.log(String(usuarioConectado));
// agora teremos uma string �true�.

// Vamos calcular a �rea de um ret�ngulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura));
// teremos a convers�o de String para n�meros, possibilitando 
//a realiza��o da da multiplica��o


let largura = "10";
let altura = "5";
console.log(+ largura * + altura);
// teremos a convers�o de String para n�meros realizado usando o + antes das vari�veis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a vari�vel meuNome n�o cont�m apenas 
//n�meros ele retorna o erro NaN(Not a Number, n�o � n�mero);
console.log(+ meuNome); // a convers�o tamb�m retornar� NaN

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a convers�o da booleana para n�mero, 
//sendo que false(falso) retorna o n�mero 0.
usuarioConectado = true;
console.log(Number(usuarioConectado));
// agora teremos a convers�o de true (verdadeiro) para o n�mero 1.








const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
	console.log('Thank you for your valuable feedback:', answer);
	rl.close();
});

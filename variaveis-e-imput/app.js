const readLine = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstateString = 'Minha Primeira Constante ';
console.log(minhaPrimeiraConstateString);

let leituraDeCampo;
readLine.question('Irfome sua idade:', input => {
    leituraDeCampo = input;
    console.log (`o usuario digitou: ${leituraDeCampo}`);
});
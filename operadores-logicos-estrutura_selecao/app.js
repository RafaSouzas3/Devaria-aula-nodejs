const readLine = require('readline').createInterface({
    input: process.stdin ,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se voce pode entra no kart');
console.log('Alem das suas verificacoes, precisamos verificar se voce esta na lista de presenca do horario');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if(ano > 2004){
        console.log('Voce nao tem 18 anos');
    }else{
        readLine.question("Voce tem habilitacao ? (SIM/NAO)", temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "SIM" )){
                console.log('Voce nao tem habilitacao pra entrar no kart');
            }else{
                readLine.question('Qual seu nome?', nome => {
                    switch ( nome ) {
                        case 'Douglas':
                        console.log('Bem vindo ao kart Douglas');
                        break;
                        case 'Rafael':
                            console.log('Bem vindo ao kart Rafael');
                            break;
                        default:
                            console.log('Seu nome nao foi indetificado na lista de presenca')
                    }
                });
            }
        })
    }
});
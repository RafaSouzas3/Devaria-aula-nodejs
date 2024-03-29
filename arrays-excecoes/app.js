try{
    const listaDeProdutosDisponiveis = [
        'Pao',
        'Leite',
        'Cafe',
        'Laranja',
        'Macarrao',
        'Sabonete',
        'Detergente',
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDiponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    });
    listaDeProdutosSolicitadosDiponiveis.forEach(produto => console.log (`Este produto nos temos: ${produto}`));
    
    const listaDeProdutosSolicitadosNaoDiponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    });
    listaDeProdutosSolicitadosNaoDiponiveis.forEach(argumento => console.log(`Este produto nos nao temos; ${argumento}`));
    
    const listaDeProdutosOrdenados = listaDeProdutosDisponiveis.sort();
    //  listaDeProdutosDisponiveis.sort();
     listaDeProdutosOrdenados.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));
    
}catch(e){
    console.log('Nao foi possivel executar a compra')

}
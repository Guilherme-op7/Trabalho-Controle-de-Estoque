import prompt from 'prompt-sync'
let ler = prompt();








//Função de Apresentar menu Lucas Gabriel

export async function MostraMenu () {

    let funcao = 1;

    while (funcao !== 0) {

    

    console.log("=== SISTEMA DE ESTOQUE 🎮 ===")
    
    await sleep(200)
    console.log("0. Sair")
    await sleep(200)
    console.log("1. Cadastrar novo produto")
    await sleep(200)
    console.log("2. Listar todos os produtos")
    await sleep(200)
    console.log("3. Adicionar Quantidade ao estoque")
    await sleep(200)
    console.log("4. Retirar quantidade do estoque")
    await sleep(200)
    console.log("5. Apagar produto")
    await sleep(200)
    console.log("6. Calcular valor do Estoque")
    await sleep(200)
    console.log("7. Buscar produto pelo nome")
    
    await sleep(200)

    console.log("Qual função você irá usar?")
    funcao = Number(ler())
    
    if (funcao == 1) {
        //função não foi criada ainda
    }

    else if (funcao == 2) {
        //função não foi criada ainda
    }

    else if (funcao == 3) {
        //função não foi criada ainda
    }

    else if (funcao == 4) {
        //função não foi criada ainda
    }

    else if (funcao == 5) {
       apagarProduto();
    }

    else if (funcao == 6) {
        calcularValorEstoque();
    }

    else if (funcao == 7) {

    }

    else if (funcao == 0) {
        console.log("Saindo do sistema...")
    }

    else {
        console.log("Opção Invalida!")
    }
}
}

// Quando todas a funções do menu estiverem criadas irei alterar meu código (Lucas)


  function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
}







export function apagarProduto(){
    console.log('Numero do produto para retirar do estoque')
    let pos = Number(ler()) - 1;
    
    if(pos >= 0 && pos < estoque.length){
       
        console.log('Digite a quantidade que você deseja retirar: ');
        let qtd = Number(ler())
        estoque [pos].quantidade -= qtd;

        console.log('#Estoque atualizado com sucesso!')
    }
    
    else {
        console.log('#Produto invalido')
    }
}


//função de somar o total do estoque -- Ana Clara 
 export function calcularValorEstoque (){ 
    let valorTotal= 0; //Valor total começa com 0 
     
    for (let produtos of produtos){
        valorTotal + produco.preco * produto.quantidade; //Calcular o valor total dos produtos e adiciona á valorTotal
    }

    console.log(`O valor total do estoque é: ${valorTotal}`)//Apresenta o valor total do estoque ao usuário
 }


  export function buscarprodutopelonome (){
    console.log('digita o nome do produto que voce deseja buscar')
    let nomeproduto = ler ();

    if (nomeproduto === produto [produtos].nome) {
        console.log(`o nome do produto é ${nome}` )
    }

    else {
        ('nenhum produto encotrado')
    }
  }
import prompt from 'prompt-sync'
let ler = prompt();























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

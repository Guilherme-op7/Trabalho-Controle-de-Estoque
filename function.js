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

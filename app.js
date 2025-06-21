import prompt from 'prompt-sync'
let ler = prompt();

import { apagarProduto, calcularValorEstoque } from './function.js';
import { adicionarEstoque, buscarProduto, Cadastrarproduto, listarprodutos, Retirardoestoque } from '../function.js';



//Função de Apresentar menu Lucas Gabriel

async function MostraMenu () {

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
       Cadastrarproduto();
    }

    else if (funcao == 2) {
        listarprodutos();
    }

    else if (funcao == 3) {
       adicionarEstoque();
    }

    else if (funcao == 4) {
        Retirardoestoque();
    }

    else if (funcao == 5) {
       apagarProduto();
    }

    else if (funcao == 6) {
        calcularValorEstoque();
    }

    else if (funcao == 7) {
        buscarProduto();
    }

    else if (funcao == 0) {
        console.log("Saindo do sistema...")
    }

    else {
        console.log("Opção Invalida!")
    }
}
}

MostraMenu();




  function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
}

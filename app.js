// Importando o prompt-sync pra entrada dos dados pelo terminal
import prompt from 'prompt-sync'
let ler = prompt();

// importando todas as funções que foram feitas no outro arquivo chamado function.js
import { adicionarestoque, apagarproduto, atualizarproduto, buscarproduto, cadastrarproduto, calcularvalorestoque, listarestoquebaixo, listarprodutos, retirardoestoque } from './function.js';

// função principal que tem o menu interativo
async function MostraMenu () {

    let funcao = 1;
    while (funcao !== 0) { // continua repetindo ate o usuario escolher sair
    // mostra o menu com pausas entre as linhas
    console.log(" --- 🚀 Controle de Estoque Info Mais 🚀 ---")
    
    await sleep(500)
    console.log("\n 1 - ✏️ Cadastrar novo produto")
    await sleep(500)
    console.log("\n 2 - 📜 Listar todos os produtos")
    await sleep(500)
    console.log("\n 3 - 🛒 Adicionar Quantidade ao estoque")
    await sleep(500)
    console.log("\n 4 - 🛒❌ Retirar quantidade do estoque")
    await sleep(500)
    console.log("\n 5 - ❌ Apagar produto")
    await sleep(500)
    console.log("\n 6 - 📈 Calcular valor do Estoque")
    await sleep(500)
    console.log("\n 7 - 🔍 Buscar produto pelo nome")
    await sleep(500)
    console.log('\n 8 - 🛒✏️ Listar produtos com estoque baixo')
    await sleep(500)
    console.log('\n 9 - ✏️ 🔍 Atualizar produto pelo nome ')
    console.log("\n 0 - 🚪 Sair")
    await sleep(500)
    
    //verifica a opção do usuario
    console.log("Qual opção voce deseja?")
    funcao = Number(ler())
    
    
    // verifica qual opção o usuario escolheu e chama a função
    if (funcao == 1) {
        cadastrarproduto();
    }

    else if (funcao == 2) {
        listarprodutos();
    }

    else if (funcao == 3) {
        adicionarestoque();
    }

    else if (funcao == 4) {
        retirardoestoque();
    }

    else if (funcao == 5) {
        apagarproduto();
    }

    else if (funcao == 6) {
        calcularvalorestoque();
    }

    else if (funcao == 7) {
        buscarproduto();
    }

    else if (funcao == 8 ) {
        listarestoquebaixo();
    }

    else if (funcao == 9) {
        atualizarproduto();
    }

    else if (funcao == 0) {
        await sleep (200)
        console.log("🚪 Saindo do sistema...")
    }

    else {
        console.log("❌ Opção Invalida!")
    }
}
}

// inicia o menu interativo
MostraMenu();

// função que pausa o codigo por um tempo, que da a sensação de carregamento de algo
function sleep(milisegundos) {
return new Promise((ok, nok) => {
setTimeout(ok, milisegundos);
})
}

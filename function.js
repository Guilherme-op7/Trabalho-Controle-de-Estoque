import prompt from 'prompt-sync'
let ler = prompt();

let estoque = [
  {
    nome: 'The Last of Us Part II',
    categoria: 'jogo',
    plataforma: 'PS5',
    preco: 249.90,
    quantidade: 10
  },
  {
    nome: 'Xbox Series X',
    categoria: 'console',
    plataforma: 'Xbox',
    preco: 3999.00,
    quantidade: 5
  },
  {
    nome: 'Controle DualSense',
    categoria: 'acessório',
    plataforma: 'PS5',
    preco: 399.90,
    quantidade: 15
  },
  {
    nome: 'Nintendo Switch OLED',
    categoria: 'console',
    plataforma: 'Nintendo Switch',
    preco: 2999.00,
    quantidade: 8
  },
  {
    nome: 'Cyberpunk 2077',
    categoria: 'jogo',
    plataforma: 'PC',
    preco: 199.90,
    quantidade: 20
  },
  {
    nome: 'Headset Gamer HyperX',
    categoria: 'acessório',
    plataforma: 'Multi',
    preco: 350.00,
    quantidade: 12
  },

  {
    nome: 'Impressora 3D',
    categoria: 'Utilidades',
    plataforma: 'Informatica',
    preco: 8050.00,
    quantidade: 90
  }
];


export function Cadastrarproduto() {
    console.log('Nome do produto: 📘')
    let nome = ler();

    console.log('Categoria: (Jogo, console, acessorio): 💻')
    let categoria = ler();

    console.log('Plataforma (PS5, Xbox, PC, Nintendo Switch): 🖥️');
    let plataforma = ler();

    console.log('Preço: R$ ');
    let preco = Number(ler());

    console.log('Digite a quantidade inicial: 💵')
    let quantidade = Number(ler());

    let produto = {
        nome,
        categoria,
        plataforma,
        preco,
        quantidade,
    };

    estoque.push(produto);
    console.log('✅ Produto cadastrado com sucesso!')
}



export async function listarprodutos() {
  if (estoque.length === 0) {
    console.log('🛒 O estoque está vazio!');
    return;
  }

  console.log('------ LISTA DE PRODUTOS --------');

  for (let i = 0; i < estoque.length; i++) {
    let produto = estoque[i];
    console.log(`\nProduto ${i + 1}:`);

    console.log(`Nome: ${produto.nome}`);

    console.log(`Categoria: ${produto.categoria}`);

    console.log(`Plataforma: ${produto.plataforma}`);

    console.log(`Preço: R$ ${produto.preco}`);

    console.log(`Quantidade em estoque: ${produto.quantidade}`);
  }
}

// estoque baixo riquelme



export function adicionarEstoque() {
    listarprodutos();

    console.log('Numero do produto para adicionar estoque: ')
    let posicao = Number(ler()) -1;

    if(posicao >= 0 && posicao < estoque.length){

        console.log('Digite a quantidade a se adicionar: ');
        let qtd = Number(ler()) 
        estoque[posicao].quantidade += qtd;

        console.log('✅ Estoque atualizado com sucesso!');

    }

    else {
        console.log('Produto invalido!')
    }
}



export function Retirardoestoque(){
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

export async function  buscarProduto() {
    listarprodutos();
    
    console.log('Digite a Plataforma do produto: ');
    let plataformaa = ler();
    
    for(let i = 0; i < estoque.length; i++) {
        if(estoque[i].plataforma.toLowerCase() == plataformaa.toLowerCase()) {
            console.log(`🔎 Produto encontrado:`, estoque[i])
        }
    }
}

export function apagarProduto() {
    listarprodutos();

    console.log('Numero produto a ser apagado: ');
    let posicao = Number(ler()) -1;

    if(posicao >= 0 && posicao < estoque.length) {
        estoque.splice(posicao, 1);
        console.log('✅ Produtos atualizado com sucesso!');
    }

    else {
        console.log('Produto invalido!')
    }
}

    export function atualizarProduto() {
    listarprodutos();

    console.log('\nDigite o número do produto que deseja atualizar:');
    let posicao = Number(ler()) - 1;

    if (posicao >= 0 && posicao < estoque.length) {
        console.log('\nO que você deseja atualizar?');
        console.log('1 - Nome');
        console.log('2 - Preço');
    let opcao = Number(ler());

    if (opcao === 1) {
        console.log('Digite o novo nome do produto:');
        let novoNome = ler();
        estoque[posicao].nome = novoNome;
        console.log('✅ Nome atualizado com sucesso!');
    } 

    else if (opcao === 2) {
        console.log('Digite o novo preço do produto:');
        let novoPreco = Number(ler());
        estoque[posicao].preco = novoPreco;
        console.log('✅ Preço atualizado com sucesso!');
    } 

    else {
        console.log('❌ Opção inválida!');
    }

    } 

    else {
        console.log('❌ Produto inválido!');
    }
}


//função de somar o total do estoque -- Ana Clara 
    export function calcularValorEstoque (){ 
    let valorTotal= 0; //Valor total começa com 0 
        
    for (let produtos of estoque){
        valorTotal += produtos.preco * produtos.quantidade; //Calcular o valor total dos produtos e adiciona á valorTotal
    }

    console.log(`O valor total do estoque é: ${valorTotal}`)//Apresenta o valor total do estoque ao usuário
}

function sleep(mili) {
  return new Promise((ok) => {
    setTimeout(ok, mili);
  })
}
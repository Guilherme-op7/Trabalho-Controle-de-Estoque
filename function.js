// Importando o prompt-sync pra entrada dos dados pelo terminal
import prompt from 'prompt-sync'
let ler = prompt();

// Lista do estoque da loja, array de objetos
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

// Função pra cadastrar um novo produto no estoque
export function cadastrarproduto() {
    console.log('Nome do produto: 📘')
    let nome = ler();

    console.log('Categoria: (Jogo, console, acessorio): 💻')
    let categoria = ler();

    console.log('Plataforma (PS5, Xbox, PC, Nintendo Switch...): 🖥️');
    let plataforma = ler();

    console.log('Preço: 💵 R$  ');
    let preco = Number(ler());

    console.log('Digite a quantidade de produtos do estoque que deseja adicionar: 🛒 ')
    let quantidade = Number(ler());

    let produto = {
        nome,
        categoria,
        plataforma,
        preco,
        quantidade,
    };

    estoque.push(produto); // Adiciona o novo produto no vetor de estoque
    console.log('✅ Produto cadastrado com sucesso!')
}


// Função que mostra todos os produtos cadastrados
export async function listarprodutos() {
  if (estoque.length === 0) {
    console.log('🛒 O estoque está vazio!');
    return;
  }

  console.log('------ 🏆 LISTA DE PRODUTOS 🏆 --------');

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

// Função que mostra apenas os produtos com estoque baixo (10 unidades ou menos)
export function listarestoquebaixo() {
    console.log('\n📉 Produtos com estoque baixo (10 unidades ou menos):');

    let encontrou = false;

    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].quantidade <= 10) {

            console.log(`\nProduto ${i + 1}:`);

            console.log(`Nome: ${estoque[i].nome}`);

            console.log(`Categoria: ${estoque[i].categoria}`);

            console.log(`Plataforma: ${estoque[i].plataforma}`);

            console.log(`Quantidade: ${estoque[i].quantidade}`);

            encontrou = true;

        }
    }

    if (!encontrou) {
        console.log('✅ Nenhum produto com estoque baixo no momento.');
    }
}

// Função para adicionar unidades a um produto no estoque
export function adicionarestoque() {
    listarprodutos();

    console.log('Numero do produto para adicionar estoque: ')
    let posicao = Number(ler()) -1;

    if(posicao >= 0 && posicao < estoque.length){

        console.log('Digite a quantidade a se adicionar: 🛒 ');
        let qtd = Number(ler()) 
        estoque[posicao].quantidade += qtd;

        console.log('✅ Estoque atualizado com sucesso!');

    }

    else {
        console.log('❌ Produto invalido! ❌')
    }
}


// Função para retirar unidades de um produto do estoque
export async function retirardoestoque(){
    listarprodutos();

    console.log('Numero do produto para retirar do estoque')
    let pos = Number(ler()) - 1;
    
    if(pos >= 0 && pos < estoque.length){
       
        console.log('Digite a quantidade que você deseja retirar: ');
        let qtd = Number(ler())
        estoque [pos].quantidade -= qtd;

        console.log('✅ Estoque atualizado com sucesso!')
    }
    
    else {
        console.log('❌ Produto invalido ❌')
    }
}


// Função pra buscar produtos por plataforma
export async function  buscarproduto() {
    listarprodutos();
    
    console.log('🗒️ Digite a Plataforma do produto: ');
    let plataformaa = ler();

    let encontrado = false;
    
    for(let i = 0; i < estoque.length; i++) {
        if(estoque[i].plataforma.toLowerCase() == plataformaa.toLowerCase()) {
            console.log(`🔎 Produto encontrado:`, estoque[i])
            encontrado = true;
        }

      }
      if(!encontrado) {
        console.log('❌ Nenhum produto encontrado ❌')
      }
}

// Função para apagar um produto do estoque
export function apagarproduto() {
    listarprodutos();

    console.log('Numero do produto a ser apagado: ');
    let posicao = Number(ler()) -1;

    if(posicao >= 0 && posicao < estoque.length) {
        estoque.splice(posicao, 1);
        console.log('✅ Produtos atualizado com sucesso!');
    }

    else {
        console.log('❌ Produto invalido!')
    }
}


// Função para atualizar o nome ou o preço de um produto
export function atualizarproduto() {
    listarprodutos();

    console.log('\nDigite o número do produto que deseja atualizar:');
    let posicao = Number(ler()) - 1;

    if (posicao >= 0 && posicao < estoque.length) {
        console.log('\nO que você deseja atualizar?');
        console.log('1 - Nome 📕');
        console.log('2 - Preço 💸');
    let opcao = Number(ler());

    if (opcao === 1) {
        console.log('Digite o novo nome do produto:');
        let novoNome = ler();
        estoque[posicao].nome = novoNome;
        console.log('✅ Nome atualizado com sucesso!');
    } 

    else if (opcao === 2) {
        console.log('Digite o novo preço do produto: 💸');
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


// Função que calcula o valor total do estoque (preço x quantidade de cada item)
export function calcularvalorestoque (){ 
    let valorTotal= 0;  
      
    for (let produtos of estoque){
      valorTotal += produtos.preco * produtos.quantidade; 
    }

    console.log(`O valor total do estoque é: ${valorTotal} 💸`)
}

// função que pausa o codigo por um tempo, que da a sensação de carregamento de algo
function sleep(mili) {
  return new Promise((ok) => {
    setTimeout(ok, mili);
  })
}
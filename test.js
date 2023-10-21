const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

//  MODELO
const Produto = mongoose.model('Produto',
{
    codigo: Number,
    nome: String,
    preco: Number
})

// FUNCOES

// function-CreateProduto
async function criaNovoProduto(produto) {
    await Produto.create(produto)
}

// function-exibetodososprodutos
async function exibeTodosOsProdutos(){
    console.log(await Produto.find())
}

// create novoproduto array
async function criarNovoProduto(arr) {
    const tamanho = arr.length;
    let contador = 0;
    while(contador <= tamanho){ 
        await Produto.create(arr[contador])
     contador++;
    }
}

// FUNCAO DELETAUMPRODUTO
async function deletaProduto(nomeADeletar){
    await Produto.findOneAndDelete({nome: nomeADeletar})
}

// async function exibeUmProduto
async function exibeUmProduto (nomeAProcurar) {
    console.log(await Produto.findOne({nome: nomeAProcurar}))
}
    
// criar-const-array-de-produtos
const produtos = [
    {nome: "calotas", codigo: 10, preco: 140},
    {nome: "sensor de temperatura", codigo: 11, preco: 27},
    {nome: "dosensor de fase", codigo: 12, preco: 355}
]

// Chamada-De-Funcao
    // criarNovoProduto(produtos)
    // atualizaProduto()
    // deletaProduto()
    // exibeTodosOsProdutos()
    // exibeUmProduto()
    

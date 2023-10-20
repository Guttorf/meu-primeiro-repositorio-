const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Produto = mongoose.model('Produto',
{
    codigo: Number,
    nome: String,
    preco: Number
})

// ****************************************

// function-createProdutos//

async function criaNovoProduto(produto) {
    await Produto.create(produto)
}

// criar const array de produtos //

const produtos = [
    {nome: "calotas", codigo: 10, preco: 140},
    {nome: "sensor de temperatura", codigo: 11, preco: 27},
    {nome: "dosensor de fase", codigo: 12, preco: 355}
]
async function criaNovoProduto(produto) {
    while(contador <= tamanho){ 
    const tamanho = array.length
    let contador = 0
    await Produto.create(produto[contador]
        )
    }
    contador++

}



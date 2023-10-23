import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.127017/test");

const ProdutoMovel = mongoose.model("produtos", { 
    nome: String,
    preco: Number,
    codigo: String,
    disponivel: Boolean
} )

async function criaUmproduto (produto) {
    console.log(await produtoModel.())
}
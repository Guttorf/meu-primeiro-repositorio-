import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/test');


const ProdutoModel = mongoose.model("produtos", { 
    nome: String,
    preco: Number,
    codigo: String,
    quantidade: Number,
    disponivel: Boolean
} )

async function criaUmproduto (produto) {
    console.log(await ProdutoModel.create(produto))
}

// Cost é um Array
const produtos = [
    { nome: "Doce de leite 9Kg",
      preco: 195.0,
      codigo: "12ad23s",
      qunatidade: 20,
      disponivel: true
    },
    
    { nome: "Mortade defumada",
      preco: 15.0,
      codigo: "36de35",
      qunatidade: 0,
      disponivel: false
    },
    
    { nome: "Leite",
      preco: 5.0,
      codigo: "21ad23s",
      qunatidade: 12,
      disponivel: true
    },
    
    { nome: "Farinha BTX 25Kg",
      preco: 105.0,
      codigo: "12ad23s",
      qunatidade: 90,
      disponivel: true

    }, 
    
    { nome: "Doce de abobora",
      preco: 1.0,
      codigo: "12avd23s",
      qunatidade: 4,
      disponivel: true

    },
    
    { nome: "Doce de leite",    
      preco: 195.0,
      codigo: "12ad23s",
      qunatidade: 20,
      disponivel: true

    }
]

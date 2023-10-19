// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const CatModelo = mongoose.model('Cat',{
//     raca: String,
//     idade: Number,
//     cor: String
// })

// const CatQueAcheiNaRua = new CatModelo({
//     raca: "Siames",
//     idade: 4,
//     cor: "Marrom"
// })

// CatQueAcheiNaRua.save().then(console.log("Gato salvo com sucesso"))


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Modelodeproduto = mongoose.model('modelodeproduto', {
    produto: String, 
   codigodebarra: Number, 
   name: String, 
   preco: Number

 });
 
 const modelodeproduto = new Modelodeproduto({
     produto:'Bateria 60amp',
    codigodebarra: 134679852,
    name: 'Jupiter',
    preco: 195
 });



 modelodeproduto.save()
 console.log('Bateria salva')

// async function exibe () {
//    console.log(await Modelodeproduto.find())
// }
// exibe()




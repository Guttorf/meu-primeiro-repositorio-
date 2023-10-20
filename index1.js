// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// *********************************************************************

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
    codigodebarra: 2,
    name: 'Jupiter',
    preco: 195
 });


 modelodeproduto.save()
 console.log('Bateria salva')

const Modeloproduto = new modelodeproduto({
   produto:'Bateria 50amp',
  codigodebarra: 1,
  name: 'Conner',
  preco: 155
});






// async function exibe () {
//    console.log(await modelodeproduto.find())
// }
// exibe()

// async function exibeTodosOsProdutos () {
//    console.log(await Modelodeproduto.find())
// }
// exibe()

// async function exibe () {
//    console.log(await Modelodeproduto.findOne())
// }
// exibe()

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// *********************************************************************

const mongoose = require('mongoose');
mongoose.conneect('mongodb://127.0.0.1:27017/test');

const Modelodeproduto = mongoose.model('modelodeproduto', {produto: String, codigodebarras: Number, name: String, preco: Number

 });
 
 const modelodeproduto = new produto({
    produto: 'Bateria',
    codigodebarras: 134679852,
    name: 'Jupiter',
    preco: 195
 })

 modelodeproduto.save()
 console.log('salvou')
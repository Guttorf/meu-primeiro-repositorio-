// // const mongoose = require('mongoose');

// // mongoose.connect('mongodb://127.0.0.1:27017/test');

// // const CatModelo = mongoose.model('Cat',{
// //     raca: String,
// //     idade: Number,
// //     cor: String
// // })

// // const CatQueAcheiNaRua = new CatModelo({
// //     raca: "Siames",
// //     idade: 4,
// //     cor: "Marrom"
// // })

// // CatQueAcheiNaRua.save().then(console.log("Gato salvo com sucesso"))


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Modelodeproduto = mongoose.model('modelodeproduto', {
//     produto: String, 
//    codigodebarra: Number, 
//    name: String, 
//    preco: Number

//  });
 
// //  const modelodeproduto = new Modelodeproduto({
// //      produto:'Bateria 60amp',
// //     codigodebarra: 12,
// //     name: 'Jupiter',
// //     preco: 195
// //  });
// const modelodeproduto = new Modelodeproduto({
//   produto:'oleo 15w40',
//  codigodebarra: 13,
//  name: 'Petronas',
//  preco: 35
// });



//  modelodeproduto.save()
//  console.log('oleo salvo')

// async function exibe () {
//    console.log(await Modelodeproduto.find())
// }
// exibe()




const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

async function main () {
    const cao = mongoose.model('cao',
    {
        idade: Number,
        nome: String,
        raca: String
    })

    cao.create({
      idade: 5,
      nome: 'Jojo',
      raca: 'Golden'
        
    })

    cao.create({
      idade: 100,
      nome: 'Bimo',
      raca: 'chow-chow'
        
})
   cao.save()
   console.log('Cao salvo')
}

    await cao.findOneAndUpdate(
        {idade: 100},
        {
          idade: 100,
          nome: 'Bimo',
          raca: 'chow-chow'
        }
    )

    await cao.findOneAndDelete({})

    
    console.log(await cao.find())

    console.log(await cao.findOne({}))



main()




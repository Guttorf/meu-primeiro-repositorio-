const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const CatModelo = mongoose.model('Cat',{
    raca: String,
    idade: Number,
    cor: String
})

const CatQueAcheiNaRua = new CatModelo({
    raca: "Siames",
    idade: 4,
    cor: "Marrom"
})

CatQueAcheiNaRua.save().then(console.log("Gato salvo com sucesso"))



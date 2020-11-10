let mongoose = require('mongoose')


let typeproductShema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    create: {
        type: Date,
        default: Date.now
    }
});


let typeProduct = module.exports = mongoose.model('typeproduct', typeproductShema);

//cada vez que hagamos una peticion get se ejecuta esto
module.exports.get = function(callback, limit) {
    typeProduct.find(callback).limit(limit);
}
let mongoose = require('mongoose')

let producerShema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    create: {
        type: Date,
        default: Date.now
    }
});


let Producer = module.exports = mongoose.model('producer', producerShema);

//cada vez que hagamos una peticion get se ejecuta esto
module.exports.get = function(callback, limit) {
    Producer.find(callback).limit(limit);
}
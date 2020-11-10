const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:quoc12345@qlch.q7zb4.mongodb.net/QLCH?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(db => console.log('Connection establishe successfully'))        
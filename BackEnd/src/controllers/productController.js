Product = require('../models/ProductsModels');
//let multer = require('multer');
//const upload = multer({ dest: 'upload'});


exports.index = (req, res) => {
    Product.get((err, product) => {
        if (err) {
            res.json({
                status: 'err',
                code: 500,
                message: err
            });
        }

        res.json(product)
    })
}

//create function for new product
exports.new = function(req, res) {
    let product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.typeproduct = req.product
    product.producer = req.producer
   // product.image = '../upload' + req.image;

    product.save(function(err) {
        if (err) {
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        }
        res.json({
            status: 'success',
            code: 200,
            message: 'Register save',
            data: product
        })
    })
}

//create fucntion view products
exports.view = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) {
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        }
        res.json({
            status: 'success',
            code: 200,
            message: 'Registros encontrado',
            data: product
        })
    })
}

exports.update = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err)
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        product.name = req.body.name
        product.price = req.body.price
        product.typeproduct = req.product
        product.producer = req.producer
        //product.image = '../upload' + req.file.filename;
        product.save(function(err) {
            if (err)
                res.json({
                    status: 'err',
                    code: 500,
                    message: err
                })
            res.json({
                status: 'success',
                code: 200,
                message: 'Registro actualizado',
                data: product
            })
        })
    })
}


exports.delete = function(req, res) {
    Product.remove({
        _id: req.params.id
    }, function(err) {
        if (err)
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        res.json({
            status: 'success',
            code: 200,
            message: 'Registros eliminado'
        })
    })
}
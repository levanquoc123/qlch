typeProduct = require('../models/typeProduct');

exports.index = (req, res) => {
    typeProduct.get((err, typeproduct) => {
        if (err) {
            res.json({
                status: 'err',
                code: 500,
                message: err
            });
        }

        res.json(typeproduct)
    })
}

//create function for new product
exports.new = function(req, res) {
    let typeproduct = new typeProduct()
    
    typeproduct.name = req.body.name
    
    typeproduct.save(function(err) {
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
            data: typeproduct
        })
    })
}

//create fucntion view products
exports.view = function(req, res) {
    typeProduct.findById(req.params.id, function(err, typeproduct) {
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
            data: typeproduct
        })
    })
}

exports.update = function(req, res) {
    typeProduct.findById(req.params.id, function(err, typeproduct) {
        if (err)
            res.json({
                status: 'err',
                code: 500,
                message: err
            })
        typeproduct.name = req.body.name
        typeproduct.save(function(err) {
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
                data: typeproduct
            })
        })
    })
}


exports.delete = function(req, res) {
    typeProduct.remove({
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
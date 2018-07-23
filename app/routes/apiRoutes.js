module.exports = function (app, db) {
    // CRUD
    app.get('/api/all', function (req, res) {
        db.Item.findAll({}).then(function (result) {
            res.json(result);
        });
    });

    app.post('/api/new', function (req, res) {
        db.Item.create({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price
        }).then(function (result) {
            res.json(result);
        });
    });

    app.put('/api/update/:id', function (req, res) {
        db.Item.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        });
    });

    app.delete('/api/delete/:id', function (req, res) {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        });
    })
}
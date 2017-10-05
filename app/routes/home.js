var path = require("path");

module.exports = function (app) {

    app.post('/', function (req, res) {

        var item = req.body;

        var gameService = new app.service.GameService();

        gameService.round(item, function (err, results) {

            if(err){
                res.status(400);
                res.json({"message":err});
                return;
            }


            res.json(results);

        });


    });
}


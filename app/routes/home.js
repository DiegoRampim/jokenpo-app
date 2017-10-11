var path = require("path");

module.exports = function (app) {

    app.post('/multi/', function (req, res) {

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

    app.post('/single/', function (req, res) {

        var round = {'players':[]};

        var item = req.body;

        round.players[0] = item;

        var gameService = new app.service.GameService();

        gameService.ia(function (results) {
            round.players[1] = results;
        });

        gameService.round(round, function (err, results) {

            if(err){
                res.status(400);
                res.json({"message":err});
                return;
            }


            res.json(results);

        });
    });
};


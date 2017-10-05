function GameService() {}



/*
/ 1 - Paper; 2 - Stone; 3 - Scissors;
/ Subtract the motion code from the player 1 of the player 2
/
/ If result is -1 or 2 Player1 Win
/ If result is 1 or -2 Player2 Win
/
*/
GameService.prototype.round = function (item, callback) {

    var playedPlayerOne = getCodPlayed(item.players[0].played);
    var playedPlayerTwo = getCodPlayed(item.players[1].played);

    var calc;

    var result = {};

    if(playedPlayerOne > 3 || playedPlayerTwo > 3){
        callback("invalid move", null);
        return;
    }

    calc = (playedPlayerOne - playedPlayerTwo);

    if(calc === 0){

        result.draw = true;
        result.winner = null;

        console.log("Calc = 0 - Result: " + result);

        callback(null, result);

        return;
    }
    if(calc === -1 || calc === 2){
        result.draw = false;
        result.winner = item.players[0];

        callback(null, result);

        return;

    }else{
        result.draw = false;
        result.winner = item.players[1];

        callback(null, result);

        return;
    }


}



getCodPlayed = function (player) {

    if(player == 'PAPER'){
        return 1;
    }

    if(player == 'STONE'){
        return 2;
    }

    if(player == 'SCISSORS'){
        return 3;
    }

    return 100;
}

module.exports = function () {
    return GameService;
}
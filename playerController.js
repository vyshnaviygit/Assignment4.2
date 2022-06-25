//PlayerController.js
//Import Player Model
Player = require('./playerModel');
//For index
exports.index = function (req, res) {
    Player.get(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Player Successfully!",
            data: player
        });
    });
};
//For creating new player
exports.add = function (req, res) {
    var player = new Player();
    player.name = req.body.name;
    player.gamePlayed = req.body.gamePlayed;
    player.receptions = req.body.receptions;
    player.recievingTargets = req.body.recievingTargets;
    player.recievingYards = req.body.recievingYards;
    player.average = req.body.average;
    player.recievingTouchdown = req.body.recievingTouchdown;
    player.longReception = req.body.longReception;
    player.rushingAttempts = req.body.rushingAttempts;
    player.rushingYards = req.body.rushingYards;
    player.sacks = req.body.sacks;
    player.goals = req.body.goals;
    //Save and check error
    player.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: "New Player Added!",
            data: player
        });
    });
};
// View Player
exports.view = function (req, res) {
    Player.findById(req.params.player_id, function (err, player) {
        if (err)
            res.send(err);
        res.json({
            message: 'Player Details',
            data: player
        });
    });
};
// Update Player
exports.update = function (req, res) {
    Player.findById(req.params.player_id, function (err, player) {
        if (err)
            res.send(err);
            player.name = req.body.name ? req.body.name : player.name;
            player.gamePlayed = req.body.gamePlayed ? req.body.gamePlayed : req.body.gamePlayed;
            player.receptions = req.body.receptions ? req.body.receptions : req.body.receptions;
            player.recievingTargets = req.body.recievingTargets ? req.body.recievingTargets : req.body.recievingTargets;
            player.recievingYards = req.body.recievingYards ? req.body.recievingYards : req.body.recievingYards;
            player.average = req.body.average ? req.body.average : req.body.average;
            player.recievingTouchdown = req.body.recievingTouchdown ? req.body.recievingTouchdown : req.body.recievingTouchdown;
            player.longReception = req.body.longReception ? req.body.longReception : req.body.longReception;
            player.rushingAttempts = req.body.rushingAttempts ? req.body.rushingAttempts : req.body.rushingAttempts;
            player.rushingYards = req.body.rushingYards ? req.body.rushingYards : req.body.rushingYards;
            player.sacks = req.body.sacks ? req.body.sacks : req.body.sacks;
            player.goals = req.body.goals ? req.body.goals :req.body.goals;
        //save and check errors
        player.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Player Updated Successfully",
                data: player
            });
        });
    });
};
// Delete Player
exports.delete = function (req, res) {
    Player.deleteOne({
        _id: req.params.player_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Player Deleted'
        })
    })
}

exports.mostTouchdown = function (req, res) {
    Player.get(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        let data = player.reduce((prev, current) => (prev.recievingTouchdown > current.recievingTouchdown) ? prev : current)
        res.json({
            status: "success",
            message: "Got Player Successfully!",
            data: data
        });
    });
};
exports.mostRushingYards = function (req, res) {
    Player.get(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        let data = player.reduce((prev, current) => (prev.rushingYards > current.rushingYards) ? prev : current)
        res.json({
            status: "success",
            message: "Got Player Successfully!",
            data: data
        });
    });
};
exports.leastRushingYards = function (req, res) {
    Player.get(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        let data = player.reduce((prev, current) => (prev.rushingYards < current.rushingYards) ? prev : current)
        res.json({
            status: "success",
            message: "Got Player Successfully!",
            data: data
        });
    });
};
exports.sortedByGoals = function (req, res) {
    Player.get(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        let data = player.sort(function (a, b) { return a.goals < b.goals ? 1 : -1 })
        res.json({
            status: "success",
            message: "Got Player Successfully!",
            data: data
        });
    });
};
exports.mostSacks = function (req, res) {
    Player.get(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        let data = player.reduce((prev, current) => (prev.sacks > current.sacks) ? prev : current)
        res.json({
            status: "success",
            message: "Got Player Successfully!",
            data: data
        });
    });
};
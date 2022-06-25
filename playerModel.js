//PlayerModel.js
var mongoose = require('mongoose');
//schema
var playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gamePlayed: {
        type: Number,
        required: true
    },
    receptions: {
        type: Number,
        required: true
    },
    recievingTargets: {
        type: Number,
        required: true
    },
    recievingYards: {
        type: Number,
        required: true
    },
    average: {
        type: Number,
        required: true
    },
    recievingTouchdown: {
        type: Number,
        required: true
    },
    longReception: {
        type: Number,
        required: true
    },
    rushingAttempts: {
        type: Number,
        required: true
    },
    goals: {
        type: Number,
        required: true
    },
    rushingYards: {
        type: Number,
        required: true
    },
    sacks: {
        type: Number,
        required: true
    }
});
// Export Player Model
var Player = module.exports = mongoose.model('player', playerSchema);
module.exports.get = function (callback, limit) {
    Player.find(callback).limit(limit);
}
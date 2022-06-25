//routes.js
//initialize express router
let router = require('express').Router();
//set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});
//Import player Controller
var playerController = require('./playerController');
// player routes
router.route('/player')
    .get(playerController.index)
    .post(playerController.add);
router.route('/player/:player_id')
    .get(playerController.view)
    .patch(playerController.update)
    .put(playerController.update)
    .delete(playerController.delete);

router.route('/mostTouchdown').get(playerController.mostTouchdown);
router.route('/mostRushingYards').get(playerController.mostRushingYards);
router.route('/leastRushingYards').get(playerController.leastRushingYards);
router.route('/sortedByGoals').get(playerController.sortedByGoals);
router.route('/mostSacks').get(playerController.mostSacks);
//Export API routes
module.exports = router;
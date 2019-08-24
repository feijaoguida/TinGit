const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeControllers');
const DislikeController = require('./controllers/DislikeControllers');

const routes = express.Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

/* routes.get('/', (req, res) => {
    return res.json ({message: `Hello ${req.query.name}`});
});

routes.post('/devs', (req, res) => {
    console.log(req.body);
    //return res.json(req.body);
});
*/

module.exports = routes;
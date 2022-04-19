var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/costume');
var heroine_controller = require('../controllers/heroine');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// costume ROUTES ///
// POST request for creating a costume.
router.post('/costumes', costume_controller.costume_create_post);
// DELETE request to delete costume.
router.delete('/costumes/:id', costume_controller.costume_delete);
// PUT request to update costume.
router.put('/costumes/:id', costume_controller.costume_update_put);
// GET request for one costume.
router.get('/costumes/:id', costume_controller.costume_detail);
// GET request for list of all costume items.
router.get('/costumes', costume_controller.costume_list);

/// heroine ROUTES ///
// POST request for creating a heroine.
router.post('/heroines', heroine_controller.heroine_create_post);
// DELETE request to delete heroine.
router.delete('/heroines/:id', heroine_controller.heroine_delete);
// PUT request to update heroine.
router.put('/heroines/:id', heroine_controller.heroine_update_put);
// GET request for one heroine.
router.get('/heroines/:id', heroine_controller.heroine_detail);
// GET request for list of all heroine items.
router.get('/heroines', heroine_controller.heroine_list);
module.exports = router;

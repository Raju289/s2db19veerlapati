var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var heroine_controller = require('../controllers/heroine');

/// API ROUTE ///
/// heroine ROUTES ///
// GET resources base.
router.get('/resource', api_controller.api);
// POST request for creating a heroine.
router.post('/resource/heroines', heroine_controller.heroine_create_post);
// DELETE request to delete heroine.
router.delete('/resource/heroines/:id', heroine_controller.heroine_delete);
// PUT request to update heroine.
router.put('/resource/heroines/:id', heroine_controller.heroine_update_put);
// GET request for one heroine.
router.get('/resource/heroines/:id', heroine_controller.heroine_detail);
// GET request for list of all heroine items.
router.get('/resource/heroines', heroine_controller.heroine_list);
module.exports = router;

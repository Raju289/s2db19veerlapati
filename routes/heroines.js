var express = require('express');
const heroine_controller = require('../controllers/heroine');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('heroines', { title: 'Search Results' });
});
*/

/* GET costumes */
router.get('/', heroine_controller.heroine_view_all_Page );
/* GET detail heroine page */
router.get('/detail', heroine_controller.heroine_view_one_Page);
/* GET create heroine page */
router.get('/create', heroine_controller.heroine_create_Page);
/* GET create update page */
router.get('/update', heroine_controller.heroine_update_Page);
/* GET delete heroine page */
router.get('/delete', heroine_controller.heroine_delete_Page);

module.exports = router;

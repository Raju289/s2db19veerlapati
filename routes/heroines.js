var express = require('express');
const heroine_controller = require('../controllers/heroine');
var router = express.Router();
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
}
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('heroines', { title: 'Search Results' });
});
*/

/* GET heroines */
router.get('/', heroine_controller.heroine_view_all_Page );
// GET request for one heroine. 
router.get('/heroine/:id', heroine_controller.heroine_detail);
/* GET detail heroine page */
router.get('/detail',secured, heroine_controller.heroine_view_one_Page);
/* GET create heroine page */
router.get('/create',secured, heroine_controller.heroine_create_Page);
/* GET create update page */
router.get('/update',secured, heroine_controller.heroine_update_Page);
/* GET delete heroine page */
router.get('/delete',secured, heroine_controller.heroine_delete_Page);

module.exports = router;

const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

//edit routes
//profile routes

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
//router use edit
// router profile routes



module.exports = router;

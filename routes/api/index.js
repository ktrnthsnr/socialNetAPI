const router = require('express').Router();

// index.js file will import all of the API routes

const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/thoughts', thoughtRoutes);  // prefix of `/thought` to routes created in `thought-routes.js`
router.use('/users', userRoutes);      //  prefix of `/users` to routes created in `user-routes.js`

   
module.exports = router;
// importing express module
const router = require('express').Router();
//importing routes
const htmlRoutes = require('./html/html-routes');


router.use('/', htmlRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 error</h1>');
});

module.exports = router;

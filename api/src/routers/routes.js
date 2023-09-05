const {Router} = require('express');
const serieRouter = require('./serieRouter');
const userRouter = require('./userRoutes');

const router = Router();

router.use('/user', userRouter);
router.use('/series', serieRouter);

module.exports = router
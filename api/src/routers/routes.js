const {Router} = require('express');
const serieRouter = require('./serieRouter');
const userRouter = require('./userRoutes');
const capRouter = require('./capRouter');

const router = Router();

router.use('/user', userRouter);
router.use('/series', serieRouter);
router.use('/caps', capRouter);

module.exports = router
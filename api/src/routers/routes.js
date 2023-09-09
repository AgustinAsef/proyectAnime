const {Router} = require('express');
const serieRouter = require('./serieRouter');
const userRouter = require('./userRoutes');

const router = Router();
 //  establece las rutas para el diferenciar entre las series y los usuarios
router.use('/user', userRouter);
router.use('/series', serieRouter);

module.exports = router
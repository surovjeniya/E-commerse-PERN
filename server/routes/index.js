const {Router} = require('express')
const router = Router()
const typeRoutes = require('./typeRoutes')
const userRoutes = require('./userRoutes')
const brandRoutes = require('./brandRoutes')
const deviceRoutes = require('./deviceRoutes')


router.use('/type',typeRoutes)
router.use('/user',userRoutes)
router.use('/brand',brandRoutes)
router.use('/device',deviceRoutes)

module.exports = router
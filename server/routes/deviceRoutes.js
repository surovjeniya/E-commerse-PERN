const {Router} = require('express')
const router = Router()
const deviceController = require('../controllers/deviceController')

// /api/device
router.post('/',deviceController.create)
router.get('/',deviceController.getAll)
router.get('/:id',deviceController.getOne)


module.exports = router
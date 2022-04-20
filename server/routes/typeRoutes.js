const {Router} = require('express')
const router = Router()
const typeController = require('../controllers/typeController')

// /api/type
router.post('/',typeController.create)
router.get('/',typeController.getAll)

module.exports = router
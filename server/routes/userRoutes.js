const {Router} = require('express')
const router = Router()
const userController = require('../controllers/userController')

// /api/user
router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/auth',userController.check)

module.exports = router
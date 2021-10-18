const router = require('express').Router()
const controller = require('../controllers/UserController')
// const middleware = require('../middleware')

router.post('/login', controller.LogUserIn)
router.post('/register', controller.CreateNewUser)
router.put(
  '/changepassword',
  controller.ChangePassword
)
router.delete(
  '/destroyuser',
  controller.DeleteUserAccount
)
router.get(
  '/session',
  controller.CheckSession
)
module.exports = router

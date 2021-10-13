const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/allcomments', controller.GetAllComments)
router.post('/newcomment', controller.CreateComment)
router.get('/search/id/:comment_id', controller.FindCommentById)

module.exports = router

const router = require('express').Router()
const controller = require('../controllers/CommentController')
// const middleware = require('../middleware')

router.get(
  '/allcomments',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetAllComments
)
router.post(
  '/newcomment',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.CreateComment
)
router.get(
  '/search/id/:comment_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.FindCommentById
)
router.delete(
  '/deletecomment/:comment_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.DeleteComment
)
router.put(
  '/updatecomment/:comment_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.UpdateComment
)


module.exports = router

const router = require('express').Router()
const controller = require('../controllers/CommentController')
// const middleware = require('../middleware')

router.get(
  '/allcomments',
  controller.GetAllComments
)
router.post(
  '/newcomment',
  controller.CreateComment
)
router.get(
  '/search/id/:comment_id',
  controller.FindCommentById
)
router.delete(
  '/deletecomment/:comment_id',
  controller.DeleteComment
)
router.put(
  '/updatecomment/:comment_id',
  controller.UpdateComment
)


module.exports = router

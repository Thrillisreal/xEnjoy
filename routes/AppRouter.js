const router = require('express').Router()
const UserRouter = require('./UserRouter')
const AnimeRouter = require('./AnimeRouter')
const CommentRouter = require('./CommentRouter')

router.use('/user', UserRouter)
router.use('/anime', AnimeRouter)
router.use('/comment', CommentRouter)

module.exports = router

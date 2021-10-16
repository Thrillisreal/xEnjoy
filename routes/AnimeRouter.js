const router = require('express').Router()
const controller = require('../controllers/AnimeController')
// const middleware = require('../middleware')

router.post('/watchlist', controller.postAnime)

module.exports = router
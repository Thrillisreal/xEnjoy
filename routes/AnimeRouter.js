const router = require('express').Router()
const controller = require('../controllers/AnimeController')

router.post('/watchlist', controller.postAnime)

module.exports = router
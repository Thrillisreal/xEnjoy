const { Anime } = require('../models')
const axios = require('axios')



  const postAnime = async (req, res) => {
    try {
      let animeId = req.params.animeId
      const newAnime = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}`) 
      Anime.create({
        name: req.body.name,
        img: req.body.img,
        description: req.body.description
      })
      res.send(newAnime)
    } catch (error) {
      throw error
    }
  }
  
  module.exports = {
    postAnime
  }
  
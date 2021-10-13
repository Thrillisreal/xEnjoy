const { Comment } = require('../comment')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const GetAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body)
    res.send(newComment)
  } catch (error) {
    throw error
  }
}



const FindCommentById = async (req, res) => {
  try{
    const CommentById = await Comment.findByPk(req.params.comment_id)
    res.send(CommentById)
  }catch(error){
  throw error
  }
}


module.exports = {
  GetAllComments,
  CreateComment,
  FindCommentById
}
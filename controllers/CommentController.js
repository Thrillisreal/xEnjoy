const { Comment } = require('../models')
const Sequelize = require('sequelize')

const GetAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

// const CreateComment = async (req, res) => {
//   try {
//     let commentBody = {...req.body}
//     let newComment = await Comment.create(commentBody)
//     res.send(newComment)
//   } catch (error) {
//     throw error
//   }
// }
const CreateComment = async (req, res) => {
  try {
    console.log(req.body, 'request')
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

const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.comment_id } })
    res.send(`Comment deleted with id: ${req.params.comment_id}`)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  console.log(req.params)
  try {
    let commentId = parseInt(req.params.comment_id)
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}


module.exports = {
  GetAllComments,
  CreateComment,
  FindCommentById,
  DeleteComment,
  UpdateComment
}
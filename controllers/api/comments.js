const CommentModel = require('../../models/comment.js'); 

module.exports = {
    create,
    index,
}

async function index(req, res) {
  try {
    
    let comments = await CommentModel.find({user: req.user._id}).sort({createdAt:'desc'}).exec();
    
    res.status(200).json(comments)         
  } catch(err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    // 1. put the order in the database (the data will be incoming via `req.body`)
    await CommentModel.create({  user: req.user._id})
    // 2. send a response to frontend - typically we send back the newly created order, or all the list of orders, or just an 'ok'
    res.status(200).json('ok')
 } catch(err) {
    res.status(400).json(err);
}
}
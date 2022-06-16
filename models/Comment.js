const mongoose = require("mongoose");
const Schema = require('mongoose').Schema;

const commentSchema = new mongoose.Schema(
  {
    text: String
    // user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

  }
  
)
let CommentModel = mongoose.model('Comment', commentSchema)
module.exports = CommentModel;
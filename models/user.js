const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    minLength: 3,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

module.exports = mongoose.model('User', userSchema);
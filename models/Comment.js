const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  showId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  date: { type: Date, required: true },
  comment: { type: String, required: true },
});

const Comment = mongoose.model("Comment", schema);
module.exports = Comment;
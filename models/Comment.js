const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  userId: { type: mongoose.Types.ObjectId, ref: "users", required: true},
  photo:{type:String,required:true},
  comment: { type: String, required: true },
},
 { timestamps:true,},



);

const Comment = mongoose.model("comments", schema);
module.exports = Comment;
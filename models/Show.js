
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  hotelId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
  userId:{type:String, required: true}
});

const show = mongoose.model("show", schema);
module.exports = show;

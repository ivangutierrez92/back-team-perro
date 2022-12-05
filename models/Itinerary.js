const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  cityId: { type: mongoose.Types.ObjectId, ref: "cities", required: true },
  name: { type: String, required: true },
  photo: [{ type: String, required: true }],
  price: { type: Number, required: true, min: 0 },
  duration: { type: Number, required: true, min: 0 },
  description: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  comment: [{ type: mongoose.Types.ObjectId, ref: "comments" }],
});

const Itinerary = mongoose.model('itineraries', schema);
module.exports = Itinerary;

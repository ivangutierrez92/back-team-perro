const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{type: String, required: true},
    photos: {type: String, required: true},
    capacity: {type: String, required: true},
    cityId: {type:mongoose.Type.ObjectId,ref:





})
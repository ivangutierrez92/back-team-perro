// Definir el modelo Show con los siguientes campos:
//         hotelId: referenciar con el id de mongo del hotel que corresponda
//         name: de tipo string, obligatorio
//         description; de tipo string, obligatorio
//         photo: de tipo string, obligatorio
//         price: de tipo number, obligatorio
//         date: de tipo date, obligatorio
//         userId:  referenciar con el id de mongo del usuario admin que corresponda
//     definir script de creación reutilizando los datos del sprint-1

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

const Hotel = require("../models/Hotel");

const controller = {
  create: async (req, res) => {
    try {
      let newHotel = await Hotel.create(req.body);
      res.status(201).json({
        id: newHotel._id,
        success: true,
        message: "the Hotel was created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  read: async (req, res) => {
    
    // let {query} =req; 
      let query ={}
      let order= {}
      
      if(req.query.name){
        query.name ={'$regex': req.query.name, $options: 'i'}
      }
      if(req.query.order){
        order = {name: req.query.order}
      }


    


    try {
      let allHotels = await Hotel.find(query).sort(order).populate("cityId");
      if (allHotels.length) {
        res.status(200).json({
          response: allHotels,
          success: true,
          message: "Hotels found",
        });
      }  else {
        res.status(404).json({
          success: false,
          message: "no hotels found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },


readOne: async (req, res) => {
    let {id}= req.params;

    try {
       let hotel = await Hotel.findById(id).populate("userId","name photo -_id");
      if (hotel) {
        res.status(200).json({
          response: hotel,
          success: true,
          message: "Hotel found",
        });
      }  else {
        res.status(404).json({
          success: false,
          message: "no hotel found",
        });
      
      
      }



      
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
      
    }
  }

  
};

module.exports = controller;

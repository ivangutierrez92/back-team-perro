const Hotel = require("./models/Hotel");

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
        message: error.message
      });
    }
  },
};

module.exports = controller;
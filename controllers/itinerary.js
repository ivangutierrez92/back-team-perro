const Itinerary = require("../models/Itinerary");

const controller = {
  read: async (req, res) => {
    let { query } = req;

    if (query.cityId) {
      try {
        let allItineraries = await Itinerary.find({ cityId: query.cityId }, '-userId');
        res.status(200).json({
          response: allItineraries,
          success: true,
          message: "Itineraries",
        });
      } catch (error) {
        errorMessage(res, 400, error.message);
      }
    } else {
      errorMessage(res, 404, "Please specify the cityId")
    }
  },
};

const errorMessage = (res, status, message) => {
  res.status(status).json({
    sucess: false,
    message: message,
  });
};

module.exports = controller;

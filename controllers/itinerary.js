const Itinerary = require("../models/Itinerary");
const City = require("../models/City");

const controller = {
  create: async (req, res) => {
    try {
      let city = await City.findById(req.body.cityId);
      if (city) {
        let new_itinerary = await Itinerary.create(req.body);
        res.status(201).json({
          id: new_itinerary._id,
          success: true,
          message: "The Itinerary was created successfully",
        });
      } else {
        errorMessage(res, 400, "The cityId isn't associated to a city");
      }
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },
  read: async (req, res) => {
    let { query } = req;

    if (query.cityId) {
      try {
        let allItineraries = await Itinerary.find({ cityId: query.cityId }, "-userId");
        res.status(200).json({
          response: allItineraries,
          success: true,
          message: "Itineraries",
        });
      } catch (error) {
        errorMessage(res, 400, error.message);
      }
    } else {
      errorMessage(res, 404, "Please specify the cityId");
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

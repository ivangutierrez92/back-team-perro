const Itinerary = require("../models/Itinerary");
const City = require("../models/City");
const {errorMessage } = require('../utils/utils');

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
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let itinerary = await Itinerary.findOneAndUpdate({ _id: id }, req.body, { new: true });
      if (itinerary) {
        res.status(200).json({
          id: itinerary._id,
          success: true,
          message: "The itinerary was modified successfully",
        });
      } else {
        errorMessage(res, 404, "Couldn't find the itinerary to edit");
      }
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let itinerary = await Itinerary.findOneAndDelete({ _id: id });
      if (itinerary) {
        res.status(200).json({
          id: itinerary._id,
          success: true,
          message: "The itinerary was deleted successfully",
        });
      } else {
        errorMessage(res, 404, "Couldn't find the itinerary to delete");
      }
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },
};


module.exports = controller;

const Reaction = require("../models/Reaction");
const Itinerary = require("../models/Itinerary");
const { errorMessage } = require("../utils/utils");

const controller = {
  create: async (req, res) => {
    let body = req;
    body.userId = [];
    try {
      let itinerary = await Itinerary.findOne({ _id: body.itineraryId });
      if (itinerary) {
        let newReaction = await Reaction.create(body);
        res.status(201).json({
          id: newReaction._id,
          success: true,
          message: "The reaction was created successfully",
        });
      } else {
        errorMessage(res, 400, "The itinerary associated couldn't be found");
      }
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },
};

module.exports = controller;

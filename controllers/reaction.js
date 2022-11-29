const Reaction = require("../models/Reaction");
const Itinerary = require("../models/Itinerary");
const { errorMessage } = require("../utils/utils");

const controller = {
  create: async (req, res) => {
    let { body } = req;
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
  update: async (req, res) => {
    let { query, user } = req;
    if (query.name && query.itineraryId) {
      let { name, itineraryId } = query;
      let reaction = await Reaction.findOne({ name, itineraryId });

      if (reaction) {
        if (reaction.userId.some(reactionUser => reactionUser.equals(user.id))) {
          reaction.userId.pull(user.id);
          reaction.save();
          res.status(200).json({
            success: true,
            response: { id: reaction._id, name: reaction.name, length: reaction.userId.length },
            message: "The user unreacted to the reaction",
          });
        } else {
          reaction.userId.push(user.id);
          reaction.save();
          res.status(200).json({
            success: true,
            response: { id: reaction._id, name: reaction.name, length: reaction.userId.length },
            message: "The user reacted to the reaction",
          });
        }
      } else {
        errorMessage(res, 404, "Couldn't find the reaction");
      }
    } else {
      errorMessage(res, 400, "You need to specify the name and itineraryId");
    }
  },
};

module.exports = controller;

const City = require("../models/City");
const { errorMessage } = require("../utils/utils");

const controller = {
  create: async (req, res) => {
    try {
      let new_city = await City.create(req.body);
      res.status(201).json({
        id: new_city._id,
        success: true,
        message: "The city was created successfully",
      });
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },
  read: async (req, res) => {
    let { query } = req;
    let newQuery = {};

    if (query.name) {
      newQuery.name = { $regex: query.name, $options: "i" };
    }
    if (query.continent?.length) {
      newQuery.continent = query.continent;
    }
    if (query.userId) {
      newQuery.userId = query.userId;
    }

    try {
      let allCities = await City.find(newQuery, "-userId");
      if (allCities.length) {
        res.status(200).json({
          response: allCities,
          success: true,
          message: "The request of cities was a success",
        });
      } else {
        errorMessage(res, 404, "Couldn't find cities");
      }
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let city = await City.findOneAndUpdate({ _id: id }, req.body, { new: true });
      if (city) {
        res.status(200).json({
          id: city._id,
          success: true,
          message: "The city was modified successfully",
        });
      } else {
        errorMessage(res, 404, "Couldn't find the city to edit");
      }
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let city = await City.findOneAndDelete({ _id: id });
      if (city) {
        res.status(200).json({
          id: city._id,
          success: true,
          message: "The city was deleted successfully",
        });
      } else {
        errorMessage(res, 404, "Couldn't find the city to delete");
      }
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },
  show: async (req, res) => {
    let { id } = req.params;
    try {
      let city = await City.findById(id).populate({ path: "userId", select: "name photo -_id" });
      if (city) {
        res.status(200).json({
          response: city,
          success: true,
          message: "City found",
        });
      } else {
        errorMessage(res, 404, "Couldn't find the city");
      }
    } catch (error) {
      errorMessage(res, 400, error.message);
    }
  },
};

module.exports = controller;

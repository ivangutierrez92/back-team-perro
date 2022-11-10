const City = require("../models/City");
const User = require("../models/User");

const controller = {
  create: async (req, res) => {
    try {
      let { name, userId } = req.body;
      let user = await User.findById(userId);
      let cityExists = await City.exists({ name: {'$regex': name, $options: 'i'} });

      if (!user || user?.role !== "admin") {
        ErrorMessage(res, 400, "You don't have authorization to do this operation");
      } else if (cityExists) {
        ErrorMessage(res, 400, `The city ${name} already exists in the database`);
      } else {
        let new_city = await City.create(req.body);
        res.status(201).json({
          id: new_city._id,
          success: true,
          message: "The city was created successfully",
        });
      }
    } catch (error) {
      Error.message(res, 400, error.message);
    }
  },
};

const ErrorMessage = (res, status, message) => {
  res.status(status).json({
    sucess: false,
    message: message,
  });
};

module.exports = controller;

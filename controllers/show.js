const Show = require("../models/Show");

const controller = {
  // create: async (req, res) => {
  //   try {
  //     let newShow = await Show.create(req.body);
  //     res.status(201).json({
  //       id: newShow.id,
  //       sucess: true,
  //       message: "the show was created successfully",
  //     });
  //   } catch (error) {

  //   }
  // },
  read: async (req, res) => {


    try {
      let show = await Show.find(req.query,"-userId");
      if (show) {
        res.status(200).json({
          response: show,
          success: true,
          message: "show found",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = controller;

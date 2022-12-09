const Comment = require("../models/Comment");
const show = require("../models/Show");
const Itinerary = require("../models/Itinerary");
const controller = {

  read: async (req, res) => {

    let { showId } = req.query;
    console.log(req.user);

    try {
      let model;
      if (req.query.showId) {
        query = { _id: req.query.showId };
        model = await show
          .findOne(query)
          .populate({
            path: "comment",
            options: { sort: [[["updatedAt", -1]]] },
          });
      } else if (req.query.itineraryId) {
        query = { _id: req.query.itineraryId };
        model = await Itinerary.findOne(query).populate({
          path: "comment",
          options: { sort: [[["updatedAt", -1]]] },
        });
      }

       if(model){
        
    let newModel = await model.populate({
      path: "comment.userId",
      select: "name photo",
    });
      if (newModel.comment.length) {
        res.status(200).json({
          response: newModel.comment,
          success: true,
          messsage: "comments found successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "comments not found",
        });
      }
    }else{
      res.status(404).json({
        success: false,
        message: "comment not found",
      });
    }
  } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  create: async (req, res) => {
    let { user, body } = req;
    let query={}
    console.log(req.user.id);
    try {

      let model
      if(req.body.showId){
        query={_id:req.body.showId}
        model= await show.findOne(query)
      }
        else if(req.body.itineraryId){
          query={_id:req.body.itineraryId}
          model= await Itinerary.findOne(query)
        }

        if(model){
        


      let new_comment = await Comment.create({
        
        comment: body.comment,
        userId: user.id,
        photo: user.photo,
      });
      model.comment.push(new_comment);
      model.save()

      console.log(new_comment);
      res.status(201).json({
        response: new_comment,
        success: true,
        messsage: "comment created successfully",
      });
    }else{
      res.status(404).json({
        success: false,
        message: "comment not found",
      });
    }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    let update = req.body;

    try {
      let comment = await Comment.findOneAndUpdate({ _id: id }, update, {
        new: true,
      });

      if (comment) {
        res.status(200).json({
          id: comment._id,
          success: true,
          messsage: "comment updated successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "comment not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let comment = await Comment.findOneAndDelete({ _id: id });
      if (comment) {
        res.status(200).json({
          id: comment._id,
          success: true,
          messsage: "comment deleted successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "comment not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },




};

module.exports = controller;

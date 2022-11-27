const { query } = require("express");
const Show = require("../models/Show");

const controller = {
  create: async (req, res) => {
    try {
      let newShow = await Show.create(req.body);
      res.status(201).json({
        id: newShow._id,
        success: true,
        message: "the show was created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  read: async (req, res) => {
   let query={}
    if(req.query.userId){
      query.userId=req.query.userId;
    }else{
      query=req.query
    }


    try {
      let show = await Show.find(query, "-userId");
      if (show) {
        res.status(200).json({
          response: show,
          success: true,
          message: "show found",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Show not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  updateShow: async (req, res) => {
    let { id } = req.params;
    update = req.body;
    try {
      let show = await Show.findOneAndUpdate({ _id: id }, update, {
        new: true,
      });
      if (show) {
        res.status(200).json({
          id: show._id,
          success: true,
          message: "Show updated",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "no Show found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteShow: async (req, res) => {
    let { id } = req.params;
    try {
      let show = await Show.findOneAndDelete({ _id: id });
      if (show) {
        res.status(200).json({
          id: show._id,
          success: true,
          message: "Show deleted successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "no show found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
readOne:async (req,res)=>{
  let {id}=req.params;
  try {
    
    let show = await Show.findById(id, "-userId")
      if(show){

        res.status(200).json({
          response:show,
          success:true,
          message:"show"
        })
      }else{
        res.status(404).json({
          success:false,
          message:"not found"
        });
      }

  } catch (error) {
    res.status(404).json({
      success:false,
      message:error.message,
    })
  }










}




};
module.exports = controller;

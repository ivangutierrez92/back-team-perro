const Comment = require('../models/Comment')

const controller={

  read: async (req,res)=>{


    try {

      let comment =await Comment.find(req)
      if (comment){
        res.status(200).json({
          response:comment,
          success: true,
          messsage: "comments found successfully"

        })
      }else{
          res.status(404).json({
            success: false,
            message: "comments not found"
          })
        }

      } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  },


  create: async(req,res)=>{

    let {user,body}=req;
    body.user= user.id;
    try{
      let new_comment = Comment.create(body);
      res.status(201).json({
        id: new_comment.id,
        success: true,
        messsage: "comment created successfully"
      })
    }catch(error){
       res.status(400).json({
        success: false,
        message: error.message,
    })


  }
}





}

module.exports = controller;



const show=require('../models/Show');

constroller={

  create: async(req,res)=>{
    try {
      let newShow = await show.create(req.body);
      res.status(201).json({

        id: newShow.id,
        sucess:true,
        message: "the show was created successfully"


      })



    } catch (error) {
      
    }









  }






  
}

const validator=(schema)=>[
  (req,res,next)=>{
    const data = schema.validate(req.body,{abortEarly:false})
  // comparo el eschema de validacion con el object  que viene del req.body
  
  
  if(data.error){
      return res.json({
        success: false,
        message: data.error.details.map(message=>message.message),
      });


    }
    next()
  }

]

module.exports = validator;
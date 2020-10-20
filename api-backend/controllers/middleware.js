const Users = require('../model/users.model')

module.exports={
      repeatedUsername: async(req,res,next)=>{
            const existingUsername= await Users.findOne({username:req.body.username});
            //no duplicated user found
            if(existingUsername!==null){
                res.status(500).json({error:"username already in use"})
                next()
            }
            
            next()
          
          }
    

}
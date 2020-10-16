const Users = require('../model/users.model')

module.exports={

    repeatedUsername: async(req,res,next)=>{
        try{
            const existingUsername= await Users.findOne({username:req.body.username});
            if(existingUsername){
                throw new Error('Username already in use')
            }
            else{
                next();
            }
        }catch(err){
            next(err);
        }
        
    }

}
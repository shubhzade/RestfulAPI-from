const mongoose=require("mongoose");

const employSchema =new mongoose.Schema({
 
      email: { type: String, required: true },
      password: { type: String, required: true },
     


})
//  we need to create connection 

const Register =new mongoose.model("Register",employSchema);
module.exports =Register;
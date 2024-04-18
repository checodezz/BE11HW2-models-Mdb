const mongoose= require("mongoose");

const playerProfileSchema = new mongoose.Schema({
  username : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  firstname : {
    type : String,
    required : true
  }, lastname : {
    type : String,
    requied : true
  },
  age : {
    type : Number
  },
  gender : {
    type : String,
    enum : ["Male", "Female", "Other"];
    
  }, 
  country : {
    type : String
  },
  isActive : {
    type : Boolean,
    default : true
  },
  gamesPlayed : {
    type : Number
  },
  level : {
    type : String,
    enum : ["Beginner", "Intermediate", "Advanced", "Expert"]
   }, 
  preferredGame : {
    type : String,
    
  },
  
}, {timestamps : true})
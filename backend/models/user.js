const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    field:{
        type:String,
        // required:true,
    },
    bio:{
        type:String,
        default:"",
    },
    isAvailable:{
        type:Boolean,
        default:true,
    },
    expertiseLevel:{
        type:String,
        default:"Intermediate",
    },
    socialLinks:{
        github:{type:String,default:""},
        linkedin:{type:String,default:""},
        portfolioImage:{type:String,default:""}
    },
    profileImage:{
        type:String,
        // required:true,
    }

})

module.exports=mongoose.model("User",userSchema);
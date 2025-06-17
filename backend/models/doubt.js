const mongoose=require("mongoose");

const doubtSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    field:{
        type:String,
        required:true,
    },
    askedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    status:{
        type:String,
        enum:["open","in-progress","cleared"],
        default:"open",
    },
    clearedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null,
    },
    

});

module.exports=mongoose.model("Doubt",doubtSchema);
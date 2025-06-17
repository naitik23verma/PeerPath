const express=require("express");
const router=express.Router();
const Doubt=require("../models/doubt");
const doubt = require("../models/doubt");

//Post a new doubt
router.post("/post",async(req,res)=>{
    try{
        const {title,description,field,askedBy,isResolved}=req.body;
        const newDoubt=new Doubt({
            title,
            description,
            field,
            askedBy,
            isResolved:false
        })
        await newDoubt.save();
        res.status(201).json({message:"Doubt posted successfully",doubt:newDoubt});
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

//Get all doubts
router.get("/",async(req,res)=>{
    try{
        const doubts=await doubt.find().populate("askedBy");
        res.status(200).json(doubts);
    }catch(error){
        res.status(500).json({mewssage:error.message});
    }
})

//get doubts by expertise field
router.get("/field/:field",async(req,res)=>{
    try{
        const field=req.params.field;
        const doubts=await Doubt.find({field,isResolved:false}).populate("askedBy");
        res.status(200).json(doubts);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

//mark doubt as resolved
router.patch("/clear/:id",async(req,res)=>{
    try{
        const doubt =await Doubt.findById(req.params.id);
        if (!doubt){return
            res.status(404).json({message:"Doubt not found"});
        }
                    doubt.isResolved=true;await doubt.save();

                    res.status(200).json({message:"Doubt marked as resolved",doubt});
    }catch(error){
        res.status(500).json({message:error.message});
    }
})


module.exports=router;
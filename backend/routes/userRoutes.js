const express=require("express");
const router=express.Router();
const User=require("../models/user");

//Register a new user
router.post("/register",async(req,res)=>{
    try{
        const {name,email,password,bio,isAvailable,expertiseLevel,socialLinks,profileImage}=req.body;
        const existingUser=await User.findOne({email});
        if (existingUser){return
                res.status(400).json({message:"User already exist"});}

                const newUser=new User({
                    name,
                    email,
                    password,
                    bio,
                    isAvailable,
                    expertiseLevel,
                    socialLinks,
                    profileImage,
                });
                await newUser.save();
                res.status(201).json({message:"User registered successfully",user:newUser})
    } catch (error){
        res.status(500).json({message:error.message});
    }
})


//Login User
router.post("/login",async(req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email});
    if (!user || user.password!==password){
        return 
        res.status(400).json({message:"Invalid credentials"});
    }
    res.status(200).json({message:"Login successfull",user});

})


//Get all users
router.get("/",async(req,res)=>{
    try{
        const users=awaitUser.find();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

module.exports=router;
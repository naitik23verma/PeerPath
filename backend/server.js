const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();

const app=express();

const PORT=process.env.PORT || 8080;

//Middleware
app.use(cors());
app.use(express.json());

main().then(()=>{
    console.log("connected to mongodb");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}


app.listen(PORT,()=>{
    console.log(`server is lstening to port ${PORT}`);
})


app.get("/",(req,res)=>{
    res.send("PeerPath backend is running");
})


app.use("/api/users",require("./routes/userRoutes"));
app.use("/api/doubts",require("./routes/doubtRoutes"));
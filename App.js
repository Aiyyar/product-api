require("dotenv").config();
const express=require("express");
const app=express();
const connectDb=require("./db/connect")
const products_routes=require("./routes/products")
const PORT= process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("Hi , i am live");
});

//middleware
app.use("/api/products",products_routes);

const start=async()=>{
    try{
        console.log("connect Db")
        await connectDb(process.env.MONGODB_URL);
        app.listen(PORT ,()=>{
          console.log(`${PORT} Yes  i am connected`);
        });
    }
    catch(error){
        console.log(error);
    }
}
start();
const mongoose=require("mongoose");
const { options } = require("../routes/products");


const connectDb=(URL)=>{
    return mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
};

module.exports=connectDb;
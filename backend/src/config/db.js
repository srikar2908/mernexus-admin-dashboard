const mongoose=require("mongoose");
//database connection
async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongoDB connected sucessfully");

    }
    catch(error){
        console.log("error database connection failed");
        console.log(error);
        process.exit(1);

    }    
}

module.exports=connectDB;

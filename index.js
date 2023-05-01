import mongoose from "mongoose";
import app from "./app.js";


(async ()=>{
    try{
 await mongoose.connect("mongodb://localhost:27017/gitsetup")
console.log("DB CONNECTED!");

const onListining = ()=>{
    console.log("Listining on PORT 5000");
}

app.listen(5000,onListining);
}catch(error) {
        console.error("error",error);
        throw error
    }
})()
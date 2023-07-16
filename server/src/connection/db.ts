import mongoose from "mongoose";
import { MyConnectOptions } from "../types/dbConnection.types";

const dbOptions:MyConnectOptions = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}


export const ConnectToDatabase = ()=>{
    mongoose.connect("mongodb://localhost:27017/Shiftmate",dbOptions).then(()=>{
        console.log("Database Shiftmate connection success");
    }).catch((err)=>{
        console.log(`Database error: ${err}`);
    })
}
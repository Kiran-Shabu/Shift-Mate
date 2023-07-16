import mongoose from "mongoose";
import validator from 'validator'

const agencyRegSchema = new mongoose.Schema({
    Aname: {
        type: String,
        required:true
    },
    Aemail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, "Invalid Email"],
    },
    Amobile: {
        type: String,
        
    },
    // Anumber:{
    //     required :true,
    //     type: String,
    // },
    password:{
        required:true,
        type:String,
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isVerified:{
        type:Boolean,
        default:false
    }
});

interface agencyRegSchema{
    Aname:string,
    Aemail:string,
    Amobile:string,
    // Anumber:string,
    password:string,
    isActive:Boolean,
    isVerified:Boolean
}

export default agencyRegSchema
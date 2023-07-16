import express, { Request, Response } from "express";
const Router = express.Router();

import {
    userRegistration,
    agencyRegistration,
    userLogin 
} from "../../Controllers/userControllers/authControllers"



import { jwtOptions } from "../../jwt config/jwtConfig";


// const jwt = new jwtOptions();
// const { verifyJwtToken} = jwt;

//Register route

Router.post("/register", userRegistration );
Router.post("/login",userLogin)
Router.post("/agencyRegister",agencyRegistration)
Router.get("/test", (req,res)=>{
console.log("working")
})




export default Router;

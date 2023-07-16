import { Types } from "mongoose";

import {
  agencyRegInterface,
  userLoginInterface,
  userRegInterface,
} from "../../types/user.types";

import { compare } from "bcrypt";
import userRegModel from "../../models/userModels/userRegModel";
import agencyRegModel from "../../models/agencyModels/agencyRegModel";

export class authRepository {
  
  async registerUser(regDetails: userRegInterface) {
    try {
        console.log(regDetails,"::::::::::::::::::::::::::::::::::::::::;15 repoooooooooooo");
        
      let { fname, lname, email, mobile, password } = regDetails;
      let userRegisteredAlready = await userRegModel.find({
        email: email,
      });
      if (userRegisteredAlready.length != 0) {
        throw { msg: "User is already regitered" };
      }
      console.log("yyyyyyyy 22 repostoryyyyyyyyyyyyyyyyyyy");
      
      return await userRegModel.create({
        fname,
        lname,
        email,
        mobile,
        password,
      });
    } catch (error) {
      throw { error };
    }
  }

async registerAgency(regDetails: agencyRegInterface) {
    try {
        console.log(regDetails,"::::::::::::::::::::::::::::::::::::::::;15 repoooooooooooo");
        
      let { Aname,  Aemail, Amobile, password } = regDetails;
      console.log(regDetails,"ooo")
      let agencyRegisteredAlready = await agencyRegModel.find({
        Aemail: Aemail,
      });
      if (agencyRegisteredAlready.length != 0) {
        throw { msg: "Agency is already regitered" };
      }
      console.log("yyyyyyyy 22 repostoryyyyyyyyyyyyyyyyyyy");
      console.log("send done")
      
      return await agencyRegModel.create({
        Aname,
        Aemail,
        Amobile,
        password,
        
      });
      
    } catch (error) {
      throw { error };
    }
  }

  async loginUser(reqDetails: userLoginInterface) {
    try {
      const { email, password } = reqDetails;
      const userFound = await userRegModel.find({
        $or: [{ email: { $eq: email } }, { mobile: { $eq: email } }],
      });
      if (userFound.length == 0) throw { msg: "Invalid credentials" };
      const passwordFromDb: any = userFound[0]?.password;
      const isValidUser: any = await compare(password, passwordFromDb);
      if (isValidUser) {
        // if (!userFound[0].isVerified) {
        //   throw { msg: "Please verify email to login", userVerified: false };
        // } else {
          return userFound[0];
        
      } else {
        throw { msg: "Invalid credentials" };
      }
    } catch (error) {
      throw { error };
    }
  }
}
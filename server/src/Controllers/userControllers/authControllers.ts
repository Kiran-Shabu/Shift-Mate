import { Request , Response } from "express";
 import { authHelpers} from "../../Helpers/User/authHelpers"
import {jwtOptions} from "../../jwt config/jwtConfig"


const jwt = new jwtOptions();
const {createJwtAccessToken, createJwtRefreshToken} = jwt;



  const userAuthHelpers = new authHelpers();

  const {
    doSignUp,
    doAgencySignup,
    doLogin
    // sentVerifyEmail,
    // generateLink
  } = userAuthHelpers ;
export const userRegistration = async (req: Request, res: Response) => {
    console.log("hello giusts")
    console.log(req.body,"18 auth controller");
    
    try {
      const response = await doSignUp(req.body);
      console.log(response,"23  authcontroler");
      
    //   const verifyLink: string = await generateLink({
    //     id: response._id.toString(),
    //   });
    //   const mailResponse = sentVerifyEmail({
    //     email: response.email,
    //     link: verifyLink,
    //   });

       res.status(200).json({ UserCreated: true, response });
  
      } catch (error: any) {
      console.log(error);
      
      res.status(401).json(error);
    }
  };
 
  export const agencyRegistration = async (req: Request , res: Response)=>{
    console.log("agency reached backend")
    try {
        const response = await doAgencySignup(req.body);
        console.log(response,"response in backend")
        res.status(200).json({AgencyCreated: true , response})
    } catch (error:any) {
        
    }
  }
  export const userLogin = async (req: Request, res: Response) => {
    try {
      const response: any = await doLogin(req.body);
      const accessToken: string = await createJwtAccessToken(
        response._id.toString()
      );
  
      const refreshToken: string = await createJwtRefreshToken(
        response._id.toString()
      );
      
      res.cookie("jwtRefreshToken", refreshToken, {
        httpOnly: true,
      
      });
  
      res.status(200).json({
        accessToken,
        userId: response._id.toString(),
        name: response.fname,
        email: response.email,
      });
    } catch (error: any) {
      console.log(error);
      
      res.status(401).json(error);
    }
  }


  
  
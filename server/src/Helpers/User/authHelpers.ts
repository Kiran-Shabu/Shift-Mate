import { 
    // emailVerifyInterface ,
    // linkInterface ,
    // updatePasswordDetails,
    // userGoogleLoginInterface,
    userRegInterface,
    userLoginInterface,
    agencyRegInterface
    // userGoogleRegInterface
} from "../../types/user.types";

import { hash , compare} from "bcrypt"
import { authRepository } from "../../Repository/userRepository/authRepository.service";

import { jwtOptions } from "../../jwt config/jwtConfig";



const jwt = new jwtOptions();

// const {}= jwt
const authRepo =new authRepository();

const {registerUser , registerAgency,loginUser}= authRepo;

export class authHelpers {

    async doSignUp(regDetails: userRegInterface){
        try{
            console.log(regDetails,"29 authhelpers---------------------------");
            
            if(regDetails.password){
                regDetails.password = await hash(regDetails.password,10);
            }

            return await registerUser(regDetails);
        } catch (error : any) {
            if(error.error.code ===11000){
                const value = Object.keys(error.error)
                throw { error, message: `${value} already exist` };
            }
            else if (error.error.message)
            throw { error, message: error.error.message };
          else throw { error };
        }
    }

    async doAgencySignup(regDetails:agencyRegInterface){
        try{
            if(regDetails.password){
                regDetails.password = await hash(regDetails.password,10)
            }
            return await registerAgency(regDetails);
        } catch (error : any){
            if(error.error.code ===11000){
                const value = Object.keys(error.error)
                throw { error, message: `${value} already exist` };
            }
            else if (error.error.message)
            throw { error, message: error.error.message };
          else throw { error };
        }
    }

    async doLogin(loginDetails: userLoginInterface) {
        try {
          return await loginUser(loginDetails);
        } catch (error: any) {
          throw { error };
        }
      }
}


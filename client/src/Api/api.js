// import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import sliderColor from "@material-tailwind/react/theme/components/slider/sliderColor";
import  auth  from "./axiosAuthInstance";


const apiCall =() =>{
    // const axiosPrivate = useAxiosPrivate()

    const doRegister = async (signupFormData) =>{
        try {
            console.log(signupFormData,"api line no 10")
            const response = await auth.post("/register",signupFormData);
            console.log(response,"response in do register in api");
            return response.data;
            }
            catch (error){
                throw { msg : error.response.data.error.error.msg};
            }
    };

    const doAgencyRegister = async(AgencySignupFormData) =>{
        try {
            console.log(AgencySignupFormData)
            console.log("reached here agency signupf rom data")
            const response = await auth.post("/agencyRegister",AgencySignupFormData);
            console.log(response.data,"respone in api line no 26")
            return response.data;
        } catch (error) {
            
        }
    }

   const doLogin = async (loginFormData)=>{
    try {
        const response = await auth.post('/login', loginFormData);
        return response.data;
        
    } catch (error){
        throw { msg :error.response.data.error.error.msg}
    }
   }

   return {
    doRegister,
    doAgencyRegister,
    doLogin

   }
}

export default apiCall;
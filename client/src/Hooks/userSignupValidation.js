import { useState } from "react"


const useSignupValidation = ()=>{

    const [errors,setErrors] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cnfpassword:"",
        accounttype:""
    })

    const [signupFormData,setSignupFormData] = useState({
        fname:'',
        email:'',
        mobile:'',
        password:'',
        cnfpassword:'',
        accounttype:""
    })
    
    const [AgencysignupFormData,setAgencySignupFormData] = useState({
      Aname:'',
      Aemail:'',
      Amobile:'',
      password:'',
      cnfpassword:'',
      accounttype:""
  })
    const containsNumber = (string)=>{
        return /\d/.test(string)
    }
        
    const length = (string)=>{
        return string.length >= 3
    }

    const containSpecialCharacters = (string)=>{
        return !/^[a-zA-Z\s]+$/.test(string)
    }

    const isValidEmail = (string)=>{
        return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(string)
    }

    const isValidMobile = (string)=>{
        return /^[6-9]\d{9}$/.test(string)
    }

    const passLength = (string)=>{
        return string.length >= 6
    }  
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let error = null;
      
        if (!value.trim()) {
          error = `${name} is required`;
        } else if (name === 'fname') {
          if (containsNumber(value)) error = "Should only contain alphabets";
          if (!length(value)) error = "Should contain at least 3 alphabets";
        } else if (name === 'email') {
          if (!isValidEmail(value)) error = "Invalid email address";
        } else if (name === 'mobile') {
          if (!isValidMobile(value)) error = "Invalid mobile number";
        } else if (name === 'password') {
          if (!passLength(value)) error = "Should contain at least 6 characters";
        } else if (name === 'cnfpassword') {
          if (value !== signupFormData.password) error = "Password does not match";
        }
      
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
      
        setSignupFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      

      };

      const agencyHandleInputChange = (e) => {
        const { name, value } = e.target;
        let error = null;
      
        if (!value.trim()) {
          error = `${name} is required`;
        } else if (name === 'fname') {
          if (containsNumber(value)) error = "Should only contain alphabets";
          if (!length(value)) error = "Should contain at least 3 alphabets";
        } else if (name === 'email') {
          if (!isValidEmail(value)) error = "Invalid email address";
        } else if (name === 'mobile') {
          if (!isValidMobile(value)) error = "Invalid mobile number";
        } else if (name === 'password') {
          if (!passLength(value)) error = "Should contain at least 6 characters";
        } else if (name === 'cnfpassword') {
          if (value !== AgencysignupFormData.password) error = "Password does not match";
        }
      
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
      
       
        setAgencySignupFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));

      };

      
      

    
    const isValidForm = async (e) => {
        e.preventDefault();
        let status = true;
      
        for (const key in errors) {
            console.log(signupFormData,"signupFormData");
          if (!signupFormData[key] || signupFormData[key].trim().length === 0 || errors[key] !== undefined) {
            console.log(errors,"lengtherror");
            status = false;
          }
        }
      
        if (signupFormData.password !== signupFormData.cnfpassword) {
          status = false;
        }
      
        return status;
      };
      const isAgencyValidForm = async (e) => {
        e.preventDefault();
        let status = true;
      
        for (const key in errors) {
            console.log(AgencysignupFormData,"AgencysignupFormData");
          if (!AgencysignupFormData[key] || AgencysignupFormData[key].trim().length === 0 || errors[key] !== undefined) {
            console.log(errors,"lengtherror");
            status = false;
          }
        }
      
        if (AgencysignupFormData.password !== AgencysignupFormData.cnfpassword) {
          status = false;
        }
      
        return status;
      };

    return {errors,signupFormData,AgencysignupFormData,handleInputChange,agencyHandleInputChange,isValidForm,isAgencyValidForm}
}

export default useSignupValidation
import React, { useState } from "react";
import AgencyLogin from "../../images/AgencyLogin.jpg"
import { Link, useNavigate } from "react-router-dom";
// custom hook for validation
import useSignupValidation from "../../Hooks/userSignupValidation";
// sweet alerts
import swal from "sweetalert";
import apiCall from "../../Api/api";
import { ToastContainer } from "react-toastify";

const AgencySignUP = () => {
  const [signIn, toggle] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { successRegistration } = swal;

  const { doAgencyRegister } = apiCall();

  const { agencyHandleInputChange, isAgencyValidForm, errors, AgencysignupFormData } =
    useSignupValidation();

  const agencyHandleSubmit = async (e) => {
    console.log(AgencysignupFormData, "hhhhhh");

    let formStatus = await isAgencyValidForm(e);
    console.log(formStatus, "errorfffffffff");
    if (formStatus) {
      // invalidFormTost()
      console.log(formStatus, "ddddddddddd");
      return;
    }
    try {
      console.log(
        "yesssss------------------------------------------------------------------------------------"
      );
      console.log(AgencysignupFormData, "PPPPPPPPPPPPPPPPPPPPP");
      const signupResponse = await doAgencyRegister(AgencysignupFormData); // api call to register user
      console.log(signupResponse, "signup response in signuppage");
      if (signupResponse) {
        alert("sucess");
        console.log(AgencysignupFormData, "signup page line no 43");
        navigate("/agencyLogin");
      }
    } catch (error) {
      // invalidREgisterCred(error)
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* //login container */}
      <div className=" bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* form */}
          <div className="md:w-1/2 px-16">
            {/* <h2 className="font-bold text-2xl text-[#202022]">Login</h2> */}
            <div className="flex items-center">
              <p className="font-bold text-2xl text-[#202022]">
                {" "}
                Create your Account{" "}
              </p>
            </div>
            {/* <p className="text-sm mt-4 text-[#202022]">If you are already a member , easily login</p> */}
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={agencyHandleSubmit}
            >
              <input
                className="p-2 mt-5 rounded-xl border"
                type="text"
                placeholder="First Name"
                name="Aname"
                onChange={agencyHandleInputChange}
                value={AgencysignupFormData.Aname}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="Aemail"
                onChange={agencyHandleInputChange}
                value={AgencysignupFormData.Aemail}
                required
                className="p-2  rounded-xl border"
              />
              <input
                type="number"
                placeholder="Mobile"
                name="Amobile"
                onChange={agencyHandleInputChange}
                value={AgencysignupFormData.Amobile}
                required
                className="p-2  rounded-xl border"
              />
              <input
                className="p-2  rounded-xl border"
                type="password"
                name="password"
                placeholder="Password"
                onChange={agencyHandleInputChange}
                value={AgencysignupFormData.password}
                required
              />
              <input
                className="p-2  rounded-xl border"
                type="password"
                placeholder="Confirm Password"
                name="cnfpassword"
                onChange={agencyHandleInputChange}
                value={AgencysignupFormData.cnfpassword}
                required
              />
              <button className="bg-[#202022] rounded-xl text-white py-2 hover:scale-105 duration-300 ">
                Sign Up
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className=" border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className=" border-gray-400" />
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Sign Up with Google
            </button>

            <div className="mt-3 text-xs flex justify-between items-center">
              <p> Already have an account..</p>
              <Link to="/agencyLogin">
                <button className="py-2 px-5 bg-white border rounded-xl  hover:scale-110 duration-300">
                  Login
                </button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="md:block hidden w-1/2 ">
            <img className=" rounded-2xl" src={AgencyLogin} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencySignUP;

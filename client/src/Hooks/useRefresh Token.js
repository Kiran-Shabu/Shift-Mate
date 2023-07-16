import { useDispatch } from "react-redux";
import { setDetails } from "../Redux/Slices/userSlice";
import auth from "../Api/axiosAuthInstance";

function useRefreshToken() {
  const dispatch = useDispatch();
  const refresh = async () => {
    try {
      const response = await auth.get("/token");
      const accessToken = response.data.accessToken;
      dispatch(setDetails({ accessToken: accessToken }));
      return accessToken;
    } catch (error) {
       console.log("From useRefreshtoken",error);
    }
  };
  return refresh;
}

export default useRefreshToken;

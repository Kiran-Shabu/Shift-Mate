import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const invalidFormTost =()=>{
    toast.error('Incomplete form', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}





export default tostifyNotifications;


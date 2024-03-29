import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: 'https://my-food-server.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();
    // use aixos interceptor with authorization for every request
    axiosSecure.interceptors.request.use(function(config){
        
        const token = localStorage.getItem('access-token');
        console.log('Request stopped by interceptor',token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error){
        return Promise.reject(error);
    })

    //intercepts 401 response
    axiosSecure.interceptors.response.use(function (response) {
        
        return response;
      }, async (error)=>{
        const status = error.response.status;
        console.log('status by error code in the interceptor', status);
        if(status === 401 || status ===403){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
      });
    return axiosSecure;
    //to do: need to fix the issue with token handling
};

export default useAxiosSecure;
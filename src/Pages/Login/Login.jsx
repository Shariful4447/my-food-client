
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/others/authentication2.png'
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const captchaRef = useRef(null);
    const[disabled, setDisabled] = useState(true);

    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log('location of the state in the login page', location.state);

    useEffect( ()=>{
        loadCaptchaEnginge(6);
    },[])
    const handleValidateCaptcha=(e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            if(user.uid){
                Swal.fire(
                    "Success!",
                    "User Created Success",
                    "success"
             )}
             navigate(from, {replace: true})
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-1/2 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card shrink-0 w-full max-w-md h-[750px] shadow-2xl bg-base-100 m-20">
                        <h2 className='text-center text-4xl font-bold mt-10'>Login Here</h2>
                        <form onSubmit={handleLogin}  className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                    <LoadCanvasTemplate />
                                    </span>
                                </label>
                                <input type="text" ref={captchaRef} name="captcha" placeholder="please put the text you see in the captcha" className="input input-bordered" required />
                                <button onBlur={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
                            </div>
                            <div className="form-control mt-6">
                            <button disabled={true} className="btn btn-primary">Login</button>
                            </div>

                            <h2 className='text-center text-2xl mt-5'>Or Sign In With</h2>
                            <div className='flex gap-5 mx-auto'>
                                <button className="btn btn-circle btn-outline "> <FacebookRoundedIcon/></button>
                                <button className="btn btn-circle btn-outline "> <InstagramIcon/></button>
                                <button className="btn btn-circle btn-outline "> <TwitterIcon/></button>
                                <button className="btn btn-circle btn-outline "> <GoogleIcon /></button>
                            </div>
                            <p className='text-center mt-2'>Have an account? <span className='text-red-500'> <Link to='/register'>Sign Up </Link> </span></p>
                        </form>
                        

                    </div>
                    <div className="text-center lg:text-left  m-20">
                        <img className='h-[600px]' src={login} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
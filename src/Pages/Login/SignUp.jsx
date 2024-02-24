import register from '../../assets/others/authentication2.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
// import Swal from "sweetalert2";

const SignUp = () => {
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        // createUser(email, password)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        //     if(user.uid){
        //         Swal.fire(
        //             "Success!",
        //             "User Created Success",
        //             "success"
        //      )

        //     }
        // })
        
        // .catch(error=>console.log(error));
        }
    return (
        <div>
        <div className="hero min-h-1/2 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card shrink-0 w-full max-w-md h-[700px] shadow-2xl bg-base-100 m-20">
                    <h2 className='text-center text-4xl font-bold mt-10'>Sign Up</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>

                        <h2 className='text-center text-2xl mt-5'>Or Sign Up With</h2>
                        <div className='flex gap-5 mx-auto'>
                            <button className="btn btn-circle btn-outline "> <FacebookRoundedIcon/></button>
                            <button className="btn btn-circle btn-outline "> <InstagramIcon/></button>
                            <button className="btn btn-circle btn-outline "> <TwitterIcon/></button>
                            <button className="btn btn-circle btn-outline "> <GoogleIcon /></button>
                        </div>
                        <p className='text-center mt-2'> Already Have an account <span className='text-red-500'> <Link to='/login'>Log In </Link> </span></p>
                    </form>
                    

                </div>
                <div className="text-center lg:text-left  m-20">
                    <img className='h-[600px]' src={register} alt="" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;
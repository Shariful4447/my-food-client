import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";


const Reviews = () => {
    const axiosPublic = useAxiosPublic();
    const { register, formState: { errors } } = useForm();

    const navigate = useNavigate();
    return (
        <div>
            <SectionTitle
            heading='Reviews'
            subHeading='---Tell us more---'
            >

            </SectionTitle>
            <div>
            <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="px-6"><small>Already have an account <Link to="/login">Login</Link></small></p>
                        
                    </div>
                    
                </div>
            </div>

            {/* <div className="hero min-h-1/2 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card shrink-0 w-full max-w-md h-[800px] shadow-2xl bg-base-100 m-20">
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
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="enter your photo url" className="input input-bordered" required />
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
            </div> */}
        </div>
            </div>
        </div>
    );
};

export default Reviews;
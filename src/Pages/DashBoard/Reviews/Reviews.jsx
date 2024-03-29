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
            
            <div className="m-5 p-5 bg-slate-200 border rounded-lg">
                
                <form className="p-5">
                    
                    
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Which recipe you liked most?</span>
                            
                        </label>
                        <input 
                            type="text" 
                            placeholder="Recipe name" 
                            {...register('name', {required: true})} 
                            className="input input-bordered w-full" />
                    </div>
                    
                    <div className="flex gap-6">
                       
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Do you have any suggestion for us?</span>
                                
                            </label>
                            <input type="text" {...register("price", {required: true})} placeholder="Recipe name" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Kindly express your care in a short way.</span>
            
                        </div>
                        <input type="text" {...register("recipe", {required: true})} placeholder="Recipe Details*" className="input input-bordered h-24 w-full" />

                    </label>
                    
                    <button className="btn btn-outline btn-accent w-72 my-4 text-center mx-auto">Submit</button>
                </form>
                
            </div>
        </div>
    );
};

export default Reviews;
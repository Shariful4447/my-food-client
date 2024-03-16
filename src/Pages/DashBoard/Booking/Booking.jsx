import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Booking = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = () =>{
        
    }
    return (
        <div>
            <SectionTitle
            heading='BOOK A TABLE'
            subHeading='---Reservation---'
            >

            </SectionTitle>
            <div className="m-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Date*</span>
                                
                            </label>
                            <input 
                                type="text" 
                                placeholder="Recipe name" 
                                {...register('name', {required: true})} 
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Time*</span>
                                
                            </label>
                            <input 
                                type="text" 
                                placeholder="Recipe name" 
                                {...register('name', {required: true})} 
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Guest</span>
                                
                            </label>
                            <select defaultValue="default" {...register("category", {required: true})} className="select select-bordered w-full">
                                <option disabled value="default">Select a Category</option>
                                <option value="salad">Couple </option>
                                <option value="soup">4 Person</option>
                                <option value="deinks">Six People</option>
                                <option value="pizza">HallRoom</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Email</span>
                                
                            </label>
                            <input type="text" {...register("price", {required: true})} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Name</span>
                                
                            </label>
                            <input type="text" {...register("price", {required: true})} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Phone</span>
                                
                            </label>
                            <input type="text" {...register("price", {required: true})} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    
                    <button className="btn btn-outline btn-accent w-72 my-4 text-center mx-auto">Submit</button>
                </form>
            </div>

            <SectionTitle
            heading='OUR LOCATION'
            subHeading='---Visit Us---'
            >

            </SectionTitle>
            <div>
                <div>
                    <p>Phone</p>
                    <p>+38 (012) 34 56 789</p>
                </div>
                <div>
                    <p>ADDRESS</p>
                    <p>+38 (012) 34 56 789</p>
                </div>
                <div>
                    <p>WORKING HOURS</p>
                    <p>Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
        </div>
    );
};

export default Booking;
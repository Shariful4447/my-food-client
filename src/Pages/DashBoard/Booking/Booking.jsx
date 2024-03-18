import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { IoCallSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoIosTime } from "react-icons/io";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";





const Booking = () => {
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) =>{
        console.log(data);
        
    
            //now send this to the database
            const bookingsList = {
                name: data.name,
                date: data.date,
                phone: data.phone,
                email: data.email,
                table: data.table,
                time: data.time,
                status: 'pending',
            }
            
            
            const bookingRes = await axiosSecure.post('/bookings', bookingsList)
            console.log(bookingRes);
            if(bookingRes.data.insertedId){
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} booked successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        
        console.log(res.data);
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
                                placeholder="Enter date" 
                                {...register('date', {required: true})} 
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Time*</span>
                                
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter Time" 
                                {...register('time', {required: true})} 
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Guest</span>
                                
                            </label>
                            <select defaultValue="default" {...register("table", {required: true})} className="select select-bordered w-full">
                                <option disabled value="default">Select a table</option>
                                <option value="couple">Couple </option>
                                <option value="fourPeople">4 Person</option>
                                <option value="sixPeople">Six People</option>
                                <option value="hallRoom">HallRoom</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Email</span>
                                
                            </label>
                            <input type="text" {...register("email", {required: true})} placeholder="Email" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Name</span>
                                
                            </label>
                            <input type="text" {...register("name", {required: true})} placeholder="Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Phone</span>
                                
                            </label>
                            <input type="text" {...register("phone", {required: true})} placeholder="Phone" className="input input-bordered w-full" />
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
            <div className="grid grid-cols-3 place-items-center bg-yellow-400 m-5 h-48">
                <div>
                    <div className="ml-16">
                        <p ><IoCallSharp className="text-2xl"></IoCallSharp></p>
                    </div>
                    <div className="text-center">
                    <p>Phone</p>
                    <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className="text-center">
                    <p className="ml-16 text-2xl"><CiLocationOn></CiLocationOn></p>
                    <p>ADDRESS</p>
                    <p>+38 (012) 34 56 789</p>
                </div>
                <div className="text-center">
                    <p className="ml-16 text-2xl"><IoIosTime></IoIosTime></p>
                    <p>WORKING HOURS</p>
                    <p>Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
        </div>
    );
};

export default Booking;
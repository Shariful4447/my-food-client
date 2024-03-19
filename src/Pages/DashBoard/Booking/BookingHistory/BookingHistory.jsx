import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { MdOutlineDelete } from "react-icons/md";


const BookingHistory = () => {
    const {user} = useAuth();
    console.log(user);
    const axiosSecure = useAxiosSecure();

    const {data : bookings=[]} = useQuery({
        queryKey: ['bookings', user.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/bookings/${user?.email}`)
            console.log(res);
            return res.data;
            
        }
    }) 
    return (
        <div>
            <h2>All bookings here {bookings.length}</h2>
            <div className="overflow-x-auto border rounded-xl border-radius-2">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="bg-slate-200">
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>TABLE IMAGE</th>
                        <th>Booking Name</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        bookings.map((booking, index)=> <tr key={booking._id}>
                            <th>
                            <label>
                                {index +1 }
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                
                            </div>
                            </td>
                            <td>{booking.name}</td>
                            <td>{booking.phone}</td>
                            <td>{booking.date}</td>
                            <td>{booking.time}</td>
                            <th>
                            <button className="btn btn-ghost btn-md"><MdOutlineDelete className="text-xl" /></button>
                            </th>
                        </tr>)
                    }
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
    );
};

export default BookingHistory;
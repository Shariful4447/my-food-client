import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useBooking from "../../../hooks/useBooking";


const ManageBooking = () => {
    const [bookings] = useBooking();
   
    return (
        <div>
            <SectionTitle
            heading='Manage all Booking'
            subHeading='At A Glance'
            >

            </SectionTitle>
            <div className="m-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-yellow-400">
                        <tr>
                            <th>USER EMAIL</th>
                            <th>PHONE</th>
                            <th>BOOKING DATE</th>
                            <th>BOOKING TIME</th>
                            <th>ACTIVITY</th>
                            <th>ACTION</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            bookings.map(booking =>  
                            <tr key={booking._id}>
                                <th>{booking.email}</th>
                                <td>{booking.phone}</td>
                                <td>{booking.date}</td>
                                <td>{booking.time}</td>
                                <td>{booking.status}</td>
                                <td>
                                    <button className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr> )
                        }
                       
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooking;
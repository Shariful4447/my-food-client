import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem = (item) => {

        //Delete
        Swal.fire({
            title: "Are you sure? want to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                if(res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} deleted successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            }
          });
    }
    return (
        <div>
            <SectionTitle
            heading='Manage All Items'
            subHeading='Hurry Up'
            ></SectionTitle>
            <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-yellow-400 border-2 rounded-xl">
                    <tr>
                        <th>
                        <label>
                            
                        </label>
                        </th>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        menu.map((item, index) =>                         
                        <tr key={item._id}>
                            <th>
                            <label>
                                {index +1}
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-16 h-16">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                
                            </div>
                            </td>
                            <td>
                            {item.name}

                            </td>
                            <td>{item.price}</td>
                            <th>
                                <button className="btn btn-circle bg-yellow-500 btn-outline">
                                <FaRegEdit></FaRegEdit></button>
                            </th>
                            <th>
                                <button onClick={()=>handleDeleteItem(item)} className="btn btn-circle bg-red-500 btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                            
                        </tr>)
                    }

                    </tbody>

                    
                </table>
            </div>
            </div>
        </div>
    );
};

export default ManageItems;
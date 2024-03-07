import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";


const ManageItems = () => {
    const [menu] = useMenu();
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
                                <div className="mask mask-squircle w-12 h-12">
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
                                <button className="btn btn-circle btn-outline">
                                <FaRegEdit></FaRegEdit></button>
                            </th>
                            <th>
                                <button className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
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
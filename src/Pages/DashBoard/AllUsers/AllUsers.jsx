import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BsMicrosoftTeams } from "react-icons/bs";




const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users =[] } = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div className="m-5 p-5">
            <div>
                <h2 className="text-2xl font-bold">Total User :{users.length} </h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map(user=> <tr key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-circle btn-outline">
                                        <BsMicrosoftTeams />
                                    </button>
                                    
                                </td>
                                <td>
                                    <button className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }
                        

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
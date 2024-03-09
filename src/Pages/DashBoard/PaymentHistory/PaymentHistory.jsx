import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data : payments=[]} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    }) 
    return (
        <div>
            <SectionTitle
            heading='all payments here'>

            </SectionTitle>
            <div>
                <h2>Total Payment: {payments.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-yellow-500">
                        <tr>
                            <th></th>
                            <th>EMAIL</th>
                            <th>TRANSCTION ID</th>
                            <th>TOTAL PRICE</th>
                            <th>PAYENT DATE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index +1}</th>
                                <td>{user.email}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.price}</td>
                                <td>{payment.date}</td>
                            </tr>)
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
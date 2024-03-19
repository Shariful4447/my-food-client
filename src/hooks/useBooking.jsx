import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBooking = () => {
    const axiosPublic = useAxiosPublic();
    // with tanstack query
    const {data: bookings = [], isPending: loading, refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/bookings');
            return res.data;

        }
    })
    return [bookings, loading, refetch]
};

export default useBooking;
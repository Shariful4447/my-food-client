import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            
            <SectionTitle 
            heading='ADD AN ITEM'
            subHeading='---Whats new?---'
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />
                    <select {...register("category")} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select a Category</option>
                        <option value="salad">Salad</option>
                        <option value="soup">Soup</option>
                        <option value="deinks">Drinks</option>
                        <option value="pizza">Pizza</option>
                        <option value="desserts">Desserts</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;
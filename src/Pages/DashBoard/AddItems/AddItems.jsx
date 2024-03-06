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
                    
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                            
                        </label>
                        <input 
                            type="text" 
                            placeholder="Recipe name" 
                            {...register('name')} 
                            className="input input-bordered w-full" />
                    </div>
                    
                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>
                                
                            </label>
                            <select {...register("category")} className="select select-bordered w-full">
                                <option disabled selected>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="deinks">Drinks</option>
                                <option value="pizza">Pizza</option>
                                <option value="desserts">Desserts</option>
                            </select>
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>
                                
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
            
                        </div>
                        <input type="text" placeholder="Recipe Details*" className="input input-bordered h-24 w-full" />

                    </label>
                    <input type="file" className="file-input file-input-ghost w-full max-w-xs my-4 bg-slate-400"/> <br />
                    <button className="btn btn-outline btn-accent w-72 my-4 text-center mx-auto">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) =>{
        console.log(data);
    //upload image to the imgbb and get the url
        const imageFile = {image : data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        });
        if(res.data.success) {
            //now send this to the database
            const menuItem = {
                name: data.name,
                category: data.category,
                price: data.price,
                recipe: data.recipe,
                image : res.data.data.display_url
            }
            //send with secure
            console.log('with imageurl', menuItem);
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes);
            if(menuRes.data.insertedId){
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been saved to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        }
        console.log(res.data);
    } 
    
     
    return (
        <div>
            
            <SectionTitle 
            heading='ADD AN ITEM'
            subHeading='---Whats new?---'
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                            
                        </label>
                        <input 
                            type="text" 
                            placeholder="Recipe name" 
                            {...register('name', {required: true})} 
                            className="input input-bordered w-full" />
                    </div>
                    
                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>
                                
                            </label>
                            <select defaultValue="default" {...register("category", {required: true})} className="select select-bordered w-full">
                                <option disabled value="default">Select a Category</option>
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
                            <input type="text" {...register("price", {required: true})} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
            
                        </div>
                        <input type="text" {...register("recipe", {required: true})} placeholder="Recipe Details*" className="input input-bordered h-24 w-full" />

                    </label>
                    <input {...register("image", {required: true})} type="file" className="file-input file-input-ghost w-full max-w-xs my-4 bg-slate-400"/> <br />
                    <button className="btn btn-outline btn-accent w-72 my-4 text-center mx-auto">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
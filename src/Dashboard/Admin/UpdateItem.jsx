import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Update = () => {

    const item = useLoaderData()
    console.log(item);


    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit, reset, } = useForm()

    const onSubmit = async (data) => {
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })

        if(res.data.success){
            const menuItem = {
                name: data?.name,
                category: data?.category,
                price: parseFloat(data?.price),
                recipe: data?.recipe,
                image: res?.data?.data?.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${item?._id}`, menuItem)
            if(menuRes.data.insertedId){
                toast.success(`Update successfully`)
                reset()
            }
        }
    }

    

    return (
        <div>
            <SectionTitle heading={'update item'} subHeading={'Update Information'}></SectionTitle>
            <div>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input defaultValue={item?.name} {...register("name")} type="text" placeholder="Name" className="input input-bordered w-full " />

                    </label>

                    <div className="flex gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register("category")} defaultValue={item?.category} className="select select-bordered w-full ">
                                <option disabled value={'default'}>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input defaultValue={item?.price} {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full" />

                        </label>

                    </div>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={item?.recipe} {...register("recipe")} className="textarea textarea-bordered w-full" placeholder="Recipe"></textarea>

                    </label>

                    <input {...register("image")} type="file" className="file-input block w-full max-w-xs" />
                    <button className="btn btn-outline">
                        Update Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;
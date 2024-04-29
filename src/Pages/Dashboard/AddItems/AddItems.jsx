import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";


const AddItems = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => { console.log(data) };

    return (
        <div>
            <SectionTitle heading="add an item" subHeading="what's new?"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input {...register("name", {required: true})} />
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <input type="text" placeholder="Type here" {...register("name")} className="input input-bordered w-full" />
                        </label>
                    </div>
                </form>
            </div>
            <div className="flex gap-6">
                <div>
                    <input {...register("name", {required: true})} />
                    <label className="form-control w-full my-6">
                        <span className="label-text">Category</span>
                    </label>
                    <select {...register("category", {required: true})} className="select select-bordered w-full">
                        <option disabled selected>Who shot first?</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                </div>
                <div>
                    <input {...register("name", {required: true})} required />
                    required
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input type="text" placeholder="Price" {...register("price", {required: true})} className="input input-bordered w-full" />
                    </label>
                </div>
                <div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>
                </div>
                <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs" />
                <button className="btn">Add Item <FaUtensils /></button>
            </div>
        </div>
    );
};

export default AddItems;
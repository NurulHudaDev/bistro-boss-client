import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({item}) => {

    const {name, image, price, recipe} = item;
    const {user} = UseAuth();
    const navigate = useNavigate();

    const handleAddToCard = food =>{
        if(user && user.email){

        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login')
                }
              });
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">{price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCard(item)} className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 text-orange-400">add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
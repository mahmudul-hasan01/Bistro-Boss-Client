/* eslint-disable react/prop-types */


const FoodCard = ({ item }) => {

    const { name, price, image, recipe, _id } = item



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="text-white bg-black absolute right-5 top-5 px-3 py-2 rounded-md">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-start">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-2 border-orange-400 text-orange-400 font-bold mt-3 ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
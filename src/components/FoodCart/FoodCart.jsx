

const FoodCart = ({item}) => {
    const {name, image, price, recipe}=item;
    return (
        <div className="card w-[424px] bg-base-100 shadow-xl p-3">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 absolute right-0 text-white mr-4 mt-4 px-4">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                
                <div className="card-actions">
                <button className="btn btn-outline bg-slate-200 border-0 border-orange-400 border-b-4">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;
import FoodCart from "../../../components/FoodCart/FoodCart";


const ShopTabPanel = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10 place-items-center mt-10">
            {
                items.map(item =><FoodCart
                key={item._id}
                item={item}
                ></FoodCart>)
                        
            }
        </div>
    );
};

export default ShopTabPanel;
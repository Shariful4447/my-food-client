

const MenuItem = ({item}) => {
    const {name, image, price, recipe}=item;
    return (
        <div className="flex gap-5 mb-5">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-28" src={image} alt="" />
            <div className="flex gap-5">
                <div>
                    <h3>{name}---------</h3>
                    <p>{recipe}</p>
                </div>
                <div>
                    <p className="text-yellow-400 text-xl">{price}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
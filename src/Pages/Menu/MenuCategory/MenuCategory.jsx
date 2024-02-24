import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from '../../Shared/Cover/Cover';
import { Link } from "react-router-dom";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-0 my-10">
                {
                    items.map(item =><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/shop/${title}`}>
                <div className="mx-auto text-center mt-5">
                    <button className="btn btn-outline border-0 border-b-4">See Full Menu</button>
                </div>
            </Link>
            
        </div>
    );
};

export default MenuCategory;
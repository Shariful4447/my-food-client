import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu </title>
            </Helmet>
            <div className='mb-10 bg-slate-500 bg-opacity-60'>
                <Cover 
                 img={menuImg}
                 title="our menu"
                >

                </Cover>
            </div>
        </div>
    );
};

export default Menu;
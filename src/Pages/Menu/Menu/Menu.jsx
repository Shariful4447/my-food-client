import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';



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
            <PopularMenu></PopularMenu>

            <div className='mb-10 bg-slate-500 bg-opacity-60'>
                <Cover 
                 img={menuImg}
                 title="our menu"
                >

                </Cover>
                
            </div>
            <PopularMenu></PopularMenu>

            <div className='mb-10 bg-slate-500 bg-opacity-60'>
                <Cover 
                 img={menuImg}
                 title="our menu"
                >

                </Cover>
                
            </div>
            <PopularMenu></PopularMenu>
            
            <div className='mb-10 bg-slate-500 bg-opacity-60'>
                <Cover 
                 img={menuImg}
                 title="our menu"
                >

                </Cover>
                
            </div>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;
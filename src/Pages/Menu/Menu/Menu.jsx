import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';





const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category ==='offered')
    const desert = menu.filter(item => item.category ==='dessert')
    const salad = menu.filter(item => item.category ==='salads')
    const soup = menu.filter(item => item.category ==='soup')
    const pizza = menu.filter(item => item.category ==='pizza')
    const drinks = menu.filter(item => item.category ==='drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu </title>
            </Helmet>
            <div className='mb-10 bg-slate-500 bg-opacity-60'>
                <Cover img={menuImg} title="our menu"></Cover>
            </div>
            <SectionTitle
            heading="todays offer"
            subHeading="Don't miss"
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory 
            items={desert}
            title="Desserts"
            img={dessertImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;
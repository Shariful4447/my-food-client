import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import shopImage from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop </title>
            </Helmet>
            <div className='mb-10 bg-slate-500 bg-opacity-60'>
                <Cover img={shopImage} title="our Shop"></Cover>
            </div>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Soup</Tab>

                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import shopImage from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";

import ShopTabPanel from "../ShopCart/ShopTabPanel";

const Shop = () => {
    const [tabIndex, setTabIndex] =useState(0);
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category ==='offered')
    const desert = menu.filter(item => item.category ==='dessert')
    const salad = menu.filter(item => item.category ==='salad')
    const soup = menu.filter(item => item.category ==='soup')
    const pizza = menu.filter(item => item.category ==='pizza')
    const drinks = menu.filter(item => item.category ==='drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop </title>
            </Helmet>
            <div className='mb-10 bg-slate-500 bg-opacity-60'>
                <Cover img={shopImage} title="our Shop"></Cover>
            </div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                </TabList>
                <TabPanel>
                    <ShopTabPanel
                        items={salad}
                    ></ShopTabPanel>
                </TabPanel>
                <TabPanel>
                <ShopTabPanel
                        items={pizza}
                    ></ShopTabPanel>
                </TabPanel>
                <TabPanel>
                <ShopTabPanel
                        items={drinks}
                    ></ShopTabPanel>
                </TabPanel>
                <TabPanel>
                <ShopTabPanel
                        items={soup}
                    ></ShopTabPanel>
                </TabPanel>
                <TabPanel>
                <ShopTabPanel
                        items={desert}
                    ></ShopTabPanel>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Shop;
import React, { useState } from "react";
import Cover from '../../Shared/Cover/Cover';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UesMenu from "../../../Hooks/UesMenu";
import OderTab from "../OderTab/OderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

    const categorys = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categorys.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UesMenu();
    

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | order food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="OUR SHOP"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <OderTab items={salad}></OderTab>
                </TabPanel>
                <TabPanel>
                    <OderTab items={pizza}></OderTab>
                </TabPanel>
                <TabPanel>
                    <OderTab items={soup}></OderTab>
                </TabPanel>
                <TabPanel>
                    <OderTab items={desserts}></OderTab>
                </TabPanel>
                <TabPanel>
                    <OderTab items={drinks}></OderTab>
                </TabPanel>
            </Tabs>
        </div>

    );
}

export default Order;
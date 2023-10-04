import React from "react";
import { Helmet } from 'react-helmet-async';
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import UesMenu from "../../../Hooks/UesMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = UesMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="OUR MENU"></Cover>
            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory
                items={desserts}
                title="Dessert"
                img={dessertImg}
            ></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
        </div>
    );
}

export default Menu;
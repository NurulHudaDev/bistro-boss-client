import React from "react";
import MenuItem from "../../../Pages/Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({items, title, img}) => {

    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
             <div className="grid grid-cols-2 gap-10 my-16">
                {items.map(item=> <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)}
            </div>
        </div>
    );
}

export default MenuCategory;
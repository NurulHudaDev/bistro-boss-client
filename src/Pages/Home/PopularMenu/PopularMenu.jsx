import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Pages/Shared/MenuItem/MenuItem";
import UesMenu from "../../../Hooks/UesMenu";

const PopularMenu = () => {

    const [menu] = UesMenu();
    const pooular = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([]);

    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {const popularItems = data.filter(item => item.category === 'popular'); 
    //     setMenu(popularItems)})
    // },[])

    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {pooular.map(item=> <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)}
            </div>
        </section>
    );
}

export default PopularMenu;
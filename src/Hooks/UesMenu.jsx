import React, { useEffect, useState } from "react";

const UesMenu = () => {

    const [menu, setMenu] = useState([]);
    const [loding, setLoding] = useState(true);

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            
            setMenu(data)
            setLoding(false)
        
        })
    },[])

    return [menu, loding]
}

export default UesMenu;
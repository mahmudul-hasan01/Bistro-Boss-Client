import { useEffect, useState } from "react";

const useMenu = () => {
    
    const [menuData, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            setMenu(data)
        })
    }, [])
    return [menuData]
};

export default useMenu;
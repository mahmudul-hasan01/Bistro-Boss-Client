import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";

const PopularManu = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popular = data.filter(item => item.category === 'popular')
            setMenu(popular)
        })
    }, [])


    // const popular = menuData.filter(item => item.category === 'popular')

    

    return (
        <div className="mb-10">
            <SectionTitle heading={'from our memu'} subHeading={'Check It Out'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 my-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center w-full">
                <button className="btn btn-outline border-0 border-b-2 font-bold mt-3 ">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularManu;
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import image from '../../assets/menu/banner3.jpg'
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Menu = () => {

    return (
        <div>
            <Helmet>
                <title>Food Haven || Menu</title>
            </Helmet>
            <Cover img={image} title={'Our menu'}></Cover>
            <SectionTitle heading={"tody's offer"} subHeading={"Don't miss"}></SectionTitle>

        </div>
    );
};

export default Menu;
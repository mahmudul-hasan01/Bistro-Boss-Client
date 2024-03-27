import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularManu from "./PopularManu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularManu></PopularManu>
            <Featured></Featured>
        </div>
    );
};

export default Home;
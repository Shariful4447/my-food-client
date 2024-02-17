import ContactPhone from "../../ContactPhone/ContactPhone";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <ContactPhone></ContactPhone>
            <Featured></Featured>
        </div>
    );
};

export default Home;
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
       
        <section className="featured-item py-5 h-[740px] mb-10 text-white">
            <SectionTitle
                heading="featured item"
                subHeading="check It Out"
            >

            </SectionTitle>
            <div className="md:flex justify-center items-center gap-10 px-36 py-22 mt-10">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <p className="text-uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline">Buy Now</button>
                </div>
            </div>

        </section>
       
    );
};

export default Featured;
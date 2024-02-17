import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import pizza from '../../../assets/menu/pizza-bg.jpg'



const ChefRecomendations = () => {
    return (
        <section>
            <SectionTitle
                heading="chef recomendations"
                subHeading="Should Try"
            >

            </SectionTitle>
            <div className="mt-10 mb-10 grid md:grid-cols-3 px-10">
                <div className="card w-[424px] bg-base-100 shadow-xl">
                    <figure><img src={salad} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[424px] bg-base-100 shadow-xl">
                    <figure><img src={pizza} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">Pizza</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[424px] bg-base-100 shadow-xl">
                    <figure><img src={soup} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">Soup</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecomendations;
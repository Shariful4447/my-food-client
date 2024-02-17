
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ReviewIndividual from "./ReviewIndividual";


const Testimonials = () => {
    
    return (
        <section className="mt-10 mb-10"> 
            <SectionTitle
                heading="TESTIMONIALS"
                subHeading="What Our Clients Say"
            >

            </SectionTitle>
            <div>
                
                    <ReviewIndividual 
                        
                    ></ReviewIndividual>
                
            </div>
        </section>
    );
};

export default Testimonials;
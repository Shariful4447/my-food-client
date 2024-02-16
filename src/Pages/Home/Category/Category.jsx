import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Marquee from "react-fast-marquee";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import { Link } from "react-router-dom";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Category = () => {
    return (
       <section className="mt-10 mb-10">
            <div className="mx-auto text-center md:w-4/12 my-8">
                <h2 className="text-yellow-600 mb-2">From 11.00am to 10.00pm</h2>
                <h2 className="text-3xl uppercase border-y-4 py-4">Order Online</h2>
            </div>
             {/* <Swiper
                slidesPerView={4}
                spaceBetween={1}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                    
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
            </Swiper> */}
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-6" to="/">
                    <img className="mr-5" src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </Link>
                <Link className="mr-6" to="/">
                    <img className="mr-5" src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                </Link>
                <Link className="mr-6" to="/">
                    <img className="mr-5" src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
                </Link>
                <Link className="mr-6" to="/">
                    <img className="mr-5" src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
                </Link>
                <Link className="mr-6" to="/">
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </Link>
                


            </Marquee>
       </section>
    );
};

export default Category;
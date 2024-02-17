import { useEffect, useState } from "react";

const ReviewIndividual = () => {
    const [review, setReview] = useState([])
    
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReview(data)
            
        })
    },[])
    return (
        <div>
            
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                
                
                
            </div>
        </div>
    );
};

export default ReviewIndividual;
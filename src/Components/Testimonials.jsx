import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('../../../public/reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="mb-2">
            <h2 className="text-center text-xl text-yellow-500 my-4">--What Our Clients Say--</h2>
            <h1 className="text-center font-semibold text-3xl mb-4">Reviews</h1>
            <div>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2000, // 2 seconds interval
                    disableOnInteraction: false, // Continue autoplay after interaction
                }}
                spaceBetween={40}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

                {
                    review.map(review => (
                        <SwiperSlide key={review._id}>
                            <div className="flex justify-center items-center">
                                <div className="md:w-2/6" >
                                    <h1 className='text-center'>{review.details}</h1>
                                    <div className="flex justify-center items-center">
                                    <Rating style={{ maxWidth: 120 }} value={review.rating}  />
                                    </div>
                                    <h1 className='text-center text-2xl text-blue-500'>{review.name}</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
        </div>
    );
};

export default Testimonials;
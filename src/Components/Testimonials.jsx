import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('../../../public/reviews.json')
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center mb-6">
        <h2 className="text-yellow-500 text-xl mb-1">-- What Our Clients Say --</h2>
        <h1 className="text-4xl font-bold text-gray-800">Testimonials</h1>
      </div>

      <div className="w-11/12 md:w-4/5 lg:w-2/3 mx-auto">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="rounded-xl"
        >
          {review.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="bg-white shadow-md rounded-lg p-8 mx-4 transition-all duration-300 hover:shadow-xl">
                <p className="text-gray-700 text-lg text-center mb-4 italic">
                  “{review.details}”
                </p>
                <div className="flex justify-center mb-3">
                  <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />
                </div>
                <h1 className="text-center text-xl font-semibold text-blue-600">{review.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

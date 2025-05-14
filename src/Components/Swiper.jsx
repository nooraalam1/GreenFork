import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Swiperr = () => {
  const slides = [
    { src: '../../../public/Img/slide1.jpg', label: 'Salads' },
    { src: '../../../public/Img/slide2.jpg', label: 'Pizza' },
    { src: '../../../public/Img/slide3.jpg', label: 'Soups' },
    { src: '../../../public/Img/slide4.jpg', label: 'Desserts' },
    { src: '../../../public/Img/slide5.jpg', label: 'Drinks' },
  ];

  return (
    <div className="py-10 bg-gradient-to-br from-white to-gray-100">
      <h2 className="text-yellow-600 text-2xl text-center font-medium mb-2">-- From 11AM To 10PM --</h2>
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">Order Online</h2>

      <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto">
        <Swiper
          slidesPerView={3}
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
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={slide.src}
                  alt={`slide-${index}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 text-center text-white text-lg font-semibold">
                  {slide.label}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Swiperr;

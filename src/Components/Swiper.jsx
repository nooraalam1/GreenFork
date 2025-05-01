
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Swiperr = () => {
    return (
        <div className="">
            <h2 className="text-yellow-600 text-2xl text-center my-4">--From 11AM To 10PM--</h2>
            <h2 className="text-2xl text-center mb-4">Order Online</h2>
            <div className='w-3/5 mx-auto'>  
            <Swiper
        slidesPerView={4}
        autoplay={{
            delay: 2000, // 2 seconds interval
            disableOnInteraction: false, // Continue autoplay after interaction
        }}
        spaceBetween={40}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src='../../../public/Img/slide1.jpg'/> </SwiperSlide>
        <SwiperSlide><img src='../../../public/Img/slide2.jpg'/> </SwiperSlide>
        <SwiperSlide><img src='../../../public/Img/slide3.jpg'/> </SwiperSlide>
        <SwiperSlide><img src='../../../public/Img/slide4.jpg'/> </SwiperSlide>
        <SwiperSlide><img src='../../../public/Img/slide5.jpg'/> </SwiperSlide>
      </Swiper>
    </div>
        </div>
    );
};

export default Swiperr;
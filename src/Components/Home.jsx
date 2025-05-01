import React from 'react';
import Banner from './Banner';
import Swiper from './Swiper';
import Testimonials from './Testimonials';
import Ourmenu from './Ourmenu';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Swiper></Swiper>
         <Testimonials></Testimonials>
         <Ourmenu></Ourmenu>
        </div>
    );
};

export default Home;
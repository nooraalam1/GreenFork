import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {

    return (
        <div className="">
            <Carousel autoPlay interval={2000} infiniteLoop>
                <div >
                    <img  src="../../../public/Img/01.jpg" />
                </div>
                <div>
                    <img src="../../../public/Img/02.jpg" />
                </div>
                <div>
                    <img src="../../../public/Img/03.png" />
                </div>
                <div>
                    <img src="../../../public/Img/04.jpg" />
                </div>
                <div>
                    <img src="../../../public/Img/05.png" />
                </div>
                <div>
                    <img src="../../../public/Img/06.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
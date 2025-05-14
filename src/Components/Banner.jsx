import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto mt-4 rounded-xl overflow-hidden shadow-lg">
            <Carousel 
                autoPlay 
                interval={2000} 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false}
                dynamicHeight={false}
            >
                {["01.jpg", "02.jpg", "03.png", "04.jpg", "05.png", "06.png"].map((img, index) => (
                    <div key={index} className="relative">
                        <img
                            src={`/Img/${img}`}
                            alt={`Banner Slide ${index + 1}`}
                            className="object-cover w-full h-[60vh] sm:h-[70vh]"
                        />
                        {/* Optional overlay text */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <h2 className="text-white text-2xl md:text-4xl font-semibold">Welcome to GreenFork</h2>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;

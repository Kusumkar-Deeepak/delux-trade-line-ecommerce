"use client";

import { Carousel } from "flowbite-react";
import img1 from '../images/img1.jpg';  // Ensure the correct file extension is used

const Hero = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
                <img src="https://img.freepik.com/free-vector/flat-supermarket-sale-background_23-2149379271.jpg" alt="Supermarket Sale" />
                <img src={img1} alt="Local Groceries" />
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Carousel Image 3" />
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Carousel Image 4" />
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Carousel Image 5" />
            </Carousel>
        </div>
    );
};

export default Hero;

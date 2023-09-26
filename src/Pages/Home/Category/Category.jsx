import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import Slide1 from '../../../assets/home/slide1.jpg';
import Slide2 from '../../../assets/home/slide2.jpg';
import Slide3 from '../../../assets/home/slide3.jpg';
import Slide4 from '../../../assets/home/slide4.jpg';
import Slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={Slide1} alt="" />
                    <h2 className=" text-4xl uppercase text-center -mt-24 text-white drop-shadow-lg">Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide2} alt="" />
                    <h2 className=" text-4xl uppercase text-center -mt-24 text-white drop-shadow-lg">Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide3} alt="" />
                    <h2 className=" text-4xl uppercase text-center -mt-24 text-white drop-shadow-lg">Pazzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide4} alt="" />
                    <h2 className=" text-4xl uppercase text-center -mt-24 text-white drop-shadow-lg">Desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide5} alt="" />
                    <h2 className=" text-4xl uppercase text-center -mt-24 text-white drop-shadow-lg">Salads</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Category;
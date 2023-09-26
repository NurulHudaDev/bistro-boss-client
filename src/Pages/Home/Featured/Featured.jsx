import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeaturedImage from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return(
        <div className="featured-item text-white my-20 bg-fixed">
            <div className="ovarle">
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-8 px-36">
                <div>
                    <img src={FeaturedImage} alt="" />
                </div>
                <div className="md:ml-10">
                        <p>March 20, 2023</p>
                        <p className="uppercase">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button class="btn btn-outline border-0 border-b-4 text-white">Read More</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Featured;
import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true
    };
    return (
      <div className="w-[100vw] lg:w-[65%] mx-auto overflow-hidden">
        <Slider {...settings} className='mb-9'>
          <div>
            <img className="w-[100%] lg:h-[50vh] object-cover" src="https://cdn.shopify.com/s/files/1/0507/9688/8239/products/pdp_gallery_01_main_6f09195c-c6c6-4ec6-9991-484eb907290d_large@2x.png?v=1645628255" alt="" />
          </div>
          <div>
          <img className="w-[100%] lg:h-[50vh] object-cover" src="https://i.shgcdn.com/e5911dbd-c7a4-4daa-a774-292d9157456f/-/format/auto/-/preview/3000x3000/-/quality/better/" alt="" />
          </div>
          <div>
          <img className="w-[100%] lg:h-[50vh] object-cover" src="https://i.shgcdn.com/416a5371-5348-4b02-86b7-17123a2b7473/-/format/auto/-/preview/3000x3000/-/quality/best/" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
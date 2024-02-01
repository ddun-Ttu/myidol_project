import React from "react";
import MainNav from "../CommonComponent/MainNav/MainNav";

// 라이브러리
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 이미지

const MainComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <MainNav />
      <div>
        <Slider {...settings}>{/* <div>{Mimg1}</div> */}</Slider>
      </div>
    </>
  );
};

export default MainComponent;

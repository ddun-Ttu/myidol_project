import React from "react";
import MainNav from "../CommonComponent/MainNav/MainNav";

// 라이브러리
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 배너 이미지
import Img1 from "../../assets/Images/Banner/Main_banner01.svg";
import Img2 from "../../assets/Images/Banner/Main_banner02.svg";
import Img3 from "../../assets/Images/Banner/Main_banner03.svg";

// css styles
import { BannerDiv, Div } from "./MainComponentStyle";

const MainComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Div>
      <BannerDiv>
        <MainNav />
        <div>
          <Slider {...settings}>
            <img src={Img3} alt="Slide 1" />
            <img src={Img1} alt="Slide 1" />
            <img src={Img2} alt="Slide 1" />
          </Slider>
        </div>
      </BannerDiv>
    </Div>
  );
};

export default MainComponent;

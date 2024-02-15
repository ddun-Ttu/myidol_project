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
import { BannerDiv } from "./MainComponentStyle";
import { Container, BasicBlack } from "../../styles/Container";
import { styled } from "styled-components";

// 스타일
const Header = styled.div`
  font-size: 24px;
  color: white;
  text-align: center;
  margin-bottom: 16px;
`;

const SearchBar = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const CartButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;
`;

const ProfileButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;
`;

const Category = styled.div`
  font-size: 18px;
  color: white;
  margin-bottom: 8px;
`;

const ItemWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const ItemTitle = styled.div`
  font-size: 16px;
  margin-top: 8px;
`;

const ItemPrice = styled.div`
  font-size: 14px;
  color: #777;
`;

const items = [
  {
    id: 1,
    title: "NewJeans(뉴스)",
    image: "https://via.placeholder.com/100x100",
    price: 12500,
  },
  {
    id: 2,
    title: "OMG [MESSAGE CARD VER]",
    image: "https://via.placeholder.com/100x100",
    price: 12500,
  },
  {
    id: 1,
    title: "NewJeans(뉴스)",
    image: "https://via.placeholder.com/100x100",
    price: 12500,
  },
  {
    id: 2,
    title: "OMG [MESSAGE CARD VER]",
    image: "https://via.placeholder.com/100x100",
    price: 12500,
  },
  {
    id: 1,
    title: "NewJeans(뉴스)",
    image: "https://via.placeholder.com/100x100",
    price: 12500,
  },
  {
    id: 2,
    title: "OMG [MESSAGE CARD VER]",
    image: "https://via.placeholder.com/100x100",
    price: 12500,
  },
  // ... more items
];

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
      <BannerDiv>
        <MainNav />
        <div>
          <Slider {...settings}>
            <img src={Img3} alt="Slide 1" />
            <img src={Img1} alt="Slide 1" />
            <img src={Img2} alt="Slide 1" />
          </Slider>
        </div>
        <div></div>
      </BannerDiv>
      <BasicBlack>
        <Container>
          <Category>여자 아이돌</Category>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {items.map((item) => (
              <ItemWrapper key={item.id}>
                <ItemImage src={item.image} />
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>₩{item.price}</ItemPrice>
              </ItemWrapper>
            ))}
          </div>
        </Container>
      </BasicBlack>
    </>
  );
};

export default MainComponent;

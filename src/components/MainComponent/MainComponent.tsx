import React, { useEffect, useState } from "react";
import MainNav from "../CommonComponent/MainNav/MainNav";

// 라이브러리
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";

// 배너 이미지
import Img1 from "../../assets/Images/Banner/Main_banner01.svg";
import Img2 from "../../assets/Images/Banner/Main_banner02.svg";
import Img3 from "../../assets/Images/Banner/Main_banner03.svg";

// css styles
import {
  BannerDiv,
  Category,
  ItemImage,
  ItemWrapper,
  ItemTitle,
  ItemPrice,
  Div2,
  items,
} from "./MainComponentStyle";
import { Container, BasicBlack } from "../../styles/Container";
import { db } from "../../firebase/firebase";

const MainComponent = () => {
  const [initialProduct, setInitialProduct] = useState<any[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<any | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "product"));
      const querySnapshot = await getDocs(q);
      const products: any[] = [];

      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });

      setInitialProduct(products);

      const a = initialProduct.map((item) => item.id);
      console.log(initialProduct);
    };

    fetchData();
  }, []);

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
          <Div2>
            {items.map((item) => (
              <ItemWrapper key={item.id}>
                <ItemImage src={item.image} />
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>₩{item.price}</ItemPrice>
              </ItemWrapper>
            ))}
          </Div2>
        </Container>
      </BasicBlack>
    </>
  );
};

export default MainComponent;

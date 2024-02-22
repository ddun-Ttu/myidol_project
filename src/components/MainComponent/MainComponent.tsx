import React, { useEffect, useState } from "react";
import MainNav from "../CommonComponent/MainNav/MainNav";
import { useLocation, useNavigate } from "react-router-dom";

// 라이브러리
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { db, storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
import { Container, BasicBlack2 } from "../../styles/Container";
import {
  BannerDiv,
  Category,
  ItemImage,
  ItemWrapper,
  ItemTitle,
  ItemPrice,
  Div2,
  SeeMoreA,
} from "./MainComponentStyle";

const MainComponent = () => {
  const [initialProduct, setInitialProduct] = useState<any[]>([]);
  const navigate = useNavigate();
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
    };

    fetchData();
  }, []);

  // 상세페이지 버튼 클릭 이벤트
  const handleDetailsClick = (id: string) => {
    setSelectedProductId(id);
    navigate(`/product/${id}`, { state: { id } });
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
      </BannerDiv>
      <BasicBlack2>
        <Container>
          <Category>여자 아이돌</Category>
          <SeeMoreA to="/">더보기 ▷</SeeMoreA>

          <Div2>
            {initialProduct.map((item) => (
              <button key={item.id} onClick={() => handleDetailsClick(item.id)}>
                <ItemWrapper key={item.id}>
                  <ItemImage src={item.ImagePath} />
                  <ItemTitle>{item.IdolName}</ItemTitle>
                  <ItemTitle>{item.Album}</ItemTitle>
                  <ItemPrice>₩{item.Price}</ItemPrice>
                </ItemWrapper>
              </button>
            ))}
          </Div2>
        </Container>
      </BasicBlack2>
    </>
  );
};

export default MainComponent;

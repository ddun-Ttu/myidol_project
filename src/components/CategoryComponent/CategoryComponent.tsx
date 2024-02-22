import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainNav from "../CommonComponent/MainNav/MainNav";
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
} from "./CategoryComponentStyle";

const CategoryComponent = () => {
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

  // 카테고리 필터링
  const femaleIdolProducts = initialProduct.filter(
    (item) => item.Category === "여자아이돌"
  );
  return (
    <>
      <BannerDiv>
        <MainNav />
      </BannerDiv>
      <BasicBlack2>
        <Container>
          <Category>여자아이돌</Category>

          <Div2>
            {femaleIdolProducts.map((item) => (
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

export default CategoryComponent;

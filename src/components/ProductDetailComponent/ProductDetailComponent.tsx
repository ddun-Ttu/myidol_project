import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db, storage } from "../../firebase/firebase";

// 스타일
import {
  ButtonWrapper,
  Container,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  QuantityInput,
  QuantityLabel,
  QuantityWrapper,
  TotalPrice,
  BuyButton,
  CartButton,
} from "./ProductDetailComponentStyle";

const ProductDetail = () => {
  const { id } = useParams<{ id: any }>();
  const [product, setProduct] = useState<any | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetcData = async () => {
      try {
        const productRef = doc(db, "product", id);

        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          const productData = productSnapshot.data();
          setProduct(productData);

          console.log(productData);
        } else {
          console.log("정보가 없습니다");
        }
      } catch (error) {
        console.error("정보를 가져오는 중 오류 발생:", error);
      }
    };

    fetcData();
  }, [id]);

  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const album = product.Album;
  const count = product.Count;
  const details = product.Details;
  const idolname = product.IdolName;
  const price = product.Price;
  const img = product.ImagePath;

  return (
    <>
      <ProductImage src={img} />
      <ProductInfo>
        <ProductTitle>{album}</ProductTitle>
        <ProductTitle>{idolname}</ProductTitle>
        <ProductPrice>{price}</ProductPrice>
        <QuantityWrapper>
          <QuantityLabel>수량</QuantityLabel>
          <QuantityInput
            value={quantity.toString()}
            onChange={handleQuantityChange}
          />
        </QuantityWrapper>
        <TotalPrice>총액: {quantity * price}원</TotalPrice>
      </ProductInfo>
      <ButtonWrapper>
        <BuyButton>바로 구매하기</BuyButton>
        <CartButton>장바구니 담기</CartButton>
      </ButtonWrapper>
    </>
  );
};
export default ProductDetail;

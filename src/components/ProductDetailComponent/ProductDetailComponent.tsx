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
  const [initialProduct, setInitialProduct] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "product"));
      const querySnapshot = await getDocs(q);
      const products: any[] = [];

      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });

      setInitialProduct(products);

      console.log(initialProduct);
    };

    fetchData();
  }, []);

  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  useEffect(() => {
    if (initialProduct.length > 0) {
      const selectedProduct = initialProduct.find((p) => p.id === id);
      setProduct(selectedProduct);
    }
  }, [initialProduct, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

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

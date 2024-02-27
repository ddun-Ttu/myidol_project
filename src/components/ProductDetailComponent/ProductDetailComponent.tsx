import { addDoc, collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import MainNav from "../CommonComponent/MainNav/MainNav";
import { BasicBlack2 } from "../../styles/Container";

// 스타일
import {
  ButtonWrapper,
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
  QuantityButton,
  DetailsExDiv,
  DetailsExP,
  Div,
  ContainerPro,
  Line,
  DivLeft,
  DivRight,
  ItemIdolName,
  LeftAlign,
  DetailsExH1,
  Span,
} from "./ProductDetailComponentStyle";

const ProductDetail = () => {
  const { id } = useParams<{ id: any }>();
  const [product, setProduct] = useState<any | null>(null);
  const [initialProduct, setInitialProduct] = useState<any[]>([]);
  // const [initialUserCart, setInitialUserCart] = useState<any[]>([]);

  // const [userCart, setUserCart] = useState([
  //   {
  //     productId: "",
  //     uid: "",
  //     quantity: 1,
  //     totalPrice: 100,
  //   },
  // ]);

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

  // 수량 데이터
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleIncrease = () => {
    if (quantity < product.Count) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
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

  const addCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleCartAdd = async () => {
    if (!product) return;

    const totalPrice = quantity * product.Price;

    const cartItem = {
      uid: auth.currentUser?.uid,
      productId: product.id,
      Album: product.Album,
      IdolName: product.IdolName,
      Price: product.Price,
      Count: product.Count,
      Category: product.Category,
      ImagePath: product.ImagePath,
      quantity: quantity,
      totalPrice: totalPrice,
    };

    try {
      const docRef = await addDoc(collection(db, "cart"), cartItem); 
    } catch (e) {
      console.error("Error adding cart item: ", e);
    }
  };

  const album = product.Album;
  // const count = product.Count;
  const details = product.Details;
  const idolname = product.IdolName;
  const price = product.Price;
  const img = product.ImagePath;

  const totalPrice = quantity * price;

  return (
    <>
      <ContainerPro>
        <BasicBlack2>
          <MainNav />
          <Div>
            <DivLeft>
              <ProductImage src={img} />
            </DivLeft>

            <DivRight>
              <ProductInfo>
                <LeftAlign>
                  <ItemIdolName>{idolname}</ItemIdolName>
                  <ProductTitle>{album}</ProductTitle>
                  <ProductPrice>{addCommas(price)}</ProductPrice>
                </LeftAlign>
                <Line></Line>

                <QuantityWrapper>
                  <QuantityLabel>수량</QuantityLabel>
                  <QuantityButton onClick={handleDecrease}>-</QuantityButton>
                  <QuantityInput
                    value={quantity.toString()}
                    onChange={handleQuantityChange}
                  />
                  <QuantityButton onClick={handleIncrease}>+</QuantityButton>
                </QuantityWrapper>
                <TotalPrice>
                  TOTAL <Span>{addCommas(totalPrice)}</Span>
                </TotalPrice>
              </ProductInfo>
              <ButtonWrapper>
                <BuyButton>바로 구매하기</BuyButton>
                <CartButton onClick={handleCartAdd}>장바구니 담기</CartButton>
              </ButtonWrapper>
            </DivRight>
          </Div>

          <DetailsExDiv>
            <DetailsExH1>상품 설명</DetailsExH1>
            <DetailsExP>{details}</DetailsExP>
          </DetailsExDiv>
        </BasicBlack2>
      </ContainerPro>
    </>
  );
};
export default ProductDetail;

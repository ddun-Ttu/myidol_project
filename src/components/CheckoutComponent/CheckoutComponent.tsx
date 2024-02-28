import { useEffect, useState } from "react";
import MainNav from "../CommonComponent/MainNav/MainNav";
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

import {
  CartContainer,
  CartTitle,
  CartItemContainer,
  CartItem,
  ItemName,
  ItemQuantity,
  ItemPrice,
  TotalPrice,
  CheckoutButton,
  DivButton,
} from "./CheckoutComponentStyle";

const CheckoutComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initialCart, setInitialCart] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        fetchData(user.uid);
      } else {
        setIsLoggedIn(false);
        setInitialCart([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchData = async (currentUserUid: string) => {
    const q = query(collection(db, "cart"));
    const querySnapshot = await getDocs(q);
    const userCart: any[] = [];

    querySnapshot.forEach((doc) => {
      const cartData = doc.data();
      // cart 항목의 uid를 현재 사용자의 uid와 비교
      if (cartData.uid === currentUserUid) {
        userCart.push({ id: doc.id, ...cartData });
      }
    });

    setInitialCart(userCart);
  };

  const addCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <MainNav />
      <CartContainer>
        <CartTitle>주문/결제</CartTitle>
        <CartItemContainer>
          {initialCart.map((item) => (
            <CartItem key={item.id}>
              <ItemName>{item.IdolName}</ItemName>
              <ItemName>{item.Album}</ItemName>
              <ItemQuantity>x{item.quantity}</ItemQuantity>
              <ItemPrice>{item.totalPrice}원</ItemPrice>
            </CartItem>
          ))}
        </CartItemContainer>
        <DivButton>
          <TotalPrice>
            총 가격:
            {addCommas(
              initialCart.reduce((acc, cur) => acc + cur.totalPrice, 0)
            )}
            원
          </TotalPrice>
        </DivButton>
        <CheckoutButton>결제하기</CheckoutButton>
      </CartContainer>
    </>
  );
};

export default CheckoutComponent;

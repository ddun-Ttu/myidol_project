import React, { useEffect, useState } from "react";

import { CartModal, CartOverlay, CloseButton } from "./CartComponentStyle";

import {
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TableDiv,
  ItemImage,
  BuyButton,
  NavA,
  H1,
  LoginButton,
} from "./CartComponentStyle";

const Cart = () => {
  const [initialCart, setInitialCart] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    console.log(userCart);
  };

  const [isOpen, setIsOpen] = useState(false);

  const buttonModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      {isLoggedIn ? (
        <TableDiv>
          {initialCart.length > 0 ? (
            <>
              <Table>
                <Thead>
                  <tr>
                    <Th></Th>
                    <Th>아이돌</Th>
                    <Th>앨범</Th>
                    <Th>수량</Th>
                    <Th>총 가격</Th>
                  </tr>
                </Thead>
                <Tbody>
                  {initialCart.map((cartItem) => (
                    <Tr key={cartItem.productId}>
                      <Td>
                        <ItemImage src={cartItem.ImagePath} />
                      </Td>
                      <Td>{cartItem.IdolName}</Td>
                      <Td>{cartItem.Album}</Td>
                      <Td>{cartItem.quantity}</Td>
                      <Td>{cartItem.totalPrice}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <BuyButton>전체 구매하기</BuyButton>
            </>
          ) : (
            <H1>장바구니가 비어 있습니다.</H1>
          )}
        </TableDiv>
      ) : (
        <div>
          <H1>로그인이 필요합니다.</H1>
          <NavA to="/login">
            <LoginButton>로그인</LoginButton>
          </NavA>
        </div>
      )}
    </>
  );
};

export default Cart;

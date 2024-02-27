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
} from "../../AdminComponent/AdminComponentStyle";

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
      {/* 현재 사용자의 로그인 상태를 확인하고 필요에 따라 JSX를 렌더링합니다 */}
      {isLoggedIn ? (
        <TableDiv>
          {initialCart.length > 0 ? (
            initialCart.map((cartItem) => (
              <>
                <Thead>
                  <tr>
                    <Th>아이돌</Th>
                    <Th>앨범명</Th>
                    <Th>카테고리</Th>
                    <Th>가격</Th>
                    <Th>수량</Th>
                  </tr>
                </Thead>
                <Tbody>
                  <Tr key={cartItem.productId}>
                    <Td>{cartItem.IdolName}</Td>
                    <Td>{cartItem.Album}</Td>
                    <Td>{cartItem.Category}</Td>
                    <Td>{cartItem.Price}</Td>
                    <Td>{cartItem.Count}</Td>
                  </Tr>
                </Tbody>
              </>
            ))
          ) : (
            <p>장바구니가 비어 있습니다.</p>
          )}
        </TableDiv>
      ) : (
        <div>
          <p>로그인이 필요합니다.</p>
          <button onClick={buttonModal}>로그인</button>
        </div>
      )}
    </>
  );
};

export default Cart;

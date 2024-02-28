import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase";

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
  P1,
  Button,
} from "./CartComponentStyle";

const Cart = () => {
  const [initialCart, setInitialCart] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

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

  const HandleDeleteClick = (id: string) => {
    // SweetAlert 경고창 표시
    Swal.fire({
      icon: "question",
      title: "주의",
      text: "상품을 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "예",
      cancelButtonText: "아니오",
      confirmButtonColor: "#429f50",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        // 확인 버튼을 눌렀을 때 삭제 진행
        deleteCart(id);
      }
    });
  };

  const deleteCart = async (id: string) => {
    try {
      const RegisterRef = doc(db, "cart", id);

      await deleteDoc(RegisterRef);

      setInitialCart((prev) => {
        return prev.filter((element) => element.id !== id);
      });

      // 삭제 완료 후 메시지 표시
      Swal.fire({
        icon: "success",
        title: "삭제 완료",
        text: "상품이 성공적으로 삭제되었습니다.",
      });

      // 페이지 다시 로드 또는 상태 업데이트 등 추가 작업
    } catch (error) {
      // 삭제 에러 발생 시 에러 메시지 표시
      Swal.fire({
        icon: "error",
        title: "삭제 오류",
        text: "상품 삭제 중 오류가 발생했습니다.",
      });
    }
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
                      <Td>
                        <Button onClick={() => HandleDeleteClick(cartItem.id)}>
                          삭제
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <P1>총 수량</P1>
              <P1>{initialCart.length}</P1>
              <P1>총 금액</P1>
              <P1>
                {addCommas(
                  initialCart.reduce((acc, cur) => acc + cur.totalPrice, 0)
                )}
              </P1>
              <NavA to="/checkout">
                <BuyButton>전체 구매하기</BuyButton>
              </NavA>
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

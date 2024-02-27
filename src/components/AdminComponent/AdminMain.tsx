import { useEffect, useState } from "react";
import AdminNav from "../CommonComponent/AdminNav/AdminNav";
import Swal from "sweetalert2";
import {
  collection,
  getDocs,
  query,
  deleteDoc,
  doc,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  Button,
  TableDiv,
  Th,
  Td,
  Table,
  Thead,
  Tr,
  AddButton,
  Tbody,
  LinkBtn,
} from "./AdminComponentStyle";

const AdminMain = () => {
  const [initialProduct, setInitialProduct] = useState<any[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<any | null>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

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
        deleteProduct(id);
      }
    });
  };
  const deleteProduct = async (id: string) => {
    try {
      const RegisterRef = doc(db, "product", id);

      await deleteDoc(RegisterRef);
      console.log("아이디값", id);

      setInitialProduct((prev) => {
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

  const handleEditClick = (id: string) => {
    setSelectedProductId(id);
    navigate(`/admin/edit/${id}`, { state: { id } });
  };

  useEffect(() => {
    if (pathname.startsWith("/admin/edit/") && selectedProductId) {
      const productIdFromPath = pathname.substring("/admin/edit/".length);
      if (productIdFromPath !== selectedProductId) {
        return;
      }
      const product = initialProduct.find(
        (product) => product.id === selectedProductId
      );
      if (!product) {
        return;
      }
    }
  }, [pathname, selectedProductId]);

  return (
    <>
      <AdminNav />
      <TableDiv>
        <LinkBtn to="/admin/register">
          <AddButton>상품등록</AddButton>
        </LinkBtn>

        <Table>
          <Thead>
            <tr>
              <Th>아이돌</Th>
              <Th>앨범명</Th>
              <Th>카테고리</Th>
              <Th>가격</Th>
              <Th>수량</Th>
              <Th></Th>
              <Th></Th>
            </tr>
          </Thead>

          <Tbody>
            {initialProduct.map((item) => (
              <Tr key={item.id}>
                <Td>{item.IdolName}</Td>
                <Td>{item.Album}</Td>
                <Td>{item.Category}</Td>
                <Td>{item.Price}</Td>
                <Td>{item.Count}</Td>
                <Td>
                  <Button onClick={() => handleEditClick(item.id)}>수정</Button>
                </Td>
                <Td>
                  <Button onClick={() => HandleDeleteClick(item.id)}>
                    삭제
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableDiv>
    </>
  );
};

export default AdminMain;

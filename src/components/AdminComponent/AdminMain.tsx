import { useEffect, useState } from "react";
import AdminNav from "../CommonComponent/AdminNav/AdminNav";
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

  const HandleDeleteClick = async (id: string) => {
    const RegisterRef = doc(db, "product", id);

    await deleteDoc(RegisterRef);
    console.log("아이디값", id);

    setInitialProduct((prev) => {
      return prev.filter((element) => element.id !== id);
    });
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

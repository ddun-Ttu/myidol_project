import React, { useEffect, useState } from "react";
import AdminNav from "../CommonComponent/AdminNav/AdminNav";
import {
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

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

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "product"));
      const querySnapshot = await getDocs(q);
      const products: any[] = [];

      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });

      setInitialProduct(products);

      const a = initialProduct.map((item) => item.Album
      );
      console.log(a);
      console.log(initialProduct);
    };

    fetchData();
  }, []);

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
                <Td>{item.Price}</Td>
                <Td>{item.Count}</Td>
                <Td>
                  <Button>수정</Button>
                </Td>
                <Td>
                  <Button>삭제</Button>
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

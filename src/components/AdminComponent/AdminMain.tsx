import React, { useEffect } from "react";
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
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "product"));
      const querySnapshot = await getDocs(q);
      const initialProduct: any[] = [];

      querySnapshot.forEach((doc) => {
        initialProduct.push({ id: doc.id, ...doc.data() });
      });
      console.log(initialProduct[0]);
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
              <Th></Th>
              <Th></Th>
            </tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td>
                <Button>수정</Button>
              </Td>
              <Td>
                <Button>삭제</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableDiv>
    </>
  );
};

export default AdminMain;

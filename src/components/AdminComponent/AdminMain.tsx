import React from "react";
import AdminNav from "../CommonComponent/AdminNav/AdminNav";

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
} from "./AdminComponentStyle";

const AdminMain = () => {
  return (
    <>
      <TableDiv>
        <AddButton>
            상품등록
        </AddButton>
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
              <Td>에스파</Td>
              <Td>1ST CONCERT `SYNK: HYPER LINE` PHOTOBOOK</Td>
              <Td>
                <Button>수정</Button>
              </Td>
              <Td>
                <Button>삭제</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>에스파</Td>
              <Td>1ST CONCERT `SYNK: HYPER LINE` PHOTOBOOK</Td>
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

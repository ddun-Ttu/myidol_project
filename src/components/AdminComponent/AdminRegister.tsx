import React from "react";

import AdminNav from "../CommonComponent/AdminNav/AdminNav";

import {
  Form,
  Input,
  H1,
  P1,
  Button,
  Select,
  Option,
  TextArea,
  Label,
  RegisterButton,
} from "./AdminComponentStyle";
import { ContainerWhite } from "../../styles/Container";

const AdminRegister = () => {
  return (
    <>
      <AdminNav />
      <ContainerWhite>
        <div>
          <H1>상품등록</H1>
        </div>
        <div>
          <Form>
            <div>
              <P1>아이돌</P1>
              <Input placeholder="아이브" type="text"></Input>
            </div>
            <div>
              <P1>앨범명</P1>
              <Input placeholder="I`VE MINE [미니 1집" type="text"></Input>
            </div>
            <div>
              <P1>가격</P1>
              <Input placeholder="12,000" type="number"></Input>
            </div>
            <div>
              <P1>수량</P1>
              <Input placeholder="10" type="number"></Input>
            </div>
            <div>
              <P1>카테고리</P1>
              <Select name="items">
                <Option value="1">전체</Option>
                <Option value="2">여자아이돌</Option>
                <Option value="3">남자아이돌</Option>
              </Select>
            </div>
            <div>
              <P1>사진</P1>
              <Input type="file"></Input>
            </div>
            <div>
              <P1>상품설명</P1>
              <TextArea placeholder="상품설명"></TextArea>
            </div>
            <div>
              <RegisterButton>등록하기</RegisterButton>
            </div>
          </Form>
        </div>
      </ContainerWhite>
    </>
  );
};

export default AdminRegister;

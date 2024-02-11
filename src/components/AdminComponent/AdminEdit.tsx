import React, { useEffect, useState } from "react";
import AdminNav from "../CommonComponent/AdminNav/AdminNav";
import { useLocation } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

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

const AdminEdit = () => {
  const [register, setRegister] = useState([
    {
      Album: "앨범명",
      IdolName: "아이돌명",
      Price: 23000,
      Count: 10,
      Details: "상세 설명",
    },
  ]);

  const [Album, setAlbum] = useState("");
  const [IdolName, setIdolName] = useState("");
  const [Price, setPrice] = useState(0);
  const [Count, setCount] = useState(0);
  const [Details, setDetails] = useState("");

  const onChange = (event: any) => {
    const {
      target: { name, value },
    } = event;
    if (name === "Album") {
      setAlbum(value);
    }
    if (name === "IdolName") {
      setIdolName(value);
    }
    if (name === "Price") {
      setPrice(value);
    }
    if (name === "Count") {
      setCount(value);
    }
    if (name === "Details") {
      setDetails(value);
    }
  };

  const addTodo = async (event: any) => {
    event.preventDefault();
    const newTodo = {
      Album: Album,
      IdolName: IdolName,
      Price: Price,
      Count: Count,
      Details: Details,
    };
    setRegister((prev) => {
      return [...prev, newTodo];
    });
    setAlbum("");
    setIdolName("");
    setPrice(0);
    setCount(0);
    setDetails("");

    // Firestore에서 'register' 컬렉션에 대한 참조 생성하기
    const collectionRef = collection(db, "product");
    // 'register' 컬렉션에 newTodo 문서를 추가합니다.
    await addDoc(collectionRef, newTodo);
  };

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
              <Input
                type="text"
                value={IdolName}
                name="IdolName"
                onChange={onChange}
                required
                placeholder="아이돌명"
              ></Input>
            </div>
            <div>
              <P1>앨범명</P1>
              <Input
                type="text"
                value={Album}
                name="Album"
                onChange={onChange}
                required
                placeholder="앨범명"
              ></Input>
            </div>
            <div>
              <P1>가격</P1>
              <Input
                value={Price}
                name="Price"
                onChange={onChange}
                required
                placeholder="가격"
                type="number"
              ></Input>
            </div>
            <div>
              <P1>수량</P1>
              <Input
                value={Count}
                name="Count"
                onChange={onChange}
                required
                placeholder="수량"
                type="number"
              ></Input>
            </div>
            {/* <div>
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
            </div> */}
            <div>
              <P1>상품설명</P1>
              <TextArea
                value={Details}
                name="Details"
                onChange={onChange}
                required
                placeholder="상품설명"
              ></TextArea>
            </div>
            <div>
              <RegisterButton onClick={addTodo}>등록하기</RegisterButton>
            </div>
          </Form>
        </div>
      </ContainerWhite>
    </>
  );
};

export default AdminEdit;

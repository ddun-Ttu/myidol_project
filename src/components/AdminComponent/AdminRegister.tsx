import React, { useEffect, useState } from "react";
import AdminNav from "../CommonComponent/AdminNav/AdminNav";
import { addDoc, collection} from "firebase/firestore";
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

const AdminRegister = () => {
  const [todos, setTodos] = useState([
    {
      text: "I'VE MINE 미니 1집",
      IdolName: "아이브",
      Price: 23000,
      Count: 10,
    },
  ]);

  const [text, setText] = useState("");

  const onChange = (event: any) => {
    const {
      target: { name, value },
    } = event;
    if (name === "text") {
      setText(value);
    }
  };

  const addTodo = async (event: any) => {
    event.preventDefault();
    const newTodo = {
      text: text,
      IdolName: "",
      Price: 0,
      Count: 0,
      isDone: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
    setText("");

    // Firestore에서 'todos' 컬렉션에 대한 참조 생성하기
    const collectionRef = collection(db, "todos");
    // 'todos' 컬렉션에 newTodo 문서를 추가합니다.
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
            {/* <div>
              <P1>아이돌</P1>
              <Input placeholder="아이브" type="text"></Input>
            </div> */}
            <div>
              <P1>앨범명</P1>
              <Input
                type="text"
                value={text}
                name="text"
                onChange={onChange}
                required
                placeholder="I`VE MINE [미니 1집"
              ></Input>
            </div>
            {/* <div>
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
            </div> */}
            <div>
              <RegisterButton onClick={addTodo}>등록하기</RegisterButton>
            </div>
          </Form>
        </div>
      </ContainerWhite>
    </>
  );
};

export default AdminRegister;

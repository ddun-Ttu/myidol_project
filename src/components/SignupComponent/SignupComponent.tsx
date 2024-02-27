import React from "react";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Container, BasicBlack2 } from "../../styles/Container";
import { Link } from "react-router-dom";
import MainNav from "../CommonComponent/MainNav/MainNav";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

import {
  Logo,
  H1,
  SignupForm,
  SignupInput,
  Button,
  P1,
  P2,
  Padding,
} from "./SignupComponentStyle";

import logo from "../../assets/Icons/MainLogo.svg";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 유저 접속 여부 확인 -> 추후 uid 값으로 페이지 변환시키기
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      console.log("유저", user);
    });
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const SignUp = async (event: any) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const userRef = collection(db, "user");
      await addDoc(userRef, {
        uid: user.uid,
        email: user.email,
      });
      navigate("/login");

      console.log("유저 로그인 성공 ", userCredential.user);
      console.log("파이어베이스 정보 저장 ", user);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("유저 로그인 에러 ", errorCode, errorMessage);
    }
  };

  return (
    <BasicBlack2>
      <MainNav />
      <Container>
        <div>
          <Logo src={logo} alt="로고" />
          <H1>아이돌즈 회원가입</H1>
        </div>
        <div>
          <SignupForm>
            <div>
              <SignupInput placeholder="이름" type="text"></SignupInput>
            </div>
            <div>
              <SignupInput
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="이메일"
                required
              ></SignupInput>
            </div>
            <div>
              <SignupInput
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="비밀번호"
                required
              ></SignupInput>
            </div>
            <div>
              <SignupInput
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="비밀번호 확인"
                required
              ></SignupInput>
            </div>

            <div>
              <Button onClick={SignUp}>회원가입하기</Button>
            </div>
          </SignupForm>
        </div>

        <Padding>
          <P1>이미 회원가입을 하셨다면</P1>
          <Link to="/login">
            <P2>로그인하기</P2>
          </Link>
        </Padding>
      </Container>
    </BasicBlack2>
  );
};

export default SignupComponent;

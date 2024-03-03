import React from "react";
import { useState, useEffect } from "react";
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
  GuideP,
} from "./SignupComponentStyle";

import logo from "../../assets/Icons/MainLogo.svg";
import { collection, addDoc } from "firebase/firestore";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  // 유저 접속 여부 확인 -> 추후 uid 값으로 페이지 변환시키기
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      // console.log("유저", user);
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
    if (name === "password2") {
      setPassword2(value);
    }
  };

  useEffect(() => {
    setPasswordMatch(password === password2);
  }, [password, password2]);

  const SignUp = async (event: any) => {
    event.preventDefault();

    try {
      if (!passwordMatch) {
        console.log("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return;
      }

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

      // console.log("유저 로그인 성공 ", userCredential.user);
      // console.log("파이어베이스 정보 저장 ", user);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("유저 로그인 에러 ", errorCode, errorMessage);
    }
  };
  const isInputEmpty = !email || !password || !password2;
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
                name="password2"
                value={password2}
                onChange={onChange}
                placeholder="비밀번호 확인"
                required
              ></SignupInput>
              {!passwordMatch && (
                <GuideP>비밀번호와 비밀번호 확인이 일치하지 않습니다.</GuideP>
              )}
            </div>
            <div>
              <Button
                onClick={SignUp}
                disabled={isInputEmpty || !passwordMatch}
              >
                회원가입
              </Button>
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

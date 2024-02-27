import { Container, BasicBlack1 } from "../../styles/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import MainNav from "../CommonComponent/MainNav/MainNav";

import {
  Logo,
  H1,
  DivLogin1,
  LoginInput,
  LoginForm,
  Button,
  P1,
  P2,
  Padding,
  LoginContainer,
} from "./LoginComponentStyle";
import logo from "../../assets/Icons/MainLogo.svg";

const LoginComponent = () => {
  const [user, setUser] = useState([
    {
      email: "",
      password: "",
      accessToken: "",
      uid: "",
    },
  ]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [accessToken, setAccessToken] = useState("");
  // const [uid, setUid] = useState("");
  const navigate = useNavigate();

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

  const SignIn = async (event: any) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("유저 로그인 성공 ", userCredential.user);

      navigate("/");
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("유저 로그인 에러 ", errorCode, errorMessage);
    }
  };

  return (
    <LoginContainer>
      <MainNav />
      <BasicBlack1>
        <Container>
          <div>
            <Logo src={logo} alt="로고" />
          </div>
          <DivLogin1>
            <div>
              <H1>환영해요! 아이돌즈</H1>
            </div>
            <LoginForm>
              <div>
                <LoginInput
                  type="email"
                  value={email}
                  name="email"
                  onChange={onChange}
                  required
                ></LoginInput>
              </div>
              <div>
                <LoginInput
                  type="password"
                  value={password}
                  name="password"
                  onChange={onChange}
                  required
                ></LoginInput>
              </div>
            </LoginForm>

            <div>
              <Button onClick={SignIn}>
                로그인하기
              </Button>
            </div>
          </DivLogin1>

          <Padding>
            <P1>아직 회원가입을 안 하셨나요?</P1>
            <Link to="/signup">
              <P2>회원가입하기</P2>
            </Link>
          </Padding>
        </Container>
      </BasicBlack1>
    </LoginContainer>
  );
};

export default LoginComponent;

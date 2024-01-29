import { Container } from "../../styles/Container";
import { Link } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Logo,
  H1,
  DivLogin1,
  DivLogin2,
  LoginInput,
  LoginForm,
  Button,
  P1,
  P2,
  Padding,
} from "./LoginComponentStyle";
import logo from "../../assets/Icons/MainLogo.svg";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      {/* <div>
        <Logo src={logo} alt="로고" />
      </div>
      <DivLogin1>
        <div>
          <H1>환영해요 아이돌즈</H1>
        </div>
        <LoginForm>
          <div>
            <LoginInput
              type="email"
              value={email}
              name="email"
              onChange={}
              required
            ></LoginInput>
          </div>
          <div>
            <LoginInput
              type="password"
              value={password}
              name="password"
              onChange={}
              required
            ></LoginInput>
          </div>
        </LoginForm>

        <div>
          <Button onClick={}>로그인하기</Button>
        </div>
      </DivLogin1>

      <Padding>
        <P1>아직 회원가입을 안 하셨나요?</P1>
        <Link to="/signup">
          <P2>회원가입하기</P2>
        </Link>
      </Padding> */}
    </Container>
  );
};

export default LoginComponent;

import React from "react";
import { Container } from "../../styles/Container";

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

const SignupComponent = () => {
  return (
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
            <SignupInput placeholder="이메일" type="email"></SignupInput>
          </div>
          <div>
            <SignupInput placeholder="비밀번호" type="password"></SignupInput>
          </div>
          <div>
            <SignupInput
              placeholder="비밀번호 확인"
              type="password"
            ></SignupInput>
          </div>

          <div>
            <Button>회원가입하기</Button>
          </div>
        </SignupForm>
      </div>

      <Padding>
        <P1>이미 회원가입을 하셨다면</P1>
        <a>
          <P2>로그인하기</P2>
        </a>
      </Padding>
    </Container>
  );
};

export default SignupComponent;

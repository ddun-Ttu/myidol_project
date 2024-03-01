import React from "react";
import { FooterContainer, LeftText, RightText, Logo, P } from "./FooterStyle";
import logo from "../../../assets/Icons/MainLogo.svg";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LeftText>
        <Logo src={logo} alt="logo" />
      </LeftText>
      <RightText>
        <P>© 2024 마이 아이돌즈. All rights reserved</P>
        <P>https://github.com/ddun-Ttu/myidol_project</P>
        <P>2024.01.24 ~ 2024.02.29</P>
        <P>개인프로젝트</P>
      </RightText>
    </FooterContainer>
  );
};

export default Footer;

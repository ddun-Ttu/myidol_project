import logo from "../../../assets/Icons/NavLogo.svg";

import {
  Nav,
  NavUl,
  NavLi,
  NavA,
  EmptyCenter,
  NavP,
  NavLogo,
} from "./AdminNavStyle";

const AdminNav = () => {
  return (
    <Nav>
      <NavUl>
        <NavLi>
          <NavA to="/">
            <NavLogo src={logo} alt="logo"></NavLogo>
          </NavA>
        </NavLi>
        <EmptyCenter />

        <NavLi>
          <NavA to="/">
            <NavP>메인 페이지</NavP>
          </NavA>
        </NavLi>

        <NavLi>
          <NavA to="/admin">
            <NavP>관리자 페이지</NavP>
          </NavA>
        </NavLi>

        <NavLi>
          <NavA to="/">
            <NavP>로그아웃</NavP>
          </NavA>
        </NavLi>
      </NavUl>
    </Nav>
  );
};

export default AdminNav;

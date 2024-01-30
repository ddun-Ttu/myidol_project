import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  width: 100%;
  height: 90px;
  position: fixed;
  z-index: 99;
  background-color: rgba(253, 185, 185, 0.5);
`;

export const NavUl = styled.ul`
  padding: 0 3rem;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavLi = styled.li`
  width: 20%;
  padding: 1%;
  margin: 0 3rem;
`;

export const NavA = styled(Link)`
  color: #000;
`;

export const NavImg = styled.img`
  width: 41px;
  height: 41px;
`;

export const NavP = styled.p`
  color: #777777;
  font-weight: 500;
  margin: 4px 0 0 0;
  font-size: 20px;
`;

export const NavLogo = styled.img`
//   padding: 3% 0 0 0;
  width: 100%;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  width: 100%;
  height: 70px;
  margin: ;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);

  position: fixed;
  top: 0;
  left: 0;
`;

export const NavUl = styled.ul`
  padding: 0 3rem;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavLi = styled.li`
  padding: 1%;
  margin: auto 3rem;
`;

export const NavA = styled(Link)`
  color: #000;
`;

export const CartA = styled.p`
  color: #000;
  cursor: pointer;
`;

export const NavImg = styled.img`
  width: 41px;
  height: 41px;
`;

export const NavP = styled.p`
  color: #fff;
  font-weight: 500;
  margin: 4px 0 0 0;
  font-size: 16px;
`;

export const NavLogo = styled.img`
  width: 80%;
`;

export const EmptyCenter = styled.div`
  flex-grow: 1;
`;

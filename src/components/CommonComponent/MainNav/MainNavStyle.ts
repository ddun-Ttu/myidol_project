import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  width: 100%;
  height: 70px;
  margin: ;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);

  position: absolute;
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

// 모달창

export const CartModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 가운데 정렬 */
  background-color: #fff;
  width: 800px; /* 너비 조절 가능 */
  height: 500px; /* 높이 조절 가능 */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 50;
  transition: opacity 0.3s ease-in-out;
`;

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  color: #000;
  transition: color 0.2s ease-in-out;
`;

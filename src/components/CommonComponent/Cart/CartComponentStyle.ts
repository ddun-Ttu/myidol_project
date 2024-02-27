import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 가운데 정렬 */
  background-color: #fff;
  width: 800px; /* 너비 조절 가능 */
  height: 500px; /* 높이 조절 가능 */
  padding: 20px 0px;
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

export const TableDiv = styled.div`
  margin: 60px auto;
  max-height: 400px;
  overflow: auto;
  overflow-y: auto;
  width: 90%;
  padding: 2% 1% 6%;

  box-sizing: border-box;
`;
export const Thead = styled.thead`
  border-bottom: 2px solid #000;
  color: #000;
  font-size: 16px;
`;
export const Tbody = styled.tbody`
  font-size: 2.5rem;
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
export const Th = styled.th`
  text-align: center;
  padding: 10px;
`;
export const Td = styled.td`
  text-align: center;
  padding: 5px 10px;
  font-size: 14px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  color: #000;
  font-weight: 500;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
`;
export const LinkBtn = styled(Link)``;

export const Tr = styled.tr`
  border-bottom: 1px solid #000;
  padding: 10px;
`;

export const AddButton = styled.button`
  width: 135px;
  height: 50px;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: #000;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  margin: 3% 0 1% auto;
  margin-left: 85%;
`;

// 상품등록 페이지
export const Form = styled.form`
  padding: 0 25%;
  text-align: center;
  margin-top: 2%;
  max-width: 100%;
`;

export const Input = styled.input`
  padding: 3%;
  width: 100%;
  margin: 3%;
  background: none;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box;
  outline: none;
  color: #000;
`;

export const H1 = styled.h1`
  text-align: center;
  padding: 30px;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-top: 5%;
`;

export const P1 = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  text-align: left;
  margin-left: 3rem;
`;

export const P2 = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #cacaca;
`;

export const Select = styled.select`
  padding: 3%;
  width: 100%;
  margin: 3%;
  background: none;
  border: 2px solid #000;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box;
  outline: none;
  color: #000;
  text-align: center;
`;

export const Option = styled.option`
  width: 135px;
  height: 50px;
  border-radius: 10px;
`;

export const TextArea = styled.textarea`
  padding: 3%;
  width: 100%;
  margin: 3%;
  background: none;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box;
  outline: none;
  color: #000;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  text-align: left;
  margin-left: 3rem;
`;

export const RegisterButton = styled.button`
  width: 70%;
  height: 70px;
  border-radius: 50px;
  color: #fff;
  border: none;
  background-color: #000;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  margin: 10% 0 3% 0;
`;

export const ItemImage = styled.img`
  border-radius: 4px;
  width: 30%;
  height: 30%;
  object-fit: cover;
`;

export const BuyButton = styled.button`
  width: 30%;
  height: 50px;
  background-color: #000;
  border-radius: 50px;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin: 0 auto;
`;

export const NavA = styled(Link)``;

export const LoginButton = styled.div`
  width: 30%;
  height: 50px;
  background-color: #000;
  border-radius: 50px;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin: 0 auto;
  padding: 2%;
  text-align: center;
  margin: 0 auto;
`;

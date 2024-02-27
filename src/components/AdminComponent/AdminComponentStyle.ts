import styled from "styled-components";
import { Link } from "react-router-dom";

// 메인 페이지
export const TableDiv = styled.div`
  margin: 60px auto;
  width: 80%;

  box-sizing: border-box;
`;
export const Thead = styled.thead`
  border-bottom: 2px solid #000;
  color: #000;
  font-size: 2.6rem;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
  @media (max-width: 390px) {
    font-size: 1.5rem;
  }
`;
export const Tbody = styled.tbody`
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 390px) {
    font-size: 1.4rem;
  }
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
export const Th = styled.th`
  text-align: center;
  padding: 20px;
`;
export const Td = styled.td`
  text-align: center;
  padding: 30px;
  font-size: 16px;
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


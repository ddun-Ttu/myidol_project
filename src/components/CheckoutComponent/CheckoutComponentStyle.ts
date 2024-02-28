import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 60%;
  margin: 0 auto;
  margin-top: 20%;
  padding: 4%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const CartTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 5%;
`;

export const CartItemContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2%;

  font-size: 18px;
`;

export const ItemName = styled.div``;

export const ItemQuantity = styled.div`
  color: #777;
`;

export const ItemPrice = styled.div`
  font-weight: 600;
`;

export const TotalPrice = styled.div`
  font-size: 20px;
  margin-top: 20px;
  font-weight: 600;
  text-align: right;
`;

export const CheckoutButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  width: 20%;
  height: 46px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;
export const DivButton = styled.div`
  align-items: right;
`;

export const Alink = styled(Link)``;

// 주문결제창 스타일

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 5%;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const InputLabel = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 18px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px; /* 선 길이 */
  background-color: #ccc; /* 선 색상 */
  margin-top: 4%;
  margin: 5% auto;
`;

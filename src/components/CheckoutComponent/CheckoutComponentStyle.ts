import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 70%;
  margin: 0 auto;
  margin-top: 20%;
  padding: 5%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const CartTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
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
  margin-bottom: 5px;
`;

export const ItemName = styled.div`
  font-weight: bold;
`;

export const ItemQuantity = styled.div`
  color: #777;
`;

export const ItemPrice = styled.div`
  font-weight: bold;
`;

export const TotalPrice = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;
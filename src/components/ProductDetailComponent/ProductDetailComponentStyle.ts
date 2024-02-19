import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: 20px auto;
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ProductPrice = styled.h2`
  font-size: 18px;
  margin-top: 10px;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const QuantityLabel = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

export const QuantityInput = styled.input`
  width: 50px;
  height: 30px;
  border: 1px solid #ddd;
  padding: 5px;
  text-align: center;
`;

export const TotalPrice = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

export const BuyButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const CartButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #ddd;
  color: #000;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
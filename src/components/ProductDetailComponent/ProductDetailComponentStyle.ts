import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: 20px auto;
`;

export const ProductImage = styled.img`
  width: 50%;
  height: 50%;
  margin: 0 auto;
  object-fit: contain;
  display: grid;
  place-items: center;
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
  color: #fff;
`;

export const ProductPrice = styled.h2`
  font-size: 18px;
  margin-top: 10px;
  color: #fff;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const QuantityLabel = styled.span`
  font-size: 16px;
  margin-right: 10px;
  color: #fff;
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
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  // display: flex;
  // justify-content: space-between;
  // margin-top: 20px;
  // width: 100%;
  // flexdirection: column;
  // align-items: center;
  display: grid;
  placeitmes: center;
`;

export const BuyButton = styled.button`
  width: 20%;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  margin: 3% auto 1% auto;
`;

export const CartButton = styled.button`
  width: 20%;
  height: 50px;
  background-color: #fff;
  border-radius: 50px;
  font-weight: bold;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  margin: auto;
`;

export const Div = styled.div`
  padding-top: 10%;
`;

export const DetailsExDiv = styled.div`
  padding: 10%;
`;
export const DetailsExP = styled.p`
  color: #fff;
  font-size: 30px;
  white-space: pre-wrap;
`;

// 전체 container 스타일
export const ContainerPro = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

// 수량 버튼
export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  // overflow: hidden;
  padding: 10%;
  color: #fff;
`;

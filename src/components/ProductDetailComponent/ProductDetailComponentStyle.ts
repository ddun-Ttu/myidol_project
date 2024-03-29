import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: 20px auto;
`;
// 전체 container 스타일
export const ContainerPro = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  height: 100vh;
  background-color: #000;
`;

export const ProductImage = styled.img`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
  place-items: center;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin-top: 20px;
`;

export const ProductTitle = styled.h1`
  font-size: 22px;
  margin-top: 1%;
  font-weight: 700;
  color: #fff;
`;

export const ProductPrice = styled.div`
  font-size: 18px;
  margin-top: 10px;
  color: #fff;
`;

export const ItemIdolName = styled.p`
  font-size: 16px;
  margin-top: 6%;
  color: #9c9c9c;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  // margin-top: 20px;
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

export const TotalPrice = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-top: 20px;
  text-align: left;
  color: #fff;
`;
export const Span = styled.span`
  margin-left: 30%;
  font-weight: 600;
  font-size: 20px;
`;

export const LeftAlign = styled.div`
  text-align: left;
`;
export const ButtonWrapper = styled.div`
  display: flex;
`;

export const BuyButton = styled.button`
  width: 32%;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  margin: 8% 3% 3% 0;
`;

export const CartButton = styled.button`
  width: 32%;
  height: 50px;
  background-color: #fff;
  border-radius: 50px;
  font-weight: bold;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  margin: 8% 3% 3% 0;
`;

export const Div = styled.div`
  padding-top: 10%;
  display: flex;
  width: 90%;

  margin: 0 auto;
`;

export const DetailsExDiv = styled.div`
  padding: 5% 10%;
  text-align: left;
  border-radius: 5px;
  background-color: #444;
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
`;
export const DetailsExP = styled.p`
  padding: 5%;
  color: #fff;
  font-size: 16px;
  white-space: pre-wrap;
`;

export const Line = styled.div`
  width: 60%;
  height: 1px; /* 선 길이 */
  background-color: #fff; /* 선 색상 */
  margin-top: 4%;
  // margin: 5% auto; /* 가운데 정렬 */
`;

// 수량 버튼
export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 5% 10%;
  color: #fff;
  font-size: 30px;
`;

export const DivLeft = styled.div`
  width: 62%;
`;

export const DivRight = styled.div`
  width: 46%;
`;

export const DetailBackground = styled.div`
  border-radius: 5px;
  background-color: #444;
`;

export const DetailsExH1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  padding: 0%;
`;

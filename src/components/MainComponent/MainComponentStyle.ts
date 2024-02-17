import styled from "styled-components";
import { Link } from "react-router-dom";

export const BannerDiv = styled.div`
  position: relative;
`;

export const Div = styled.div`
  background: #000;
`;
export const Category = styled.div`
  font-size: 18px;
  color: white;
  margin-bottom: 8px;
`;

export const ItemWrapper = styled.div`
  //   width: 30%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  grid-column: span 1;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const ItemTitle = styled.div`
  font-size: 16px;
  margin-top: 8px;
  color: #fff;
`;

export const ItemPrice = styled.div`
  font-size: 14px;
  color: #777;
`;

export const Div2 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

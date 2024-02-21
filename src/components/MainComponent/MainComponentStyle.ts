import styled from "styled-components";
import { Link } from "react-router-dom";

export const BannerDiv = styled.div`
  position: relative;
  background: #000;
`;

export const Category = styled.div`
  font-size: 24px;
  color: white;
  padding-top: 5%;
  margin-bottom: 3%;
`;

export const ItemWrapper = styled.div`
  border-radius: 4px;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  grid-column: span 1;
  box-sizing: border-box;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ItemImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const ItemTitle = styled.div`
  font-size: 20px;
  margin-top: 3%;
  color: #fff;
`;

export const ItemPrice = styled.div`
  font-size: 18px;
  color: #777;
`;

export const Div2 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const SeeMoreA = styled(Link)`
  color: #fff;
  font-size: 18px;
`;

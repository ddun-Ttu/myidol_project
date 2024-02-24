import styled from "styled-components";
import { Link } from "react-router-dom";

export const BannerDiv = styled.div`
  position: relative;
  background: #000;
`;

export const Category = styled.div`
  font-size: 22px;
  color: white;
  font-weight: bold;
  padding-top: 8%;
  margin-bottom: 3%;
`;

export const ItemWrapper = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  cursor: pointer;
  grid-column: span 1;
  box-sizing: border-box;
  text-align: left;

  height: 100%;
`;

export const ItemImage = styled.img`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-style: preserve-3d; /* 3D 변형 유지 */
  transition: transform 0.8s ease-in-out;

  &:hover {
    transform: translateZ(100px) rotateY(360deg);
  }
`;

export const ItemTitle = styled.p`
  font-size: 18px;
  margin-top: 1%;
  font-weight: 700;
  color: #fff;
`;

export const ItemIdolName = styled.p`
  font-size: 16px;
  margin-top: 6%;
  color: #9c9c9c;
`;

export const ItemPrice = styled.div`
  font-size: 16px;
  color: #fff;
  font-weight: 800;
  margin-top: 3%;
`;

export const Div2 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const SeeMoreA = styled.p`
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;

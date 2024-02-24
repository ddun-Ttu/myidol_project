import styled from "styled-components";

export const CartModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 가운데 정렬 */
  background-color: #fff;
  width: 800px; /* 너비 조절 가능 */
  height: 500px; /* 높이 조절 가능 */
  padding: 20px;
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


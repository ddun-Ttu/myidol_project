import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  // padding-bottom: 3%; /* 고정 내비게이션과 겹치지 않도록 콘텐츠 하단에 패딩 추가 */
`;

export const ContainerWhite = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: white;
  margin: 0 auto;
  text-align: center;
  // padding-bottom: 3%; /* 고정 내비게이션과 겹치지 않도록 콘텐츠 하단에 패딩 추가 */
`;

export const BasicBlack1 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
`;

export const BasicBlack2 = styled.div`
  width: 100%;
  background-color: #000;
`;

/* [ align-items: center;] 
텍스트만 중앙정렬됨으로 혹시 텍스트가 없는 div나 이미지를 첨부하실 경우
해당 요소에 margin: auto; 를 넣어주세요! */

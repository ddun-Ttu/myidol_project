import React from "react";
import { useParams } from "react-router-dom";
import MainComponent from "../../components/MainComponent/MainComponent";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: any }>();

  return (
    <>
      <h1>상세페이지</h1>
      <p>ddddd</p>
    </>
  );
};

export default ProductDetail;

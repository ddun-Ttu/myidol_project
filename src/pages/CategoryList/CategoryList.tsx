import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";
import AdminNav from "../../components/CommonComponent/AdminNav/AdminNav";
import AdminRegister from "../../components/AdminComponent/AdminRegister";

const CategoryList = () => {
  return (
    <>
      <CategoryComponent />
    </>
  );
};

export default CategoryList;

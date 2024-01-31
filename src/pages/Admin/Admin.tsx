import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import AdminMain from "../../components/AdminComponent/AdminMain";
import AdminNav from "../../components/CommonComponent/AdminNav/AdminNav";
import AdminRegister from "../../components/AdminComponent/AdminRegister";

const Admin = () => {
  return (
    <>
      <AdminNav />
      <AdminRegister />
    </>
  );
};

export default Admin;

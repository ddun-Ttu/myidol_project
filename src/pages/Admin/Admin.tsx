import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <h1>관리자 페이지</h1>
    </>
  );
};

export default Admin;

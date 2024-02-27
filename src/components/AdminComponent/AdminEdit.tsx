// import React, { useEffect, useState } from "react";
// import AdminNav from "../CommonComponent/AdminNav/AdminNav";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   addDoc,
//   collection,
//   doc,
//   getDocs,
//   query,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "../../firebase/firebase";

// import {
//   Form,
//   Input,
//   H1,
//   P1,
//   Select,
//   Option,
//   TextArea,
//   RegisterButton,
// } from "./AdminComponentStyle";
// import { ContainerWhite } from "../../styles/Container";

const AdminEdit = () => {
  // const { productId } = useParams<{ productId: any }>();
  // const [initialProduct, setInitialProduct] = useState<any[]>([]);
  // const [register, setRegister] = useState([
  //   {
  //     Album: "앨범명",
  //     IdolName: "아이돌명",
  //     Price: 23000,
  //     Count: 10,
  //     Details: "상세 설명",
  //     Category: "여자아이돌",
  //   },
  // ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const q = query(collection(db, "product"));
  //     const querySnapshot = await getDocs(q);
  //     const products: any[] = [];

  //     querySnapshot.forEach((doc) => {
  //       products.push({ id: doc.id, ...doc.data() });
  //     });

  //     setInitialProduct(products);
  //     console.log(initialProduct);

  //     const selectedProduct = products.find(
  //       (product) => product.id === productId
  //     );

  //     console.log(querySnapshot);
  //   };

  //   fetchData();
  // }, []);

  // const handleEditSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const productRef = doc(db, "product", productId);

  //   try {
  //     await updateDoc(productRef, productId);
  //     console.log("Product updated successfully!");
  //   } catch (error) {
  //     console.error("Error updating product:", error);
  //   }
  // };

  // const [Album, setAlbum] = useState("");
  // const [IdolName, setIdolName] = useState("");
  // const [Price, setPrice] = useState(0);
  // const [Count, setCount] = useState(0);
  // const [Details, setDetails] = useState("");
  // const [Category, setCategory] = useState("");

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setRegister((prevProduct) => ({
  //     ...prevProduct,
  //     [name]: value,
  //   }));
  // };

  // const EditProduct = async (event: any) => {
  //   event.preventDefault();
  //   const newProduct = {
  //     Album: Album,
  //     IdolName: IdolName,
  //     Price: Price,
  //     Count: Count,
  //     Details: Details,
  //     Category: Category,
  //   };
  //   setRegister((prev) => {
  //     return [...prev, newProduct];
  //   });

  //   setAlbum("");
  //   setIdolName("");
  //   setPrice(0);
  //   setCount(0);
  //   setDetails("");

  //   const collectionRef = collection(db, "product");
  //   await addDoc(collectionRef, newProduct);
  // };

  return (
    <>
      {/* <AdminNav />
      <ContainerWhite>
        <div>
          <H1>상품등록</H1>
        </div>
        <div>
          <Form>
            <div>
              <P1>아이돌</P1>
              <Input
                type="text"
                value={IdolName}
                name="IdolName"
                onChange={handleChange}
                required
                placeholder="아이돌명"
              ></Input>
            </div>
            <div>
              <P1>앨범명</P1>
              <Input
                type="text"
                value={Album}
                name="Album"
                onChange={handleChange}
                required
                placeholder="앨범명"
              ></Input>
            </div>
            <div>
              <P1>가격</P1>
              <Input
                value={Price}
                name="Price"
                onChange={handleChange}
                required
                placeholder="가격"
                type="number"
              ></Input>
            </div>
            <div>
              <P1>수량</P1>
              <Input
                value={Count}
                name="Count"
                onChange={handleChange}
                required
                placeholder="수량"
                type="number"
              ></Input>
            </div>
            <div>
              <P1>카테고리</P1>
              <Select name="items">
                <Option value="여자아이돌">여자아이돌</Option>
                <Option value="남자아이돌">남자아이돌</Option>
              </Select>
            </div>
            <div>
              <P1>사진</P1>
              <Input type="file"></Input>
            </div>
            <div>
              <P1>상품설명</P1>
              <TextArea
                value={Details}
                name="Details"
                onChange={handleChange}
                required
                placeholder="상품설명"
              ></TextArea>
            </div>
            <div>
              <RegisterButton onClick={handleEditSubmit}>
                수정하기
              </RegisterButton>
            </div>
          </Form>
        </div>
      </ContainerWhite> */}
    </>
  );
};

export default AdminEdit;

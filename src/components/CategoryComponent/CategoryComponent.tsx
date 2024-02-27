import  { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainNav from "../CommonComponent/MainNav/MainNav";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query} from "firebase/firestore";

// css styles
import { Container, BasicBlack2 } from "../../styles/Container";
import {
  BannerDiv,
  Category,
  ItemImage,
  ItemWrapper,
  ItemTitle,
  ItemPrice,
  Div2,
} from "./CategoryComponentStyle";

const CategoryComponent = () => {
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state?.category || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "product"));
        const querySnapshot = await getDocs(q);

        const productsData: any[] = [];

        querySnapshot.forEach((doc) => {
          productsData.push({ id: doc.id, ...doc.data() });
        });

        const filteredProducts = productsData.filter(
          (item) => item.Category === category
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [category]);

  // 상세페이지 버튼 클릭 이벤트
  const handleDetailsClick = (id: string) => {
    navigate(`/product/${id}`, { state: { id } });
  };

  return (
    <>
      <BannerDiv>
        <MainNav />
      </BannerDiv>
      <BasicBlack2>
        <Container>
          <Category>{category}</Category>

          <Div2>
            {products.map((item) => (
              <button key={item.id} onClick={() => handleDetailsClick(item.id)}>
                <ItemWrapper>
                  <ItemImage src={item.ImagePath} />
                  <ItemTitle>{item.IdolName}</ItemTitle>
                  <ItemTitle>{item.Album}</ItemTitle>
                  <ItemPrice>₩{item.Price}</ItemPrice>
                </ItemWrapper>
              </button>
            ))}
          </Div2>
        </Container>
      </BasicBlack2>
    </>
  );
};

export default CategoryComponent;

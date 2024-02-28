import MainNav from "../CommonComponent/MainNav/MainNav";
import {
  CartContainer,
  CartTitle,
  CartItemContainer,
  CartItem,
  ItemName,
  ItemQuantity,
  ItemPrice,
  TotalPrice,
  CheckoutButton,
  DivButton,
  Alink,
} from "./CheckoutComponentStyle";

const Payment = () => {
  return (
    <>
      <MainNav />
      <CartContainer>
        <CartTitle>주문/결제</CartTitle>

        <DivButton></DivButton>
        <Alink to="/checkout/payment">
          <CheckoutButton>결제하기</CheckoutButton>
        </Alink>
      </CartContainer>
    </>
  );
};

export default Payment;

import MainNav from "../CommonComponent/MainNav/MainNav";
import Postcode from "@actbase/react-daum-postcode";
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
  PaymentForm,
  FormTitle,
  FormRow,
  InputLabel,
  InputField,
  Line,
} from "./CheckoutComponentStyle";

const Payment = () => {
  return (
    <>
      <MainNav />
      <CartContainer>
        <PaymentForm>
          <FormTitle>구매자 정보</FormTitle>
          <FormRow>
            <InputLabel>이름</InputLabel>
            <InputField type="text" name="name" required />
          </FormRow>
          <FormRow>
            <InputLabel>이메일</InputLabel>
            <InputField type="email" name="email" required />
          </FormRow>
          <FormRow>
            <InputLabel>휴대폰 번호</InputLabel>
            <InputField type="text" name="PhoneNumber" required />
          </FormRow>

          <Line></Line>

          <FormTitle>받는사람 정보</FormTitle>
          <FormRow>
            <InputLabel>배송주소</InputLabel>

            <InputField type="text" placeholder="주소" required />
          </FormRow>
          <FormRow>
            <InputLabel>배송 요청사항</InputLabel>
            <InputField type="text" name="문 앞" required />
          </FormRow>
          <Alink to="/checkout/payment">
            <CheckoutButton>결제하기</CheckoutButton>
          </Alink>
        </PaymentForm>
      </CartContainer>
    </>
  );
};

export default Payment;

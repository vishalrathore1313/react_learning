import React, { useContext } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import CartItem from "./CartItem";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
import Bill from "./Bill";

function Cart() {
  const {cartItem,grandTotal,setGrandTotal} = useContext(UserContext);
  let a=10;
  const GT = cartItem.reduce((total, item, index) => {
    const itemQuantity = item.quantity;
    return total + item.price * itemQuantity;
  }, 0);
   setGrandTotal(GT);
  return (
    <Container>
      <Div1>
        <Navbar />
      </Div1>
      <Div2>
        <Div3>
          {cartItem && cartItem.length > 0 ? (
            cartItem.map((item, index) => (
              <Div5 key={index}>
                <CartItem item={item} index={index} />
              </Div5>
            ))
          ) : (
            <h2>Your cart is empty</h2>
          )}
        </Div3>
        <Div4>
          <GrandTotal>
            <GT_Heading>Grand Total</GT_Heading>
            <TotalAmount>Total Price:₹{grandTotal.toFixed(2)}</TotalAmount>
            <Link to="/bill">
              <BuyNowButton disabled={!cartItem.length}>Buy Now</BuyNowButton>
            </Link>
          </GrandTotal>
        </Div4>
      </Div2>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Div1 = styled.div``;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-top: 0;
  padding: 0;
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  padding: 5px;
`;

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-left: 4px solid #b9bec7;
  padding-top: 5px;
  background-color: #cbd0d4;
`;

const GrandTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 230px;
  width: 100%;
  background-color: #f7e0bc;
`;

const GT_Heading = styled.h2`
  color: black;
`;

const TotalAmount = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

const BuyNowButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const Div5 = styled.div`
  margin: 5px;
`;

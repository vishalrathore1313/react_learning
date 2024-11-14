import React, { useContext } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import CartItem from "./CartItem";
import UserContext from "../context/UserContext";

function Cart() {
  const { cartItem, quantity } = useContext(UserContext);

  const grandTotal = cartItem.reduce((total, item, index) => {
    const itemQuantity = quantity[index] || 1; 
    return total + item.price * itemQuantity;
  }, 0);

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
            <p>Your cart is empty</p>
          )}
        </Div3>
        <Div4>
          <GrandTotal>
            <GT_Heading>Grand Total</GT_Heading>
            <TotalAmount>Total Pay:₹{grandTotal.toFixed(2)}</TotalAmount>
            <BuyNowButton>Buy Now</BuyNowButton>
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
  padding: 5px;
`;

const GrandTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 3px solid gray;
  height: 230px;
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

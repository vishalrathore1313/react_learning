import React, { useContext } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import CartItem from "./CartItem";
import UserContext from "../context/UserContext";
function Cart() {
  const { cartItem } = useContext(UserContext);

  return (
    <Container>
      <Div1>
        <Navbar />
      </Div1>
      <Div2>
        <Div3>
          {cartItem &&
            cartItem.length > 0 &&
            cartItem.map((item, index) => (
              <Div5>
                <CartItem item={item} index={index}/>
              </Div5>
            ))}
        </Div3>
        {/* <Div3>
              <CartItem />
            </Div3> */}
        <Div4></Div4>
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
  flex-grow: 1;
  border-left: 4px solid #b9bec7;
`;
const Div5 = styled.div`
  margin: 5px;
`;

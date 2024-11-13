import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <Div1>
        <UL>
          <LI>
            {" "}
            <Link to="/">
              <Span>Home</Span>
            </Link>
          </LI>
          <LI>
            {" "}
            <Link to="/shop">
              <Span>Shop</Span>
            </Link>
          </LI>
          <LI>
            {" "}
            <Link to="/shop">
              <Span>Contact</Span>
            </Link>
          </LI>
        </UL>
      </Div1>
      <Logo>
        <Img src="./logo.png" alt="Logo should be here" />
      </Logo>
      <Div2>
        <Link to="/cart">
          <FaShoppingCart size="40px" color="#1d4ed8" />
        </Link>
        {/* <FaShoppingCart size="10x" /> */}
        <Button>LogOut</Button>
      </Div2>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: antiquewhite;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UL = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const LI = styled.li`
  font-size: 130%;
  cursor: pointer;
  &:hover {
    color: #2455f4;
  }
  text-decoration: none;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 35%;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 35px;
  width: 120px;
`;

const Button = styled.button`
  width: 60%;
  font-size: 110%;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1d4ed8;
  cursor: pointer;
  &:hover {
    background-color: blue;
  }
`;

const Span = styled.span`
  color: black;
  &:hover {
    color: #2455f4;
  }
  text-decoration: none;
`;

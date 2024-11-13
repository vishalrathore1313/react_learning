import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Div1>
        <Navbar />
      </Div1>
      <Div2>
        <Link to="/shop"><Span>Shop Now</Span></Link>
      </Div2>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Div1 = styled.div`

`;

const Div2 = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 0;
  padding: 0;
  background-image: url("bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-position: center; */
  background-size: cover;
`;

 const Span= styled.span`
  font-size: 120%;
  font-weight: bold;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: black;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
  position: absolute;
  top: 400px;
  left: 300px;
 `;
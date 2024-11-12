import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

function Home() {
  return (
    <Container>
      <Div1>
        <Navbar />
      </Div1>
      <Div2>
        <Button>Shop Now</Button>
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
 width: 100%;
 height: 100px;
`;

const Div2 = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  background-image: url("bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

const Button = styled.button`
  width: 10%;
  font-size: 130%;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: black;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
  position: absolute;
  top: 340px;
  left: 300px;
`;

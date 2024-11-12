import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Demoimage from "../image/demoimage.jpg";
import Card from "./Card";

function Shop() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Im tile ",
      price: "$$$$$",
      category: "&&&&&&&&",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 2,
      title: "T-Shirt",
      price: "200",
      category: "cloth",
      description: "bhbhjs......",
      image: Demoimage,
    },
    {
      id: 3,
      title: "T-Shirt",
      price: "200",
      category: "cloth",
      description: "bhbhjs......",
      image: Demoimage,
    },
    {
      id: 4,
      title: "T-Shirt",
      price: "200",
      category: "cloth",
      description: "bhbhjs......",
      image: Demoimage,
    },
    {
      id: 5,
      title: "T-Shirt",
      price: "200",
      category: "cloth",
      description: "bhbhjs......",
      image: Demoimage,
    },
    {
      id: 6,
      title: "T-Shirt",
      price: "200",
      category: "cloth",
      description: "bhbhjs......",
      image: Demoimage,
    },
    {
      id: 7,
      title: "T-Shirt",
      price: "200",
      category: "cloth",
      description: "bhbhjs......",
      image: Demoimage,
    },
    {
      id: 8,
      title: "T-Shirt",
      price: "200",
      category: "cloth",
      description: "bhbhjs......",
      image: Demoimage,
    },
    {
      id: 9,
      title: "T-Shirt",
      price: "200",
      category: "cloth",
      description: "bhbhjs......",
      image: Demoimage,
    },
    {
      id: 10,
      title: "T-Shirt",
      price: "200",
      category: "cloth",
      description: "bhbhjs......",
      image: Demoimage,
    },
    {
      id: 11,
      title: "T-Shirt",
      price: "200",
      category: "cloth",
      description: "bhbhjs......",
      image: Demoimage,
    },
    {
      id: 12,
      title: "T-Shirt",
      price: "200",
      category: "cloth",
      description: "bhbhjs......",
      image: Demoimage,
    },
  ]);

  return (
    <Container>
      <Div1>
        <Navbar />
      </Div1>
      {products &&
        products.length > 0 &&
        products.map((item, index) => (
          <Div2>
            {" "}
            {/* <Card /> */}
            <P></P>
            <P></P>
            <P></P>
            <P></P>
            <P></P>
            <P></P>
          </Div2>
        ))}
    </Container>
  );
}

export default Shop;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

const Div1 = styled.div``;

const Div2 = styled.div`
  display: flex;
  flex-direction: r;
  flex-wrap: wrap;
  padding: 5px;
  background-color: black;
`;


const P = styled.span`
 background-color: green;
 width: 10px;
 height: 10px;
`;

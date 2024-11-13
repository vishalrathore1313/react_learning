import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";

function Card({index}) {
  const { products } = useContext(UserContext);

  return (
    <Container>
      <Div1>
        <Img src="./demoimage.jpg" alt="Product Image" />
      </Div1>
      <Div2>
        <Title>{products[index].title}</Title>
        <Dis> {products[index].description.substring(0, 10) + "......."}</Dis>
        <Price>₹{products[index].price}</Price>
      </Div2>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 275px;
  height: 440px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 7px gray;
  &:hover {
    box-shadow: 0px 6px 15px gray;
  }
  padding: 5px;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 320px;
  /* background-color: black; */
`;

const Img = styled.img`
  width: 230px;
  height: 280px;
`;

const Div2 = styled.div`
  width: 240px;
  height: 120px;
  margin-left: 7px;
  padding-top: 0px;
  gap: 0px;
  /* background-color: blue; */
`;

const Title = styled.p`
  font-size: large;
  font-weight: bold;
  /* background-color: blue; */
  margin: 8px;
`;
const Dis = styled.p`
  font-size: 18px;
  /* background-color: red; */
  margin: 8px;
`;

const Price = styled.p`
  font-weight: bold;
  /* background-color: yellow; */
  margin: 8px;
`;

import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";

function Card({item}) {
  const {cartItem,setCartItem} = useContext(UserContext);
  console.log("cartItem array in Card=>"+cartItem);
  return (
    <Container>
      <Div1>
        <Img src="./demoimage.jpg" alt="Product Image" />
      </Div1>
      <Div2>
        <Title>{item.title}</Title>
        <Dis> {item.description.substring(0, 10) + "......."}</Dis>
        <Price>₹{item.price}</Price>
      </Div2>
       <Button
         onClick={()=>(setCartItem([...cartItem,item]))}
       >Add To Cart</Button>
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
  height: 100px;
  margin-left: 7px;
  padding: 0px;
  /* background-color: blue; */
`;

const Title = styled.p`
  font-size: large;
  font-weight: bold;
  /* background-color: blue; */
  margin: 6px;
`;
const Dis = styled.p`
  font-size: 18px;
  /* background-color: red; */
  margin: 6px;
`;

const Price = styled.p`
  font-weight: bold;
  /* background-color: yellow; */
  margin: 6px;
`;

const Button= styled.button`
font-size: 80%;
font-weight: bold;
color: white;
margin: 0;
padding: 12px;
border: none;
border-radius: 8px;
background-color: #1d4ed8;
cursor: pointer;
&:hover {
  background-color: blue;
}
`;
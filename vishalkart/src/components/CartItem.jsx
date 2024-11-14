import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartItem({ item, index }) {
  const { quantity, setQuantity,cartItem, setCartItem} = useContext(UserContext);

   console.log("quantity in cartitem=>"+quantity+" "+typeof quantity)
   
  const incrementQuantity = () => {
    setQuantity((prevq) => ({ ...prevq, [index]: (prevq[index] || 1) + 1 }));
  };

  const decrementQuantity = () => {
    setQuantity((prevq) => ({
      ...prevq,
      [index]: prevq[index] > 1 ? prevq[index] - 1 : 1,
    }));
  };

  const deleteCartItem = () => {
    setCartItem((prevq) => prevq.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Div1>
        <Img src="./demoimage.jpg" alt="Product Image" />
      </Div1>
      <Div2>
        <Title>{item.title}</Title>
        <Dis>{item.description}</Dis>
        <Price>₹{item.price * (quantity[index] || 1)}</Price>
        <Div3>
          {" "}
          <BiSolidLeftArrowSquare size="30px" onClick={decrementQuantity} />
          <Quantity>Quantity: {quantity[index] || 1}</Quantity>
          <BiSolidRightArrowSquare size="30px" onClick={incrementQuantity} />
          <Div4><RiDeleteBin6Line size="35px" color="black" onClick={deleteCartItem}/>
          </Div4>
        </Div3>
      </Div2>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 99%;
  height: 300px;
  box-shadow: 0px 3px 7px gray;
  padding: 5px;
`;

const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: orange; */
  width: 30%;
`;

const Img = styled.img`
  width: 220px;
  height: 260px;
  border-radius: 5px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

const Title = styled.p`
  font-size: large;
  font-weight: bold;
  margin: 6px;
`;
const Dis = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 6px;
`;

const Price = styled.p`
  font-size: larger;
  font-weight: bold;
  margin: 6px;
`;

const Quantity = styled.p`
  font-size: larger;
  font-weight: bold;
  margin: 6px;
`;

const Div3 = styled.div`
  display: flex;
`;

const Div4 = styled.div`
 margin-left: 500px;
 cursor: pointer;
`;

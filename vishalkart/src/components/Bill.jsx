import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

function Bill() {
  const { grandTotal, cartItem } = useContext(UserContext);

  const discount = (grandTotal * 9) / 100;
  const tax = ((grandTotal - discount) * 12) / 100;
  const delivery_charge = 100;
  const payment = grandTotal - discount + tax + delivery_charge;
  return (
    <Container>
      <Bill_Box>
        <Header>FINAL BILL</Header>
        <BODY>
          <Table>
            <Tbody>
              <Row>
                <Data>Price({cartItem.length}Item):</Data>
                <Data>₹{grandTotal.toFixed(2)}</Data>
              </Row>
              <Row>
                <Data>Discount:</Data>
                <Data>-₹{discount.toFixed(2)}</Data>
              </Row>
              <Row>
                <Data>Tax:</Data>
                <Data>₹{tax.toFixed(2)}</Data>
              </Row>
              <Row>
                <Data>Delivery Charges:</Data>
                <Data>₹{delivery_charge.toFixed(2)}</Data>
              </Row>
              <Row>
                <Data>Total :</Data>
                <Data>₹{payment.toFixed(2)}/-</Data>
              </Row>
            </Tbody>
            <hr />
          </Table>
          <BuyNowButton>Pay Now</BuyNowButton>
        </BODY>
      <Link to="/cart">
        <BackButton>Back</BackButton>
      </Link>
      </Bill_Box>
    </Container>
  );
}

export default Bill;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #9e9c99;
`;

const Bill_Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 440px;
  box-shadow: 0px 3px 7px gray;
  background-color: #f7e0bc;
  border-radius: 10px;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  background-color: brown;
  font-weight: bold;
  font-size: larger;
  justify-content: center;
`;
const BODY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  gap: 10px;
  padding-top: 55px;
`;

const Table = styled.table``;
const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Row = styled.tr`
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;

const Data = styled.td``;

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

const BackButton = styled.button`
  width: 100px;
  font-size: 80%;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1d4ed8;
  cursor: pointer;
  &:hover {
    background-color: blue;
  }
  margin-left: 900px;
  margin-top: 200px;
`;

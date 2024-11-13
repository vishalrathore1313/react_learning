import React, { useContext, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Card from "./Card";
import Filter from "./Filter";
import UserContext from "../context/UserContext";

function Shop() {
  const { products, priceRange, setPriceRang, category, setCategory } =
    useContext(UserContext);

  const filterProducts = products.filter((product) => {
    const matchCategory = category ? product.category === category : true;

    const matchPrice = priceRange
      ? (priceRange === "0-50" && product.price >= 0 && product.price <= 50) ||
        (priceRange === "50-100" &&
          product.price >= 50 &&
          product.price <= 100) ||
        (priceRange === "100-200" &&
          product.price >= 100 &&
          product.price <= 200) ||
        (priceRange == "200+" && product.price >= 200)
      : true;


    return matchCategory && matchPrice;
  });
  return (
    <Container>
      <Div1>
        <Navbar />
      </Div1>
      <Div3>
        <Filter />
      </Div3>
      <Div2>
        {filterProducts &&
          filterProducts.length > 0 &&
          filterProducts.map((item, index) => (
            <div key={index}>
              <Card item={item} />
            </div>
          ))}
      </Div2>
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
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  /* background-color: black; */
`;

const Div3 = styled.div``;

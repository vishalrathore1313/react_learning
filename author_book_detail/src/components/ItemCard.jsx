import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import styled from "styled-components";

function ItemCard({ setShow }) {
  const { data, setData } = useContext(UserContext);
  const [count, setCount] = useState(0);

  const handleDeleteQuestion = (index) => {
    console.log("In delete=>" + count);
    setData((prev) => prev.filter((_, i) => i !== index));
    setCount(count-1);
  };
  const handleEditQuestion = () => {};

  console.log(count);
  return (
    <>
      <Container>
        <Card>
          {data && data.length > 0 && count > -1 ? (
            <Table>
              <TableBody>
                <TableRow>
                  <TableData>
                    {" "}
                    Name: {data[count].name} {count}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData>
                    Image:{" "}
                    <Image src={data[count].image} alt="image not shows" />
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData> Text: {data[count].text}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>
                    <Button
                      onClick={(e) => {
                        count > 0 && setCount(count - 1);
                      }}
                    >
                      Previous
                    </Button>
                    <Button onClick={() => handleDeleteQuestion(count)}>
                      Delete
                    </Button>
                    <Button
                      onClick={() => {
                        handleEditQuestion(count);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        setCount(count + 1);
                      }}
                      disabled={data.length - 1 === count}
                    >
                      Next
                    </Button>
                  </TableData>
                </TableRow>
              </TableBody>
            </Table>
          ) : (
            ""
          )}
          <button onClick={() => setShow(true)}>See form</button>
        </Card>
      </Container>
    </>
  );
}

export default ItemCard;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #facf93;
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  padding: 20px;
  background-color: #969ea8;
`;

const Table = styled.table`
  font-size: 20px;
  background-color: white;
  padding: 20px;
  margin: 5px;
  border-radius: 12px;
  gap: 5px;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableData = styled.td``;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border: 5px solid #969ea8;
  border-radius: 12px;
`;

const Button = styled.button`
  width: 22%;
  font-size: 16px;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1d4ed8;
  cursor: pointer;
  &:hover {
    background-color: #0b1be6;
  }
  margin: 5px;
`;

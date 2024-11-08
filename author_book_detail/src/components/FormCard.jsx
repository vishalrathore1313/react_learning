import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Form, Formik, Field, ErrorMessage } from "formik";
import UserContext from "../context/UserContext";

function FormCard({ setShow }) {
  const { data, setData } = useContext(UserContext);
  const fileRef = useRef(null);
  const textRef = useRef(null);
  return (
    <Container>
      <Card>
        <Formik
          initialValues={{
            name: "",
            image: null,
            text: "",
          }}
          onSubmit={(values, { resetForm }) => {
            values.image=URL.createObjectURL(values.image);

            setData([...data, values]);
            if (fileRef.current && textRef.current) {
              fileRef.current.value = "";
              textRef.current.value = "";
            }
            console.log(values);
            console.log(values.image);
            console.log(data);
            resetForm();
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <FieldContainer>
                <Label>Name:</Label>
                <StyledField
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                />
                <ErrorMessage name="name" component="div" />
              </FieldContainer>

              <FieldContainer>
                <Label>Image:</Label>
                <ImageField
                  id="image"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(event) =>
                    setFieldValue("image", event.currentTarget.files[0])
                  }
                  ref={fileRef}
                />
                <ErrorMessage name="image" component="div" />
              </FieldContainer>

              <FieldContainer>
                <Label>Discription:</Label>
                <TextField
                  id="text"
                  name="text"
                  type="text"
                  onChange={(event) =>
                    setFieldValue("text", event.target.value)
                  }
                  ref={textRef}
                />
                <ErrorMessage name="text" component="div" />
              </FieldContainer>

              <FieldContainer>
                <Button type="submit">Submit</Button>
              </FieldContainer>
            </Form>
          )}
        </Formik>
           <button onClick={() => setShow(false)} disabled={data.length<=0}>See Items</button>
      </Card>
    </Container>
  );
}

export default FormCard;

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

const FieldContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 20px;
`;

const StyledField = styled(Field)`
  width: 100%;
  height: 25px;
  border-radius: 6px;
  font-size: 18px;
`;

const ImageField = styled.input`
  width: 100%;
  border-radius: 6px;
`;

const TextField = styled.textarea`
  width: 100%;
  border-radius: 6px;
  font-size: 18px;
`;

const Button = styled.button`
  width: 20%;
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
`;

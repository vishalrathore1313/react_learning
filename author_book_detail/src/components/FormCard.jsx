import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Form, Formik, Field, ErrorMessage } from "formik";
import UserContext from "../context/UserContext";

function FormCard({ setShow }) {
  const { data, setData, editingIndex, setEditingIndex } =
    useContext(UserContext);
  const fileRef = useRef(null);
  const textRef = useRef(null);

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.length < 2) {
      error = "Name must be at least 2 characters";
    } else if (value.length > 14) {
      error = "Name must be 14 characters or less";
    }
    return error;
  };

  const validateEmail = (value) => {
    let error;
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    if (!value) {
      error = "Email is required";
    } else if (!emailRegex.test(value)) {
      error = "Invalid email format";
    }
    return error;
  };

  return (
    <Container>
      <Card>
        <Formik
          initialValues={{
            name: editingIndex !== null ? data[editingIndex].name : "",
            email: editingIndex !== null ? data[editingIndex].email : "",
            image: editingIndex !== null ? data[editingIndex].image : "",
            text: editingIndex !== null ? data[editingIndex].text : "",
          }}
          enableReinitialize={true}
          onSubmit={(values, { resetForm }) => {
            values.image = URL.createObjectURL(values.image);

            if (editingIndex !== null) {
              let updatedData = data;
              updatedData[editingIndex] = values;
              setData(updatedData);
              setEditingIndex(null);
              setShow(false);
            } else {
              setData([...data, values]);
              setShow(false);
            }

            console.log("values=>" + values);
            console.log("data array=>" + data);
            resetForm();
            setEditingIndex(null);
            if (fileRef.current && textRef.current) {
              fileRef.current.value = "";
              textRef.current.value = "";
            }
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <FieldContainer>
                <Label>Name:</Label>
                <StyledField
                  id="name"
                  placeholder="Enter Your Name"
                  validate={validateName}
                />
                <StyledErrorMessage name="name" component="div" />
              </FieldContainer>

              <FieldContainer>
                <Label>Email:</Label>
                <StyledField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  validate={validateEmail}
                />
                <StyledErrorMessage name="email" component="div" />
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
                <StyledErrorMessage name="image" component="div" />
              </FieldContainer>

              <FieldContainer>
                <Label>Discription:</Label>
                <TextField
                  id="text"
                  name="text"
                  type="text"
                  placeholder="Write Discription here"
                  onChange={(event) =>
                    setFieldValue("text", event.target.value)
                  }
                  ref={textRef}
                />
                <StyledErrorMessage name="text" component="div" />
              </FieldContainer>

              <FieldContainer>
                <Button type="submit">Submit</Button>
              </FieldContainer>
            </Form>
          )}
        </Formik>
        <button onClick={() => setShow(false)} disabled={data.length <= 0}>
          See Items
        </button>
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
  flex-direction: column;
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

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;

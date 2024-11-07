import React from "react";
import styled from "styled-components";
import { Form, Formik, Field, ErrorMessage } from "formik";

function FormCard() {
  return (
    <Container>
      <Card>
      <Formik>
         
          {() => (
            <Form>
               <FieldContainer>
                <Label htmlFor="name">Author Name:</Label>
                <StyledField id="name" name="name" placeholder="Enter Your Name" />
                <ErrorMessage name="name" component={ErrorMessageText} />
              </FieldContainer>

               <FieldContainer>
                <Label htmlFor="name">Image:</Label>
                <StyledField id="image" name="image" placeholder="Enter Your Name" />
                <ErrorMessage name="name" component={ErrorMessageText} />
              </FieldContainer>

               <FieldContainer>
                <Label htmlFor="name"> Discription:</Label>
                <StyledField id="name" name="name" placeholder="Enter Your Name" />
                <ErrorMessage name="name" component={ErrorMessageText} />
              </FieldContainer>

              <SubmitButton
                type="submit"
              >
                Submit
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
}

export default FormCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5e6ce;
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  background-color: #d1d5db;
  padding: 24px;
`;

const FieldContainer = styled.div`
 display: block; 
margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 4px;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #ffffff;
  margin-bottom: 4px;
`;

const ErrorMessageText = styled.div`
  color: red;
  font-size: 12px;
`;

const SubmitButton = styled.button`
  width: 2  0%;
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  background-color: #1d4ed8;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #1e3a8a;
  }
`;

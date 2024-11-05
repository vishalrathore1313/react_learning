import {
  Field,
  FieldArray,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from "formik";

import React, { useEffect, useState } from "react";
import { FieldSection } from "../styled-public";
import styled from "styled-components";
import { Console } from "console";

const FieldLabel = styled.label`
  margin-top: 2%;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.8px;
  white-space: nowrap;
  overflow: hidden;
  color: rgba(51, 48, 60, 0.8);
  text-overflow: ellipsis;
`;

const FormInputTextareaQuestion = styled.textarea`
  border: 1px solid rgba(201, 199, 206, 1);
  border-radius: 4px;
  height: 2rem;
  overflow: hidden;
`;

const FormInput = styled(Field)`
  padding: 8px;
  border: 1px solid rgba(201, 199, 206, 1);
  border-radius: 4px;
`;

const FormInputTextarea = styled.textarea`
  padding: 8px;
  border: 1px solid rgba(201, 199, 206, 1);
  border-radius: 4px;
  height: 7rem;
  overflow: hidden;
`;

function AboutUsss({ setFieldValue, values }) {

  const [editQuestion, setEditQuestion] = useState<boolean>(false);
  const [clickedIndex, setClickedIndex] = useState<number>(0);
  const [valueArray, setValueArray] = useState<any>(values.companyAbout);
  const [changedQuestion, setChangedQuestion] = useState<any>([]);

  const addNewRow = () => {
    console.log("inside addRow");
    console.log("valueArray", valueArray);

    setValueArray([...valueArray, { question: "", answer: "" }]);
  };

    return (
      <>
      
        <FieldArray name="friends">
          {({ insert, remove, push }) => (
            <>
              {valueArray &&
                valueArray.map((item, index) => {
                  // console.log("item, ", item);
                  return (
                    <FieldSection>
                      <div
                        key={index}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "7fr 1fr",
                        }}
                      >
                        {!editQuestion ? (
                          <FieldLabel>{item.question}</FieldLabel>
                        ) : (
                          <FormInputTextareaQuestion
                            name="question"
                            defaultValue={item.question}
                            onChange={(e) => {
                           
                              setFieldValue(
                                `companyAbout.${index}.question`,
                                e.target.value
                              );
                            }}
                          />
                        )}
  
                        <div style={{ flexDirection: "row-reverse" }}>
                          <button
                            style={{ marginLeft: "3%", marginRight: "5%" }}
                            onClick={() => {
                              if (valueArray.length > 1) {
                                valueArray.splice(index, 1);
                              }
                            }}
                          >
                            <b>D</b>
                          </button>
                          <button
                            style={{ marginLeft: "3%" }}
                            onClick={(e) => {
                              if (!editQuestion) {
                                setEditQuestion(true);
                                setClickedIndex(index);
                                console.log("index clicked: ", clickedIndex);
                              } else {
                                setEditQuestion(false);
                              }
                            }}
                          >
                            <b>E</b>
                          </button>
                        </div>
                      </div>
  
                      <FormInputTextarea
                        name="answer"
                        defaultValue={valueArray[index].answer}
                        onChange={(e) => {
                          setFieldValue(
                            `companyAbout.${index}.answer`,
                            e.target.value
                          );
                        }}
                      />
                    </FieldSection>
                  );
                })}
            </>
          )}
        </FieldArray>
        <p style={{ marginTop: "2%", color: "#1585b5", marginBottom: "10%" }}>
          <b
            style={{ cursor: "pointer" }}
            onClick={() => {
              addNewRow();
            }}
          >
            Add New Question{" "}
          </b>
        </p>
      </>
    );
  
  
  }
  
  export default AboutUsss
  
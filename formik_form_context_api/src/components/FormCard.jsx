import React, {useContext } from "react";
import UserContext from "../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formvalidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "too short name")
    .max(12, "too long name")
    .required("Required"),
  surname: Yup.string()
    .min(2, "too short surname")
    .max(12, "too long surname")
    .required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
});

function FormCard({setShow}) {
  const { setData,data,editingIndex,setEditingIndex } = useContext(UserContext);
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-200">
      <div className=" w-full max-w-md rounded-2xl bg-gray-300 p-6 mb-8">
        <Formik
          initialValues={{
            name: editingIndex !== null ? data[editingIndex].name : "",
            surname: editingIndex !== null ? data[editingIndex].surname : "",
            email: editingIndex !== null ? data[editingIndex].email : "",
          }}
          validationSchema={formvalidation}
          enableReinitialize={true}
          onSubmit={(value, { resetForm }) => {
            if (editingIndex !== null) {
              let updatedData = data;
              updatedData[editingIndex] = value;
              setData(updatedData);
              setEditingIndex(null);
              setShow(false);
            } else {
              setData([...data, value]);
              setShow(false);
            }
            resetForm();
          }}
        >
          {({values}) => (
            <Form>
              <div>
                <div className="flex">
                  <label htmlFor="">Name:</label>
                  <Field
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    className="shadow rounded-lg overflow-hidden mb-4 bg-white"
                  />
                </div>
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div>
                <div className="flex">
                  <label htmlFor="">Surname:</label>
                  <Field
                    id="surname"
                    name="surname"
                    placeholder="Enter Your Surname"
                    className="shadow rounded-lg overflow-hidden mb-4 bg-white"
                  />
                </div>
                <ErrorMessage
                  name="surname"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div>
                <div className="flex">
                  <label htmlFor="">Email:</label>
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="shadow rounded-lg overflow-hidden mb-4 bg-white"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

                disabled={(values.name&&values.surname&&values.email)?false:true}
              >
                {editingIndex === null ? "Submit" : "Update"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormCard;

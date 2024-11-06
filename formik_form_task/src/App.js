import React, { useState } from "react";
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
  // image: Yup.mixed().required("Image Required"),
});

function App() {
  // const [previewImage, setPreviewImage] = useState(null);
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleDeleteQuestion = (index) => {
    setData((prev) => prev.filter((item, i) => i !== index));
  };

  const handleEditQuestion = (index) => {
    setEditingIndex(index);
    console.log(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-200">
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
            // setPreviewImage(URL.createObjectURL(value.image));

            if (editingIndex !== null) {
              let updatedData = data;
              updatedData[editingIndex] = value;
              setData(updatedData);
              setEditingIndex(null);
            } else {
              setData([...data, value]);
            }
            resetForm();
          }}
        >
          {(
            {
              /*setFieldValue,*/
            }
          ) => (
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

              {/* <div>
                <div className="flex">
                  <label htmlFor="">Image:</label>
                  <input
                    id="image"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(event) =>
                      setFieldValue("image", event.currentTarget.files[0])
                    }
                    className="shadow rounded-lg overflow-hidden mb-4 bg-white"
                  />
                </div>

                <ErrorMessage
                  name="image"
                  component="div"
                  style={{ color: "red" }}
                />
              </div> */}

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {editingIndex === null ? "Submit" : "Update"}
              </button>
            </Form>
          )}
        </Formik>

        {/* {previewImage && (
          <div>
            <img src={previewImage} alt="" className="w-48 h-48" />
          </div>
        )} */}
      </div>

      <div className="relative overflow-x-auto rounded-2xl">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Surname
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <tbody key={index}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </td>

                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.surname}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.email}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleEditQuestion(index);
                      }}
                      className="outline-none bg-green-600 text-white px-3 py-0.5 hover:bg-green-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteQuestion(index)}
                      className="outline-none bg-red-600 text-white px-3 py-0.5 hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function TableCard({ setShow }) {
  const { setData,data,editingIndex,setEditingIndex } = useContext(UserContext);

  const handleDeleteQuestion = (index) => {
    setData((prev) => prev.filter((item, i) => i !== index));
  };

  const handleEditQuestion = (index) => {
    setEditingIndex(index);
    setShow(true);
  };

  return (
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
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setShow(true)}
        >
          Back
        </button>
      </table>
    </div>
  );
}

export default TableCard;

import React, { useState } from "react";

function About1() {

    const [data,setData]=useState({question: "",answer: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => ({ ...prev, [name]: value }));
      };
      

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-yellow-200">
        <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-orange-500">
          <h1 className="text-center">Questions</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              name="question"
              value={data.question}
              className="outline-none w-full py-1 px-3"
              placeholder="Question"
              onChange={handleChange}
            />

            <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 hover:bg-sky-900">
              edit
            </button>
            <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 hover:bg-sky-900">
              Delete
            </button>
          </div>
          <div className="flex text-sm  gap-x-2">
            <input
              type="text"
              name="answer"
              value={data.answer}
              className="outline-none w-full py-1 px-3"
              placeholder="Answer"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About1;

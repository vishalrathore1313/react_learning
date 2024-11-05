import React, { useState } from "react";

function AboutUs() {
  const [currentque, setCurrentQue] = useState({ question: "", answer: "" });
  const [queArray, setQueArray] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentQue((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddQuestion = () => {
    if (currentque.question && currentque.answer) {
      setQueArray([
        ...queArray,
        { question: currentque.question, answer: currentque.answer },
      ]);
      setCurrentQue({ question: "", answer: "" });
    }
  };

  const handleDeleteQuestion = (indexx) => {
    setQueArray((prev) => prev.filter((item, index) => index !== indexx));
  };

  const handleEditQuestion = (index) => {
    setCurrentQue(queArray[index]);
    setIsEditing(index)
  };

  const handleUpdateQuestion = () => {
    if (currentque.question && currentque.answer) {
      setQueArray( (prev)=>
        prev.map((item, index) => (index === isEditing ? currentque : item))
      );
      
      setCurrentQue({ question: "", answer: "" });
      setIsEditing(null);
    }     
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
              value={currentque.question}
              className="outline-none w-full py-1 px-3"
              placeholder="Question"
              onChange={handleChange}
            />
          </div>
          <div className="flex text-sm  gap-x-2">
            <input
              type="text"
              name="answer"
              value={currentque.answer}
              className="outline-none w-full py-1 px-3"
              placeholder="Answer"
              onChange={handleChange}
            />
          </div>

          <button
            onClick={
              isEditing === null ? handleAddQuestion : handleUpdateQuestion
            }
            className="outline-none bg-blue-600 text-white px-3 py-1 mt-2 w-full hover:bg-sky-900"
          >
            {isEditing === null ? "Add Question" : "Update Question"}
          </button>

          {/* question in array */}
          <div className="mt-6">
            {queArray &&
              queArray.length > 0 &&
              queArray.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center justify-between shadow rounded-lg overflow-hidden">
                    <div className="w-full px-3 py-1 bg-white">
                      <p>
                        <strong>Q:</strong> {item.question}
                      </p>
                      <p>
                        <strong>A:</strong> {item.answer}
                      </p>
                    </div>
                    <button
                      onClick={() => handleEditQuestion(index)}
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
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

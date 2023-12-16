import React from "react";
import { addQuestion, getExamCategory } from "../../../../../core/api_client";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
export default function AddQuestionForm(props) {
    const [questions, setQuestions] = useState({});
    const { id } = useParams();
    const [examCategory, setExamCategory] = useState({});
    //useEfffect
    useEffect(() => { 
        getExamCategory(id)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setExamCategory(data);
            })
            .catch((err) => {
                console.log("Error in fetching exam categories:", err.message);
                alert(err.message);
            });
    }, []);

    console.log(id)
  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        console.log(questions)
      const response = await addQuestion({...questions, _id: id});
      console.log(response);
      alert("Questions were Added Successfully");
      props.callReload();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <>
      <div className="header">
        <h2 style={{ color: "#4caf50", margin: "10px 0px 0px 50px" }}>
          Add Question in Exam Category - {examCategory.courseName}
        </h2>
      </div>
      <div
        className="add"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          float: "left",
          marginTop: "20px",
          marginBottom: "10px",
          backgroundColor: "#f5f5f5", // Light gray background
          borderRadius: "10px", // Rounded corners
          padding: "20px", // Padding for content
          width: "100%", // Div width
        }}
      >
        <div
          className="container"
          style={{
            border: "2px solid #ddd", // Darker gray border
            padding: "20px", // Padding for form container
            borderRadius: "10px", // Rounded corners
            margin: "0px 30px 0px 30px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Add Question
              </label>
              <input
                type="text"
                className="form-control"
                id="question"
                placeholder="Add question"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    "question": e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Option 1
              </label>
              <input
                type="text"
                className="form-control"
                id="option1"
                placeholder="Add Option"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    "option1": e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Option 2
              </label>
              <input
                type="text"
                className="form-control"
                id="option2"
                placeholder="Add Option"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    "option2": e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Option 3
              </label>
              <input
                type="text"
                className="form-control"
                id="option3"
                placeholder="Add Option"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    "option3": e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Option 4
              </label>
              <input
                type="text"
                className="form-control"
                id="option4"
                placeholder="Add Option"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    "option4": e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Add Correct Option Number
              </label>
              <input
                type="text"
                className="form-control"
                id="answer"
                placeholder="Add A nswer"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    "answer": e.target.value,
                  })
                }
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
                          style={{ backgroundColor: "#4caf50", marginTop: "20px" }}
                          onClick={console.log(questions)}
            >
              Submit
            </button>
          </form>
        </div>

        <div
          className="container"
          style={{
            border: "2px solid #ddd", // Darker gray border
            padding: "20px", // Padding for form container
            borderRadius: "10px", // Rounded corners
            margin: "0px 30px 0px 30px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Add Question with Images
              </label>
              <input
                type="text"
                className="form-control"
                id="courseName"
                placeholder="Add question"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    courseName: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Add Question 1
              </label>
              <input
                type="file"
                alt="add image"
                className="form-control"
                id="courseName"
                placeholder="Add question"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    courseName: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Add Question 2
              </label>
              <input
                type="file"
                className="form-control"
                id="courseName"
                placeholder="Add question"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    courseName: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Add Question 3
              </label>
              <input
                type="file"
                className="form-control"
                id="courseName"
                placeholder="Add question"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    courseName: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Add Question 4
              </label>
              <input
                type="file"
                className="form-control"
                id="courseName"
                placeholder="Add question"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    courseName: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group" style={{}}>
              <label
                htmlFor="courseName"
                style={{
                  color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                  fontSize: "20px",
                }}
              >
                Add Correct Option Number
              </label>
              <input
                type="text"
                className="form-control"
                id="courseName"
                placeholder="Add question"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    courseName: e.target.value,
                  })
                }
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#4caf50", marginTop: "20px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

    </>
  );
}

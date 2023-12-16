import React from "react";
import { addExamCategory } from "../../../../../core/api_client";
import { useState } from "react";
export default function AddQuestionForm(props) {
  const [questions, setQuestions] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addExamCategory(questions);
      console.log(response);
      alert("Exam Category Added Successfully");
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
          Add Question in Exam Category - Chapter 9{" "}
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
                Add Question 2
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
                Add Question 3
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
                Add Question 4
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

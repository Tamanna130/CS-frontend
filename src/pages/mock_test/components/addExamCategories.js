import React from "react";
import { addExamCategory } from "../../../core/api_client";
import { useState } from "react";
export default function AddExamCategories(props) {
  const [examCategory, setExamCategory] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addExamCategory(examCategory);
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
      <div
        className="add"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          float: "left",
        //   marginLeft: "300px",
          marginTop: "20px",
          marginBottom: "10px",
          backgroundColor: "#f5f5f5", // Light gray background
          borderRadius: "10px", // Rounded corners
          padding: "20px", // Padding for content
          width: "50%", // Div width
        }}
      >
        <h2 style={{ color: "#4caf50" }}>Add Exam Categories </h2>
        <div
          className="container"
          style={{
            border: "2px solid #ddd", // Darker gray border
            padding: "20px", // Padding for form container
            borderRadius: "10px", // Rounded corners
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{}}>
              <label htmlFor="courseName" style={{
                              color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                              fontSize: "20px"
                }}>Course Name</label>
              <input
                type="text"
                className="form-control"
                id="courseName"
                placeholder="Enter Course Name"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setExamCategory({
                    ...examCategory,
                    courseName: e.target.value,
                  })
                }
              />
            </div>
            <div
              className="form-group"
              style={{
                marginTop: "10px",
              }}
            >
              <label htmlFor="topicName" style={{
                              color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                              fontSize: "20px"
                }}>Topic Name</label>
              <input
                type="text"
                className="form-control"
                id="topicName"
                placeholder="Enter Topic Name"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setExamCategory({
                    ...examCategory,
                    topicName: e.target.value,
                  })
                }
              />
            </div>
            <div
              className="form-group"
              style={{
                marginTop: "10px",
              }}
            >
                          <label htmlFor="examTime" style={{
                              color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                              fontSize: "20px"
                }}>Exam Time</label>
              <input
                type="text"
                className="form-control"
                id="examTime"
                placeholder="Enter Exam Time"
                style={{ width: "100%", border: "2px solid #ddd" }}
                onChange={(e) =>
                  setExamCategory({ ...examCategory, examTime: e.target.value })
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

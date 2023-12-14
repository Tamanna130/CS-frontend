import React from 'react'
import { addExamCategory } from '../../../core/api_client';
import { useState } from 'react';
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
    }
  return (
    <>
    <h2>Add Exam Categories</h2>
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="courseName">Course Name</label>
            <input type="text" className="form-control" id="courseName" placeholder="Enter Course Name" onChange={(e) => setExamCategory({...examCategory, courseName: e.target.value})}/>
            </div>
            <div className="form-group">
            <label htmlFor="topicName">Topic Name</label>
            <input type="text" className="form-control" id="topicName" placeholder="Enter Topic Name" onChange={(e) => setExamCategory({...examCategory, topicName: e.target.value})}/>
            </div>
            <div className="form-group">
            <label htmlFor="examTime">Exam Time</label>
            <input type="text" className="form-control" id="examTime" placeholder="Enter Exam Time" onChange={(e) => setExamCategory({...examCategory, examTime: e.target.value})}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </>
  )
}

import React, { useState } from 'react'
import AddExamCategories from '../components/addExamCategories.js'
import ViewExamCategories from '../components/viewExamCategories.js'
import AppHeader from '../../../templates/Base/Navbar.js'
import { updateExamCategory } from '../../../core/api_client.js';
function EditExamCategoryModal(props) {
    const [examCategory, setExamCategory] = useState(props.examCategory);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateExamCategory(examCategory);
            console.log(response);
            alert("Exam Category Added Successfully");
            props.callReload();
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {/* <AppHeader/> */}
            <div className="container" style={{
            border: "2px solid #ddd", // Darker gray border
            padding: "20px", // Padding for form container
            borderRadius: "10px", // Rounded corners
          }}>
                <h2 style={{ color: "#4caf50" }}>Edit Exam Categories</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="courseName" style={{
                              color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                              
                }}>Course Name</label>
                    <input type="text" value={examCategory.courseName} className="form-control" id="courseName" placeholder="Enter Course Name" style={{ width: "100%", border: "2px solid #ddd" }} onChange={(e) => setExamCategory({...examCategory, courseName: e.target.value})}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="topicName" tyle={{
                              color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                              fontSize: "20px"
                }}>Topic Name</label>
                    <input type="text" value={examCategory.topicName} className="form-control" id="topicName" placeholder="Enter Topic Name" style={{ width: "100%", border: "2px solid #ddd" }} onChange={(e) => setExamCategory({...examCategory, topicName: e.target.value})}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="examTime" tyle={{
                              color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                              fontSize: "20px"
                }}>Exam Time</label>
                    <input type="text" value={examCategory.examTime} className="form-control" id="examTime" placeholder="Enter Exam Time" style={{ width: "100%", border: "2px solid #ddd" }} onChange={(e) => setExamCategory({...examCategory, examTime: e.target.value})}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#4caf50", marginTop: "20px" }}>Submit</button>
                    
                </form>
                </div>

        </div>
    )
}

export default EditExamCategoryModal
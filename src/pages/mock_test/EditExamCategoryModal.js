import React, { useState } from 'react'
import AddExamCategories from './components/addExamCategories.js'
import ViewExamCategories from './components/viewExamCategories.js'
import AppHeader from '../../templates/Base/Navbar.js'
import { updateExamCategory } from '../../core/api_client.js';
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
        <div>
            {/* <AppHeader/> */}
            <div className="container">
                <h2>Edit Exam Categories</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="courseName">Course Name</label>
                    <input type="text" value={examCategory.courseName} className="form-control" id="courseName" placeholder="Enter Course Name" onChange={(e) => setExamCategory({...examCategory, courseName: e.target.value})}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="topicName">Topic Name</label>
                    <input type="text" value={examCategory.topicName} className="form-control" id="topicName" placeholder="Enter Topic Name" onChange={(e) => setExamCategory({...examCategory, topicName: e.target.value})}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="examTime">Exam Time</label>
                    <input type="text" value={examCategory.examTime} className="form-control" id="examTime" placeholder="Enter Exam Time" onChange={(e) => setExamCategory({...examCategory, examTime: e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>

        </div>
    )
}

export default EditExamCategoryModal
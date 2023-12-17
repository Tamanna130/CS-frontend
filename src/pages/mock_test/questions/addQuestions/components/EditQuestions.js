import React, { useState } from 'react'
import { updateQuestion } from '../../../../../core/api_client';
function EditQuestions(props) {
    const [question, setQuestion] = useState(props.question);
    console.log(props.question)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateQuestion(question);
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
                              
                }}>Question</label>
                    <input type="text" value={question.question} className="form-control" id="courseName" placeholder="Enter Course Name" style={{ width: "100%", border: "2px solid #ddd" }} onChange={(e) => setQuestion({...question, question: e.target.value})}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="topicName" tyle={{
                              color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                              fontSize: "20px"
                }}>Option 1</label>
                    <input type="text" value={question.option1} className="form-control" id="topicName" placeholder="Enter Topic Name" style={{ width: "100%", border: "2px solid #ddd" }} onChange={(e) => setQuestion({...question, option1: e.target.value})}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="examTime" tyle={{
                              color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                              fontSize: "20px"
                }}>Option 2</label>
                    <input type="text" value={question.option2} className="form-control" id="examTime" placeholder="Enter Exam Time" style={{ width: "100%", border: "2px solid #ddd" }} onChange={(e) => setQuestion({...question, option2: e.target.value})}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="examTime" tyle={{
                              color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                              fontSize: "20px"
                }}>Option 3</label>
                    <input type="text" value={question.option3} className="form-control" id="examTime" placeholder="Enter Exam Time" style={{ width: "100%", border: "2px solid #ddd" }} onChange={(e) => setQuestion({...question, option3: e.target.value})}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="examTime" tyle={{
                              color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                              fontSize: "20px"
                }}>Option 4</label>
                    <input type="text" value={question.option4} className="form-control" id="examTime" placeholder="Enter Exam Time" style={{ width: "100%", border: "2px solid #ddd" }} onChange={(e) => setQuestion({...question, option4: e.target.value})}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="examTime" tyle={{
                              color: "linear-gradient(to right, #007bff, #66b2ff)", // Subtle gradient for labels
                              fontSize: "20px"
                }}>Answer</label>
                    <input type="text" value={question.answer} className="form-control" id="examTime" placeholder="Enter Exam Time" style={{ width: "100%", border: "2px solid #ddd" }} onChange={(e) => setQuestion({...question, answer: e.target.value})}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#4caf50", marginTop: "20px" }}>Submit</button>
                    
                </form>
                </div>

        </div>
    )
}

export default EditQuestions
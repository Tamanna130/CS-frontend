import React from 'react'
import { useState,useEffect } from 'react';
import { getExamCategories} from '../../../core/api_client';
import AppHeader from '../../../templates/Base/Navbar';
import { useNavigate } from 'react-router-dom';

const colors = {
    lightRow: "#f8f0f8",
    darkRow: "#e8e8e8",
    header: "#e0f0ff",
    editButton: "#1e88e5",
    deleteButton: "#e53935 ",
};
  
function Questions(props) {
    const [examCategories, setExamCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        getExamCategories()
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    throw new Error(data.error);
                }
                console.log(data);
                setExamCategories(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("Error in fetching exam categories:", err.message);
                alert(err.message);
                navigate("/");
            });
    }, [props.reload]);
  return (
    <>
    <AppHeader/>
      <div className='d-flex justify-content-center pt-5'>
        <div className='main' style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            float: "left",
            //   marginLeft: "300px",
            backgroundColor: "#f5f5f5", // Light gray background
            borderRadius: "10px", // Rounded corners
            padding: "20px", // Padding for content
            width: "50%", // Div width
        }}>
            <h2 style={{ color: "green" }}>Select Exam Categories for Add and Edit Questions</h2>
            <div className="container" style={{
                border: "2px solid #ddd", // Darker gray border
                padding: "20px", // Padding for form container
                borderRadius: "10px", // Rounded corners
            }}>
                <table className="table" >
                    <thead>
                        <tr>
                            <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}> 
                                ID
                            </th>
                            <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}>
                                Course Name
                            </th>
                            <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}>
                                Topic Name
                            </th>
                            <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}>
                                Exam Time
                            </th>
                            <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? <tr><td>Loading...</td></tr> : examCategories.map((examCategory) => {
                            
                            return (
                                <tr key={examCategory._id} >
                                    <th scope="row">{examCategory._id}</th>
                                    <td>{examCategory.courseName}</td>
                                    <td>{examCategory.topicName}</td>
                                    <td>{examCategory.examTime}</td>
                                    <td><button className="btn btn-primary" style={{ backgroundColor: colors.editButton }} onClick={() => navigate(`/studentroom/mocktest/add-questions/${examCategory._id}`)}>Select</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </>
  )
}

export default Questions
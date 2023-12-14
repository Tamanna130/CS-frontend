import React from 'react'
import { useState,useEffect } from 'react';
import { getExamCategories } from '../../../core/api_client';
function ViewExamCategories(props) {
    const [examCategories, setExamCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getExamCategories()
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setExamCategories(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("Error in fetching exam categories:", err.message);
                alert(err.message);
            });
    }, [props.reload]);
  return (
    <div>
        <h2>View Exam Categories</h2>
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Course Name</th>
                    <th scope="col">Topic Name</th>
                    <th scope="col">Exam Time</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? <tr><td>Loading...</td></tr> : examCategories.map((examCategory) => {
                        return (
                            <tr key={examCategory._id}>
                                <td>{examCategory.courseName}</td>
                                <td>{examCategory.topicName}</td>
                                <td>{examCategory.examTime}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ViewExamCategories
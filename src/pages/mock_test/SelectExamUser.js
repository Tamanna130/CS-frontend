import React, { useEffect, useState } from 'react'
import { getExamCategories } from '../../core/api_client';

export default function SelectExamUser() {

    const [examCategories, setExamCategories] = useState([]);

    useEffect(() => {
        getExamCategories()
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setExamCategories(data);
                // setIsLoading(false);
            })
            .catch((err) => {
                console.log("Error in fetching exam categories:", err.message);
                alert(err.message);
            });
    }, []);

  return (
    <div className="container">
          <h2 className="text-center my-4">Student Room - Exam Categories</h2>
          
          {examCategories.map((examCategory) => (
        <div key={examCategory._id} className="card text-center my-4" style={{ width: "1200px" }}>
          <div className="card-header">
            {examCategory.courseName}
          </div>
          <div className="card-body">
            <h5 className="card-title">{examCategory.topicName}</h5>
            <p className="card-text">Exam Time: {examCategory.examTime} Minutes</p>
            <a href="#" className="btn btn-primary text-white">Start Exam</a>
          </div>
        </div>
      ))}
    </div>
  );
}
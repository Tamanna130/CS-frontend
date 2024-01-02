import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestions } from '../../../../../core/api_client';
import { deleteQuestion } from '../../../../../core/api_client';
// import EditExamCategoryModal from '../modals/EditExamCategoryModal';
import Modal from 'react-modal';
import EditQuestions from './EditQuestions';

const colors = {
    lightRow: "#f8f0f8",
    darkRow: "#e8e8e8",
    header: "#e0f0ff",
    editButton: "#1e88e5",
    deleteButton: "#e53935 ",
};
  
function ShowQuestions(props) {
    const [questions, setQuestions] = useState([]); 
    const [selectedQuestion, setSelectedQuestion] = useState({})
    const { id } = useParams();
    useEffect(() => {
        getQuestions(id)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setQuestions(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err)
                console.log("Error in fetching exam categories:", err.message);
                alert(err.message);
            });
    }, [props.reload])
    console.log(questions)
    const [isLoading, setIsLoading] = useState(true);
    // const [selectedExamCategory, setSelectedExamCategory] = useState({});//[courseName,topicName,examTime]
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
    const handleDelete = async (id) => {
        try {
            const response = await deleteQuestion(id);
            console.log(response);
            alert("Exam Category Deleted Successfully");
            props.callReload();
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }
    const handleEdit = async (question) => {
        try {
            setSelectedQuestion(question);
            handleOpenModal();
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }


    // useEffect(() => {
    //     getExamCategories()
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setExamCategories(data);
    //             setIsLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log("Error in fetching exam categories:", err.message);
    //             alert(err.message);
    //         });
    // }, [props.reload]);
  return (
      <div className='main' style={{
        display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          float: "left",
          backgroundColor: "#f5f5f5", // Light gray background
          borderRadius: "10px", // Rounded corners
          padding: "20px", // Padding for content
          width: "100%", // Div width
    }}>
        <Modal isOpen={showModal} onRequestClose={handleCloseModal}>
            <EditQuestions question={selectedQuestion} callReload={props.callReload}/>
        </Modal>
        <h2 style={{ color: "red" }}>View Questions</h2>
        <div className="container" style={{
            border: "2px solid #ddd", // Darker gray border
            padding: "20px", // Padding for form container
              borderRadius: "10px", // Rounded corners
            width: "100%"
          }}>
            <table className="table" >
                <thead>
                    <tr>
                    <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}> 
                Question
              </th>
              <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}>
                Option 1
              </th>
              <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}>
              Option 2
              </th>
              <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}>
              Option 3
              </th>
              <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}>
              Option 4
              </th>
              <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}>
              Answer
              </th>
              <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}>
                Edit
              </th>
              <th scope="col" style={{ backgroundColor: colors.header, color: "#333" }}>
                Delete
              </th>
                    </tr>
                </thead>
                <tbody>
                      {isLoading ? <tr><td>Loading...</td></tr> : questions.map((question) => {
                        
                        return (
                            <tr key={question._id} >
                                <td>{question.question}</td>
                                <td>{question.option1}</td>
                                <td>{question.option2}</td>
                                <td>{question.option3}</td>
                                <td>{question.option4}</td>
                                <td>{question.answer}</td>
                                <td><button className="btn btn-primary" style={{ backgroundColor: colors.editButton }} onClick={() => handleEdit(question)}>Edit</button></td>
                                <td><button className="btn btn-danger" style={{ backgroundColor: colors.deleteButton }} onClick={() => handleDelete(question._id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                      
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ShowQuestions
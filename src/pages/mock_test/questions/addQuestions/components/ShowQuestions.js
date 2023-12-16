import React from 'react'
import { useState,useEffect } from 'react';
import { getExamCategories,deleteExamCategory } from '../../../../../core/api_client';
// import EditExamCategoryModal from '../modals/EditExamCategoryModal';
import Modal from 'react-modal';

const colors = {
    lightRow: "#f8f0f8",
    darkRow: "#e8e8e8",
    header: "#e0f0ff",
    editButton: "#1e88e5",
    deleteButton: "#e53935 ",
};
  
function ShowQuestions(props) {
    const [examCategories, setExamCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedExamCategory, setSelectedExamCategory] = useState({});//[courseName,topicName,examTime]
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
    const handleDelete = async (id) => {
        try {
            const response = await deleteExamCategory(id);
            console.log(response);
            alert("Exam Category Deleted Successfully");
            props.callReload();
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }
    const handleEdit = async (examCategory) => {
        try {
            setSelectedExamCategory(examCategory);
            handleOpenModal();
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }


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
            {/* <EditExamCategoryModal examCategory={selectedExamCategory} callReload={props.callReload}/> */}
        </Modal>
        <h2 style={{ color: "red" }}>View Question</h2>
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
                      {isLoading ? <tr><td>Loading...</td></tr> : examCategories.map((examCategory) => {
                        
                        return (
                            <tr key={examCategory._id} >
                                {/* <th scope="row">{examCategory._id}</th>
                                <td>{examCategory.courseName}</td>
                                <td>{examCategory.topicName}</td>
                                <td>{examCategory.examTime}</td> */}
                                <td>{examCategory.examTime}</td>
                                <td>{examCategory.examTime}</td>
                                <td>{examCategory.examTime}</td>
                                <td>{examCategory.examTime}</td>
                                <td>{examCategory.examTime}</td>
                                <td>{examCategory.examTime}</td>
                                <td><button className="btn btn-primary" style={{ backgroundColor: colors.editButton }} onClick={() => handleEdit(examCategory)}>Edit</button></td>
                                <td><button className="btn btn-danger" style={{ backgroundColor: colors.deleteButton }} onClick={() => handleDelete(examCategory._id)}>Delete</button></td>
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
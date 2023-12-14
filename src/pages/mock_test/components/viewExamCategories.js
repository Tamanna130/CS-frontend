import React from 'react'
import { useState,useEffect } from 'react';
import { getExamCategories,deleteExamCategory } from '../../../core/api_client';
import EditExamCategoryModal from '../EditExamCategoryModal';
import Modal  from 'react-modal';
function ViewExamCategories(props) {
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
    <div>
        <Modal isOpen={showModal} onRequestClose={handleCloseModal}>
            <EditExamCategoryModal examCategory={selectedExamCategory} callReload={props.callReload}/>
        </Modal>
        <h2>View Exam Categories</h2>
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Topic Name</th>
                    <th scope="col">Exam Time</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? <tr><td>Loading...</td></tr> : examCategories.map((examCategory) => {
                        return (
                            <tr key={examCategory._id}>
                                <th scope="row">{examCategory._id}</th>
                                <td>{examCategory.courseName}</td>
                                <td>{examCategory.topicName}</td>
                                <td>{examCategory.examTime}</td>
                                <td><button className="btn btn-primary" onClick={() => handleEdit(examCategory)}>Edit</button></td>
                                <td><button className="btn btn-danger" onClick={() => handleDelete(examCategory._id)}>Delete</button></td>
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
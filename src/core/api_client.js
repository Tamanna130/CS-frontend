import {fetchWithAuth} from '../hooks/fetchHook';
const addExamCategory = async (examCategory) => {
    const fig={
        method: 'POST',
        body: JSON.stringify({
            ...examCategory
        }),
        headers: {
            'Content-type': 'application/json' ,
        },
    };
    
    return fetchWithAuth('http://103.87.215.12:3000/api/mocktest/examCategory/create', fig);
}

const getExamCategories = async () => {
    return fetchWithAuth('http://103.87.215.12:3000/api/mocktest/examCategory/all')
}

const updateExamCategory = async (examCategory) => {
    const fig={
        method: 'PUT',
        body: JSON.stringify({
            ...examCategory
        }),
        headers: {
            'Content-type': 'application/json' ,
        },
    };
    
    return fetchWithAuth('http://103.87.215.12:3000/api/mocktest/examCategory/update', fig);
}
const deleteExamCategory = async (id) => {
    const fig={
        method: 'DELETE',
        body: JSON.stringify({
            id: id
        }),
        headers: {
            'Content-type': 'application/json' ,
        },
    };
    
    return fetchWithAuth('http://103.87.215.12:3000/api/mocktest/examCategory/delete', fig);
}

const deleteQuestion = async (id) => {
    const fig={
        method: 'DELETE',
        body: JSON.stringify({
            id: id
        }),
        headers: {
            'Content-type': 'application/json' ,
        },
    };
    
    return fetchWithAuth('http://103.87.215.12:3000/api/mocktest/deleteQuestion', fig);
}


const getExamCategory = async (id) => {
    return fetchWithAuth(`http://103.87.215.12:3000/api/mocktest/examCategory/get/${id}`);
}

const addQuestion = async (question) => {
    const fig={
        method: 'POST',
        body: JSON.stringify({
            ...question
        }),
        headers: {
            'Content-type': 'application/json' ,
        },
    };
    
    return fetchWithAuth('http://103.87.215.12:3000/api/mocktest/addQuestion', fig);
}

const getQuestions = async (id) => {
    const fig={
        method: 'POST',
        body: JSON.stringify({
            _id: id
        }),
        headers: {
            'Content-type': 'application/json' ,
        },
    };
    
    return fetchWithAuth('http://103.87.215.12:3000/api/mocktest/questions/all', fig);
}

const updateQuestion = async (question) => {
    const fig={
        method: 'PUT',
        body: JSON.stringify({
            ...question
        }),
        headers: {
            'Content-type': 'application/json' ,
        },
    };
    
    return fetchWithAuth('http://103.87.215.12:3000/api/mocktest/question/update', fig);
}



export {addExamCategory, getExamCategories, getExamCategory, updateExamCategory,deleteQuestion,deleteExamCategory, addQuestion, getQuestions, updateQuestion};
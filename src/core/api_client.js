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
    console.log(fig);
    return fetchWithAuth('http://127.0.0.1:3000/api/mocktest/examCategory/create', fig);
}

const getExamCategories = async () => {
    return fetchWithAuth('http://127.0.0.1:3000/api/mocktest/examCategory/all')
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
    console.log(fig);
    return fetchWithAuth('http://127.0.0.1:3000/api/mocktest/examCategory/update', fig);
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
    console.log(fig);
    return fetchWithAuth('http://127.0.0.1:3000/api/mocktest/examCategory/delete', fig);
}


const getExamCategory = async (id) => {
    return fetchWithAuth(`http://127.0.0.1:3000/api/mocktest/examCategory/get/${id}`);
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
    console.log(fig);
    return fetchWithAuth('http://127.0.0.1:3000/api/mocktest/addQuestion', fig);
}

const getQuestions = async (id) => {
    const fig={
        method: 'GET',
        body: JSON.stringify({
            id: id
        }),
        headers: {
            'Content-type': 'application/json' ,
        },
    };
    return fetchWithAuth('http://127.0.0.1:3000/api/mocktest/question/all', fig);
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
    console.log(fig);
    return fetchWithAuth('http://127.0.0.1:3000/api/mocktest/question/update', fig);
}

export {addExamCategory, getExamCategories, getExamCategory, updateExamCategory,deleteExamCategory, addQuestion, getQuestions, updateQuestion};
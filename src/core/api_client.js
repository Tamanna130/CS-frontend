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


export {addExamCategory, getExamCategories, updateExamCategory}
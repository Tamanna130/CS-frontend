

const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem('token');
    const usertype = localStorage.getItem('userType')
    if (!token) {
        throw new Error('Missing authorization token');
    }

    const headers = options.headers || {};
    // const body = options.body || {};
    headers['Authorization'] = `Bearer ${token}`;
    headers['userType'] = usertype;
    console.log(usertype)
    // console.log(body)
    const newOptions = {
        ...options,
        headers,
    };

    const response = await fetch(url, newOptions );
    return response;
};


export { fetchWithAuth }
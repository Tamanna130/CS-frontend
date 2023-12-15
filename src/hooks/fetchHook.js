

const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('Missing authorization token');
    }

    const headers = options.headers || {};
    headers['Authorization'] = `Bearer ${token}`;

    const newOptions = {
        ...options,
        headers,
    };

    const response = await fetch(url, newOptions);
    return response;
};


export { fetchWithAuth }
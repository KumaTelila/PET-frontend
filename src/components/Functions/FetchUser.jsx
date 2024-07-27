import api from "../../services/api";

const fetchUser = async () => {
    const token = localStorage.getItem('token');
    const response = await api.get('/user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export default fetchUser;
import axios from 'axios';

export default axios.create({
    baseURL: "https://secret-lake-66312.herokuapp.com/",
    withCredentials: true,
});

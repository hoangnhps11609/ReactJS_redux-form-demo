import axios from "axios";

const userAxios = axios.create({
    baseURL : 'http://localhost:3001/users'
})

export default userAxios
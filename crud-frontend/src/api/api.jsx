import axios from "axios";
const BASE_API = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000/api/students";
export const getAllStudents = () =>{
    return axios.get(BASE_API);
}
export const getOneStudent = (studentId) =>{
    return axios.get(`${BASE_API}/${studentId}`);
}
export const addStudent = (student) =>{
    return axios.post(BASE_API, student);
}

export const updateStudent = (studentId, student) =>{
    return axios.put(`${BASE_API}/${studentId}`, student);
}

export const deleteStudent = (studentId) =>{
    return axios.delete(`${BASE_API}/${studentId}`);
}

import axios from "axios";
const token = localStorage.getItem("Authorization");
console.log(token);
export const axiosWithAuth = () => {
    return axios.create({
        baseURL: "http://ctfjmg01:3300/api",
        headers: {
            authorization: token
        }
    });
};
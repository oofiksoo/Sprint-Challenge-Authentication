import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Axios from "axios";

export const userSignup = (userData, history) => dispatch => {
    axiosWithAuth()
        .post("/auth/register", userData)
        .then(res => {
            dispatch({ type: types.REGISTER });
            history.push("/login");
        })
        .catch(err => console.log(err));
};

export const userLogin = (loginData, history) => dispatch => {
    axiosWithAuth()
        .post("/auth/login", loginData)
        .then(res => {
            dispatch({
                type: types.LOGIN,
                payload: res.data.token
            });
            localStorage.setItem("Authorization", res.data.token);
            console.log(res.data.token);
            history.push("/jokes");
        })
        .catch(err => console.log(err));
};

export const userLogout = () => dispatch => {
    localStorage.removeItem("Authorization");
    Axios.get("http://localhost:3300/api/auth/logout")
        .then(
            res =>
            dispatch({ type: types.LOGOUT }) &
            console.log("attempt to delete token") &
            localStorage.removeItem("Authorization")
        )
        .catch(err => console.log(err));
};

export const displayJokeList = () => dispatch => {
    dispatch({ type: types.GET_JOKES });
    axiosWithAuth()
        .get("/jokes")
        .then(
            res =>
            dispatch({
                type: types.GET_JOKES_SUCCESS,
                payload: res.data
            }) & console.log("Jokes", res.data)
        )
        .catch(err => {
            dispatch({ type: types.GET_JOKES_FAILED, payload: err.res });
        });
};
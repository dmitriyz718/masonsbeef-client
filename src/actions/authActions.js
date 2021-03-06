import axios from 'axios';
import { returnErrors } from './errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./constants";
require('dotenv').config()
// check token & load user
export const loadUser = () => (dispatch, getState) => {
    // user loading false to true
    dispatch({ type: USER_LOADING });
    axios.get(`${process.env.REACT_APP_API}/api/auth/user`, tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}

// register user
export const register = ({ username, email, password }) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, email, password });
    axios.post(`${process.env.REACT_APP_API}/api/auth/`, body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}
// set up config headers and token
export const tokenConfig = getState => {
    //get token from local storage
    const token = getState().auth.token;
    // headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    // if token add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
}
// log in user
export const login = ({ name, email, password }) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });
    axios.post(`${process.env.REACT_APP_API}/api/verify`, body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}
//log out
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

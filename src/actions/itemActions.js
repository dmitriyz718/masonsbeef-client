import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, UPDATE_ITEM, GET_ITEM } from './constants';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
// all
export const getProducts = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('http://localhost:5000/api/products')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
// single
export const getProduct = (id) => dispatch => {
    dispatch(setItemsLoading());
    axios.get(`http://localhost:5000/api/products/view/${id}`)
        .then(res => dispatch({
            type: GET_ITEM,
            payload: res.data
        }))
}
// add
export const addProduct = (item) => (dispatch, getState) => {
    dispatch(setItemsLoading());
    axios
        .post('http://localhost:5000/api/products', item, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
// delete
export const deleteProduct = (id) => (dispatch, getState) => {
    axios
        .delete(`http://localhost:5000/api/products/delete/${id}`, tokenConfig(getState)).then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
// update
export const updateProduct = (id, data) => (dispatch, getState) => {
    axios
        .put(`http://localhost:5000/api/products/update/${id}`, tokenConfig(getState)).then(res => dispatch({
            type: UPDATE_ITEM,
            payload: id
        }))
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
}

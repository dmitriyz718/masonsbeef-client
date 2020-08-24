import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './constants';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
export const getProducts = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('http://localhost:5000/api/products')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
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
export const deleteProduct = (id) => (dispatch, getState) => {
    axios
        .delete(`http://localhost:5000/api/products/delete/${id}`, tokenConfig(getState)).then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
}

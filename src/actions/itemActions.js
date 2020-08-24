import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './constants';
import axios from 'axios';

export const getProducts = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('http://localhost:5000/api/products')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
};
export const addProduct = (item) => dispatch => {
    dispatch(setItemsLoading());
    axios
        .post('http://localhost:5000/api/products', item)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
}
export const deleteProduct = (id) => dispatch => {
    axios
        .delete(`http://localhost:5000/api/products/delete/${id}`).then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
}

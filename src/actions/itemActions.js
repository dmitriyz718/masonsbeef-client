import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  UPDATE_ITEM,
  GET_ITEM,
  EMAIL_SENT,
  ADD_CART,
} from "./constants";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
require("dotenv").config();
// all

export const getProducts = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get(`${process.env.REACT_APP_API}/api/products`)
    .then((res) =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
// single
export const getProduct = (id) => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get(`${process.env.REACT_APP_API}/api/products/view/${id}`)
    .then((res) =>
      dispatch({
        type: GET_ITEM,
        payload: res.data,
      })
    );
};
// add
export const addProduct = (item) => (dispatch, getState) => {
  dispatch(setItemsLoading());
  axios
    .post(
      `${process.env.REACT_APP_API}/api/products`,
      item,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
// delete
export const deleteProduct = (id) => (dispatch, getState) => {
  axios
    .delete(
      `${process.env.REACT_APP_API}/api/products/delete/${id}`,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
// update
export const updateProduct = (id, data) => (dispatch, getState) => {
  dispatch(setItemsLoading());
  axios
    .put(
      `${process.env.REACT_APP_API}/api/products/update/${id}`,
      data,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: UPDATE_ITEM,
        payload: res.data,
      })
    );
};
export const sendEmail = (emailData) => (dispatch) => {
  dispatch(setItemsLoading());
  axios({
    method: "POST",
    url: `${process.env.REACT_APP_API}/api/products/send`,
    body: emailData,
  })
    .then((res) =>
      dispatch({
        type: EMAIL_SENT,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const addToCart = (item) => (dispatch) => {
  dispatch(setItemsLoading());
  dispatch({
    type: ADD_CART,
    payload: item,
  });
};
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};

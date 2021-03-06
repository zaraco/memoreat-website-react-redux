import {createAction} from 'redux-api-middleware';
import {API_ENDPOINTS, API_HEADER} from "../../config";

const API_URL = process.env.REACT_APP_API_URL;
const APP_ID = process.env.REACT_APP_APP_ID;

//auth
export const actionFetchLogin = (payload) => {
    return createAction({
        types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.auth.login,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})
    });
};

export const actionFetchRegister = (payload) => {
    return createAction({
        types: ['REGISTER_REQUEST', 'REGISTER_SUCCESS', 'REGISTER_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.auth.register,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})
    });

};

export const loginForm = (login) => (dispatch) => {
    return dispatch({
        type: 'LOGIN_FORM',
        login
    });
};

export const registerForm = (register) => (dispatch) => {
    return dispatch({
        type: 'REGISTER_FORM',
        register
    });
};

export const logout = () => (dispatch) => {
    return dispatch({
        type: 'LOGOUT',

    });
};



//sets
export const actionFetchSetsAll = (payload) => {
    return createAction({
        types: ['SETS_ALL_REQUEST', 'SETS_ALL_SUCCESS', 'SETS_ALL_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.sets.all,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})


    });
};

export const actionFetchSetsOne = (payload) => {
    return createAction({
        types: ['SETS_ONE_REQUEST', 'SETS_ONE_SUCCESS', 'SETS_ONE_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.sets.one,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})


    });
};

export const actionFetchMySets = (payload) => {
    return createAction({
        types: ['SETS_MY_REQUEST', 'SETS_MY_SUCCESS', 'SETS_MY_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.sets.my,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})


    });
};

export const createSetForm = (createForm) => (dispatch) => {
    return dispatch({
        type: 'SETS_CREATE_FORM',
        createForm
    });
};

export const editSetForm = (editForm) => (dispatch) => {
    return dispatch({
        type: 'SETS_EDIT_FORM',
        editForm
    });
};

export const actionFetchSetsCreate = (payload) => {
    return createAction({
        types: ['SETS_CREATE_REQUEST', 'SETS_CREATE_SUCCESS', 'SETS_CREATE_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.sets.create,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})


    });
};

export const actionFetchSetsEdit = (payload) => {
    return createAction({
        types: ['SETS_EDIT_REQUEST', 'SETS_EDIT_SUCCESS', 'SETS_EDIT_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.sets.edit,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})


    });
};


//cards
export const actionFetchCardsAll = (payload) => {
    return createAction({
        types: ['CARDS_ALL_REQUEST', 'CARDS_ALL_SUCCESS', 'CARDS_ALL_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.cards.all,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})


    });
};

export const actionFetchCardsOne = (payload) => {
    return createAction({
        types: ['CARDS_ONE_REQUEST', 'CARDS_ONE_SUCCESS', 'CARDS_ONE_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.cards.all,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})


    });
};



export const cardSide = (isFront) => (dispatch) => {
    return dispatch({
        type: 'CARDS_SIDE_CHANGE',
        isFront
    });
};

export const actionFetchCardsCreate = (payload) => {
    return createAction({
        types: ['CARDS_CREATE_REQUEST', 'CARDS_CREATE_SUCCESS', 'CARDS_CREATE_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.cards.create,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})


    });
};


export const actionFetchCardsEdit = (payload) => {
    return createAction({
        types: ['CARDS_EDIT_REQUEST', 'CARDS_EDIT_SUCCESS', 'CARDS_EDIT_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.cards.edit,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})


    });
};


export const createCardForm = (createForm) => (dispatch) => {
    return dispatch({
        type: 'CARDS_CREATE_FORM',
        createForm
    });
};


export const editCardForm = (editForm) => (dispatch) => {
    return dispatch({
        type: 'CARDS_EDIT_FORM',
        editForm
    });
};



//exam
export const actionFetchExamEnter = (payload) => {
    return createAction({
        types: ['EXAM_ENTER_REQUEST', 'EXAM_ENTER_SUCCESS', 'EXAM_ENTER_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.exam.enter,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})


    });
};

export const actionFetchExam = (payload) => {
    return createAction({
        types: ['EXAM_REQUEST', 'EXAM_SUCCESS', 'EXAM_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.exam.exam,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})


    });
};

//main

export const actionFetchIndex = (payload) => {
    return createAction({
        types: ['INDEX_REQUEST', 'INDEX_SUCCESS', 'INDEX_FAILURE'],
        endpoint: () => API_URL+API_ENDPOINTS.main.index,
        method: 'POST',
        headers: API_HEADER,
        body: JSON.stringify({...payload, app_id: APP_ID})
    });
};




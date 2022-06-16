import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOAD_SUCCESS,
    USER_LOAD_FAIL
} from './types';
import axios from 'axios'

export const load_user = () => async dispatch => {
    if(localStorage.getItem('access')){
        const config ={
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };
        try{
            const res = await axios.get('http://localhost:8000/auth/users/me/',config);
            dispatch({
                type: USER_LOAD_SUCCESS,
                payload: res.data
            });
        } catch(err){
            dispatch({
                type: USER_LOAD_FAIL
            })
        }
    }
    else {
        dispatch({
            type: USER_LOAD_FAIL
        })
    }
};

export const login = (email, password) => async dispatch => {
    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email,password});

    try{
        const res = await axios.post('http://localhost:8000/auth/jwt/create/',body,config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(load_user());
    } catch(err){
        dispatch({
            type: LOGIN_FAIL
        })
    }
};
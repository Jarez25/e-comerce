import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from './types'

import axios from "axios";

export const signup = (first_name, last_name, email, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json' // Fix the typo here (aplication -> application)
        }
    }
    const body = JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        re_password
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config)
        if (res.status === 201) {
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: SIGNUP_FAIL
            })
        }
    } catch (err) { // Correct the placement of the curly braces
        dispatch({
            type: SIGNUP_FAIL
        })
    }
}
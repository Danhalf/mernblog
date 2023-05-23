import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { login, register } from '../../../constants/links'

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null
}


const getUrl = (type = 'login') => `/auth/${type.link}`

export const registerUser = createAsyncThunk('auth/registerUser', async (username, password) => {
    console.log(getUrl('login'));
    try {
        console.log('reg')
        // const {data} = await axios.post(getUrl('register'), {
        const {data} = await axios.post(getUrl('/auth/register'), {
            username, password
        })
        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }
        return data
    } catch (error) {
        console.log(error)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true
            set.status = null
        },
        [registerUser.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.status = payload.message;
            state.user = payload.user
            state.token = payload.token
        },
        [registerUser.rejected]: (state, {payload}) => {
            state.status = payload?.message
            state.isLoading = false
        },
    }
})

export default authSlice.reducer
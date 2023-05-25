import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
    error: false
}


export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ username, password }, {}) => {
        try {
            const { data } = await axios.post('/auth/register', {
                username, password
            })

            if (data.token) {
                window.localStorage.setItem('token', data.token);
            }
            return data

        } catch ({ response }) {
            return response.data
        }
    })

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, password }, {}) => {
        try {
            const { data } = await axios.post('/auth/login', {
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
    extraReducers: (builder) => {
        //register user
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true
            state.status = null
        })
        builder.addCase(registerUser.fulfilled, (state, { payload }) => {
            state.isLoading = false
            if (payload.newUser) {
                state.user = payload.newUser
                state.token = payload.token
                state.error = false
            } else {
                state.user = null
                state.token = null
                state.error = true
            }
            state.status = payload.message;
        })
        builder.addCase(registerUser.rejected, (state, { payload }) => {
            state.status = payload
            state.isLoading = false
        })

    }
})

export default authSlice.reducer
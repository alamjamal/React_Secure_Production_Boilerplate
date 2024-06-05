import { axiosPrivate, makePrivateRequestGet } from '../../../utils/http'
import axios from '../../../utils/http'
import { errorHandler } from '../../../utils/errorHandler';

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    userDetails: null,
};


export const currentUser = createAsyncThunk(
    "user/currentUser",
    async ({ }, { rejectWithValue }) => {
        try {
            // const abortController = new AbortController();
            // const response = await makePrivateRequestGet('/users/private/getcurrent/', abortController);
            // return response;
            const response = await axiosPrivate.get('/users/private/getcurrent/')   
            return response.data
        } catch (error) {
            return rejectWithValue(errorHandler(error))
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        //get user information
        builder.addCase(currentUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(currentUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.userDetails = action.payload
        })
        builder.addCase(currentUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

    }

});

export default userSlice.reducer;

import  {axiosPublic}  from '../../../utils/http'
// import { instance as axios } from '../../../utils/http'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { ErrorInformation } from 'src/models/errorInformation';
import { errorHandler } from '../../../utils/errorHandler';
import { PURGE } from 'redux-persist';

// initial state

const initialState = {
    isLoading: false,
    error: null,
    token: null,
    passCode: null,
    loginDetail: null,
    isAuthenticated: false,
    loginDetailFirebase:null,

};

// ==============================|| SLICE - MENU ||============================== //
export const userLogin = createAsyncThunk(
    "auth/login",
    async (userInfo, { rejectWithValue }) => {
        try {
            const response = await axiosPublic.post('/users/public/login/', userInfo,{
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            })
            return response.data;

        } catch (error) {
            return rejectWithValue(errorHandler(error))
        }
    }
)

export const firebaseLogin = createAsyncThunk(
    "auth/firebaseLogin",
    async (userInfo, { rejectWithValue }) => {
        try {
            const response = await axiosPublic.post('/users/public/firebaseLogin', userInfo,{
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            })
            return response.data;

        } catch (error) {
            return rejectWithValue(errorHandler(error))
        }
    }
)



export const userLogout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosPublic.get('/users/public/logout/',{
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            })
           
            return response.data;

        } catch (error) {
            return rejectWithValue(errorHandler(error))
        }
    }
)


export const userRefresh = createAsyncThunk(
    "auth/refresh",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosPublic.get('/users/public/getaccesstoken/',{
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            })
            return response.data;

        } catch (error) {
            return rejectWithValue(errorHandler(error))
        }
    }
)




const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
          state.isAuthenticated = true;
        },
        logout: (state) => {
          state.isAuthenticated = false;
        },
      },
    extraReducers: (builder) => {
        //get auth information
        builder.addCase(userLogin.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false
            state.loginDetail = action.payload,
            state.token = action.payload.accessToken,
            state.passCode = action.payload.passCode,
            state.isAuthenticated =  true
            state.error=null
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        })
        builder.addCase(PURGE, () => {
            return initialState;
        })


        builder.addCase(userLogout.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(userLogout.fulfilled, (state, action) => {
            state.isLoading = false
            state.loginDetail = null,
            state.token = null,
            state.passCode =null,
            state.isAuthenticated =  false
        })
        builder.addCase(userLogout.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        })


        builder.addCase(userRefresh.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(userRefresh.fulfilled, (state, action) => {
            state.isLoading = false
            state.token = action.payload.accessToken
        })
        builder.addCase(userRefresh.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        })



        builder.addCase(firebaseLogin.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(firebaseLogin.fulfilled, (state, action) => {
            state.isLoading = false
            state.loginDetail = action.payload,
            state.token = action.payload.accessToken,
            state.passCode = action.payload.passCode,
            state.isAuthenticated =  true
            state.error=null
        })
        builder.addCase(firebaseLogin.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        })
       

    }

});

export const { login, logout } = authSlice.actions;
export let {isAuthenticated, token, passCode } = (state) => state.auth;
export default authSlice.reducer;


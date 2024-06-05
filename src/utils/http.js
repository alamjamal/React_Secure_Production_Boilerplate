import axios from "axios";
import { userLogout, userRefresh } from 'redux/reducers/auth/auth.slice';


const abortController = new AbortController();
let abortSource = axios.CancelToken.source();

import { dispatch, getState , persistor} from '../redux/store'

export const axiosPublic = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const axiosPrivate = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
  signal: abortController.signal,
  withCredentials: true

});

// const requestInterceptor = axiosPrivate.interceptors.request.use(
//   config => {
//     const currentUser1 = JSON.parse(localStorage.getItem('currentUser1'))
//     if (!config.headers['x-access-token']) {
//       config.headers['x-access-token'] = `${currentUser1.accessToken}`;
//     }
//     return config;
//   }, (error) => Promise.reject(error)
// );

// });

//const requestInterceptor = axiosPrivate.interceptors.request.use(
  //config => {
    //if (!config.headers['x-access-token']) {
    //  config.headers['x-access-token'] = `${getState().auth.token}`;
   // }
    // // Cancel the previous request (if any) before making a new request
    // if (abortSource) {
    //   abortSource.cancel('Request canceled due to new request');
    // }
    // // Create a new cancellation token for the current request
    // abortSource = axios.CancelToken.source();
    // config.cancelToken = abortSource.token;

   // return config;
//  }, (error) => Promise.reject(error)
//);

const responseInterceptor = axiosPrivate.interceptors.response.use(
  response => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 406 && !prevRequest?.sent) {
      try {
        prevRequest.sent = true;
        await axiosPublic.get('/users/public/getaccesstoken/', {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        })
        return axiosPrivate(prevRequest);

      } catch (error) {
        axiosPublic.get('/users/public/logout/', {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }).then((res) => {
          localStorage.clear();
          window.location.href = '/login';
        }).catch((err) => {
          localStorage.clear();
          window.location.href = '/login';
        })
      }

    }
    return Promise.reject(error);
  }
);


// export const ejectInterceptors = () => {
//   axios.interceptors.request.eject(requestInterceptor);
//   axios.interceptors.response.eject(responseInterceptor);
// };


// export const cancelRequest = () => {
//   ejectInterceptors();
//   abortController.abort();
// };




export const makePrivateRequestGet = async (url, abortController) => {
  try {
    const response = await axiosPrivate.get(url, {
      headers: { 'Content-Type': 'application/json' },
      signal: abortController.signal,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
      // Handle cancellation if needed
    } else {
      throw error;
    }
  } finally {
    abortController.abort(); // Clean up the AbortController
  }
};


export const makePrivateRequestPost = async (url, payload, abortController) => {
  try {
    const response = await axiosPrivate.get(url, payload, {
      headers: { 'Content-Type': 'application/json' },
      signal: abortController.signal,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
      // Handle cancellation if needed
    } else {
      throw error;
    }
  } finally {
    abortController.abort(); // Clean up the AbortController
  }
};


export const makePrivateRequestPut = async (url, payload, abortController) => {
  try {
    const response = await axiosPrivate.put(url, payload, {
      headers: { 'Content-Type': 'application/json' },
      signal: abortController.signal,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
      // Handle cancellation if needed
    } else {
      throw error;
    }
  } finally {
    abortController.abort(); // Clean up the AbortController
  }
};


export const makePrivateRequestPatch = async (url, payload, abortController) => {
  try {
    const response = await axiosPrivate.patch(url, payload, {
      headers: { 'Content-Type': 'application/json' },
      signal: abortController.signal,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
      // Handle cancellation if needed
    } else {
      throw error;
    }
  } finally {
    abortController.abort(); // Clean up the AbortController
  }
};


export const makePrivateRequestDelete = async (url, abortController) => {
  try {
    const response = await axiosPrivate.patch(url, {
      headers: { 'Content-Type': 'application/json' },
      signal: abortController.signal,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
      // Handle cancellation if needed
    } else {
      throw error;
    }
  } finally {
    abortController.abort(); // Clean up the AbortController
  }
};



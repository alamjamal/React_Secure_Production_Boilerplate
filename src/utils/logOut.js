import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogout } from 'redux/reducers/auth/auth.slice';
import { useNavigate } from 'react-router-dom';
export const Logout = (refreshToken) => {

  // const dispatch = useDispatch();
  // dispatch(userLogout({refreshToken: refreshToken}));
  // localStorage.clear();
  // const navigate = useNavigate();
  // navigate("/");
  // Perform any additional logout logic or redirection here
  console.log(refreshToken);
};
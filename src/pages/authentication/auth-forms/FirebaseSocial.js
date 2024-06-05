// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import Google from 'assets/images/icons/google.svg';
import Twitter from 'assets/images/icons/twitter.svg';
import Facebook from 'assets/images/icons/facebook.svg';
import Github from 'assets/images/icons/github.svg';
import {
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, signInWithGoogle, signInWithMicrosoft, signInWithGithub, signInWithTwitter } from '../../../utils/firebase';
import Typography from 'themes/overrides/Typography';
import { useEffect, useState } from 'react';
import {
  getRedirectResult
} from "firebase/auth";


import Swal from 'sweetalert2'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { userLogin, userLogout, userRefresh, firebaseLogin } from 'redux/reducers/auth/auth.slice';
import { useDispatch, useSelector } from 'react-redux';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const FirebaseSocial = () => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [email, setEmail] = useState('')


  const googleHandler = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result)
      // const credential = GoogleAuthProvider.credentialFromResult(result);

      const email = result.user.email || result.user.providerData[0].email
      const name = result.user.displayName || result.user.providerData[0].displayName
      const mobile = result.user.phoneNumber || result.user.providerData[0].phoneNumber

      setEmail(email)
      dispatch(firebaseLogin({
        accessToken: result.user.accessToken,
        email: email,
        name:name,
        mobile:mobile,
      })).unwrap()
        .then((res) => {
          localStorage.setItem('passCode', JSON.stringify(res.data[0].passCode))
          navigate('/dashboard/default');
          // setSelectedIconForDomain(res.data.path);
        })
        .catch((err) => {
          console.log(err, 'err00');
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message,
            // footer: '<a href="">Why do I have this issue?</a>'
          })
        });

    } catch (error) {
      console.error(error);
    }
  };

  const githubHandler = async () => {
    try {
      const result = await signInWithGithub();
      console.log(result)
      const email = result.user.email || result.user.providerData[0].email
      const name = result.user.displayName || result.user.providerData[0].displayName || result.user.reloadUserInfo.screenName
      const mobile = result.user.phoneNumber || result.user.providerData[0].phoneNumber
      setEmail(email)
      dispatch(firebaseLogin({
        accessToken: result.user.accessToken,
        email: email,
        name:name,
        mobile:mobile,
      })).unwrap()
        .then((res) => {
          localStorage.setItem('passCode', JSON.stringify(res.data[0].passCode))
          navigate('/dashboard/default');
          // setSelectedIconForDomain(res.data.path);
        })
        .catch((err) => {
          console.log(err, 'err00');
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message,
            // footer: '<a href="">Why do I have this issue?</a>'
          })
        });
    } catch (error) {
      console.error(error);
    }
  };

  const twitterHandler = async () => {
    try {
      const result = await signInWithTwitter();
      console.log(result);

    } catch (error) {
      console.error(error);
    }
  };


  const facebookHandler = async () => {
    // login || singup
  };

  return (

    <Stack
      direction="row"
      spacing={matchDownSM ? 1 : 2}
      justifyContent={matchDownSM ? 'space-around' : 'space-between'}
      sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
    >
      {email}
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!matchDownSM}
        startIcon={<img src={Google} alt="Google" />}
        onClick={googleHandler}
      >
        {!matchDownSM && 'Google'}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!matchDownSM}
        startIcon={<img src={Twitter} alt="Twitter" />}
        onClick={twitterHandler}
      >
        {!matchDownSM && 'Twitter'}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!matchDownSM}
        startIcon={<img src={Github} alt="Github" />}
        onClick={githubHandler}
      >
        {!matchDownSM && 'Github'}
      </Button>
    </Stack>

  );
};

export default FirebaseSocial;

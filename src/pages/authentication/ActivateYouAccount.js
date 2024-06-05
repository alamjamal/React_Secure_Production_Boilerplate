// import { Link,useParams} from 'react-router-dom';

// // material-ui
// import { Grid, Stack, Typography } from '@mui/material';

// // project import
// // import AuthLogin from './auth-forms/AuthLogin';
// import AuthWrapper from './AuthWrapper';

// // ================================|| LOGIN ||================================ //
// const {token}=useParams()
// console.log(token,"token");

// const ActivateYourAccount = () => (
  
//   <AuthWrapper>
//     <Grid container spacing={3}>
//       <Grid item xs={12}>
//         <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
//           <Typography variant="h3">Login</Typography>
//           <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
//             Don&apos;t have an account?
//           </Typography>
//         </Stack>
//       </Grid>
//       <Grid item xs={12}>
//         {/* <AuthLogin /> */}
//       </Grid>
//     </Grid>
//   </AuthWrapper>
// );

// export default ActivateYourAccount;


import React , {useEffect, useState} from 'react'
import { Link,useParams} from 'react-router-dom';
import { Grid, Stack, Typography } from '@mui/material';
// // import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';
import axios from 'axios';
// import { ConsoleView } from 'react-device-detect';

function ActivateYouAccount() {

  const {token}=useParams()
  console.log(token,"token");
  const regex = /^[0-9a-fA-F]{24}[:]{3}[0-9a-zA-Z]{72}$/

  if (token.match(regex)) {
    console.log("match")
  }
  else {
    console.log("not match")
  }
  const [id, token1] = token.split(":::")
  console.log(id,token1, "token123")


  const [message, sentMessage] = useState("")

  const verifyEmailUrl = () => {

    axios.post(`${process.env.REACT_APP_API_URL}/users/public/activate`, { token })
      .then((res) => {
        // setValidUrl(res.data)
        console.log(res.data.message, "res")
        sentMessage(res.data.message)
        // setValidUrl(true);
      })
      .catch((err) => {
        console.log(err.response.data.message, "err")
        sentMessage(err.response.data.message)
        // setValidUrl(false);
      })
  }



  useEffect(() => {

    if (token.match(regex)) {
      verifyEmailUrl()
      // setNotMatch(true)
    }

  }, [])



  return (
    <>
    {/* <div>ActivateYouAccount</div> */}
       <AuthWrapper>
     <Grid container spacing={3}>
       <Grid item xs={12}>
         <Stack direction="row" justifyContent="space-between" alignItems="baseline" >
           <Typography variant="h3">{message}</Typography>
           
         </Stack>
       </Grid>
     <Grid item xs={12}> 
     <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
             Click here to login
           </Typography> &nbsp;  &nbsp;  &nbsp;     
           <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
             Don&apos;t have an account?
           </Typography>
            {/* <AuthLogin /> */}
            
     </Grid>
    </Grid>
  </AuthWrapper>
    </>
    
  )
}

export default ActivateYouAccount

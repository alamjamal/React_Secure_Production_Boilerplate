import {
    Box,
    Card,
    Typography,
    Container,
    Divider,
    Button,
    FormControl,
    OutlinedInput,
    InputAdornment
} from '@mui/material';

import { styled } from '@mui/material/styles';
import AuthBackground from 'assets/images/auth/AuthBackground';

const MainContent = styled(Box)(
    ({ theme }) => `
      height: 100%;
      display: flex;
      flex: 1;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `
);

const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
  `
);

const ButtonSearch = styled(Button)(
    ({ theme }) => `
      margin-right: -${theme.spacing(1)};
  `
);

function Status404() {
    return (
        <>
            <MainContent>
                <Container maxWidth="md">
                    <AuthBackground />
                    <Box textAlign="center">
                        <img alt="404" height={180} src="assets/images/users/avatar-group.png" />
                        <Typography variant="h2" sx={{ my: 2 }}>
                            Unauthorized User.
                        </Typography>
                    </Box>
                </Container>
            </MainContent>
        </>
    );
}

export default Status404;

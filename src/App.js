import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";

export default function App() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>

                <SignIn/>
                <SignUp/>
                <ResetPassword/>

            </Box>
        </Container>
    );
}

import React from 'react';
// import ReactDOM from 'react-dom';
import MainNavbar from './Components/Common/MainNavbar'
import MainPage from './Components/Common/MainPage'
import {Box} from "@material-ui/core";

function App() {
    return (
        <Box>
            <MainNavbar></MainNavbar>
            <MainPage></MainPage>
        </Box>
    );
}

export default App;
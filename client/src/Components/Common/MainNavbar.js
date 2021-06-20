import React from 'react'
import {Box} from "@material-ui/core";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {Typography} from "@material-ui/core";
function MainNavbar(props){
        return (
            <Box height="5vw" display="flex" justifyContent="space-between"
                 alignItems="center" bgcolor="#5c6bc0" paddingX="60px">
                <Box> <Typography variant="h5" gutterBottom>LOGO</Typography> </Box>
                <Box display="flex" justifyContent="space-around" width="70px">
                    <AccountCircleOutlinedIcon/>
                    <Box> <Typography variant="body1" gutterBottom> Hi, {props.name}</Typography></Box>
                </Box>
            </Box>
        )
        
    }


export default MainNavbar;
import React from "react";
import MainNavbar from "../Common/MainNavbar";
import ChatContainer from "../Common/ChatContainer";
import {Box, makeStyles} from "@material-ui/core";
import NavigationMenu from "../Common/NavigationMenu";
import ChatsList from "../Common/ChatsList";

const useStyles = makeStyles(( )=>({
    container: {
        maxHeight:"100vh",
        height:"50vw"
    }
}))
function MainPage() {
    const classes = useStyles();
    return (
        <div className="main-page">
            <MainNavbar/>
            <Box className={classes.container} display="flex" /*height="50vw"*/ >
                <Box borderRight="1px solid #9fa8da" height="100%" width="25%">
                    <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
                        <ChatsList/>
                        <NavigationMenu/>
                    </Box>
                </Box>
                <ChatContainer></ChatContainer>
            </Box>

        </div>
    )
}

export default MainPage
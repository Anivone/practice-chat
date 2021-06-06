import React, {Component} from 'react'
import ChatContainer from './ChatContainer'
import NavigationBar from './NavigationBar'
import {Box} from "@material-ui/core";
function MainPage(){
    return(
        <Box height="50vw" display="flex" bgcolor="white">
        <NavigationBar/>
        <ChatContainer/>
        </Box>
    )
}
//#7986cb
export default MainPage
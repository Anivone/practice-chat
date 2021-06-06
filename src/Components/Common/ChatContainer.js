import React from "react";
import {Box} from "@material-ui/core";
import {Typography} from "@material-ui/core";

function ChatContainer() {
    return (

        <Box display="flex" justifyContent="center" alignItems="center" width="75%" height="100%">
            <Box><Typography variant="h5" style={{color:'#e0e0e0'}} gutterBottom> Select chat to start chatting </Typography> </Box>
        </Box>
    )
}

export default ChatContainer
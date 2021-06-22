import React from "react"
import {Box, Typography} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function ChatNavbar (props){
    let iconColor;
    return (
        <Box width="100%">
            <Box width="30%" display="flex" justifyContent="space-around">
                <AccountCircleIcon fontSize="large"
                                   style={{color: {iconColor}}}/>
                <Typography variant="body1">{props.name} name</Typography>
            </Box>
        </Box>
    )
}
export default ChatNavbar;
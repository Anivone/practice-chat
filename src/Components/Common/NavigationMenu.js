import React from "react";
import {Box} from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
function NavigationMenu(){
    return(
        <Box display="flex" width="100%" height="10%" justifyContent="space-around" borderTop="1px solid #9fa8da">
            <IconButton><AccountCircleIcon fontSize="large"/></IconButton>
            <IconButton><ChatBubbleOutlineOutlinedIcon fontSize="large"/></IconButton>
            <IconButton><PermContactCalendarIcon fontSize="large"/></IconButton>
            <IconButton><GroupAddIcon fontSize="large"/></IconButton>
            <IconButton><PersonAddIcon fontSize="large"/></IconButton>
        </Box>
    )
}
export default  NavigationMenu
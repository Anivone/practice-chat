import React from "react";
import {Box} from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";

function NavigationMenu(){
    const history = useHistory();

    const handleClick = (path) => {history.push(path)}
    return(
        <Box display="flex" width="100%" justifyContent="space-around" borderTop="1px solid #9fa8da"
             borderBottom="1px solid #9fa8da">
            <IconButton onClick={() => handleClick("/profile-settings")}><AccountCircleIcon fontSize="large"/></IconButton>
            <IconButton onClick={() => handleClick("/")}><ChatBubbleOutlineOutlinedIcon fontSize="large"/></IconButton>
            <IconButton onClick={() => handleClick("/contacts")}><PermContactCalendarIcon fontSize="large"/></IconButton>
            <IconButton onClick={() => handleClick("/groups")}><GroupAddIcon fontSize="large"/></IconButton>
            <IconButton onClick={() => handleClick("/add-contact")}><PersonAddIcon fontSize="large"/></IconButton>
        </Box>
    )
}
export default  NavigationMenu
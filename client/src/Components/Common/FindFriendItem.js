import React from "react";
import {
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import IconButton from "@material-ui/core/IconButton";
function FindFriendItem() {

    return (
        <ListItem style={{borderBottom:"1px solid #e0e0e0"}}>
            <ListItemIcon>
                <AccountCircleIcon fontSize="large"/>
            </ListItemIcon>
            <ListItemText primary="Contact 1"/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <AddCircleSharpIcon color="primary"/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default FindFriendItem
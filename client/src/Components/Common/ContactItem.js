import React from "react";
import {
    Box,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Edit} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

function ContactItem() {

    return (
        <ListItem style={{borderBottom:"1px solid #e0e0e0"}}>
            <ListItemIcon>
                <AccountCircleIcon fontSize="large"/>
            </ListItemIcon>
            <ListItemText primary="Contact 1"/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
        </ListItem>
    )
}

export default ContactItem
import React from "react";
import {
    Checkbox,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function CreateGroupItem() {

    return (
        <ListItem style={{borderBottom: "1px solid #e0e0e0"}}>
            <ListItemIcon>
                <AccountCircleIcon fontSize="large"/>
            </ListItemIcon>
            <ListItemText primary="Contact 1"/>
            <ListItemSecondaryAction>
                <Checkbox/>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default CreateGroupItem
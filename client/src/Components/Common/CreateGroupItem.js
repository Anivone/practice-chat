import React from "react";
import {
    Checkbox,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from "@material-ui/core/Typography";

function CreateGroupItem(props) {

    return (
        <ListItem style={{borderBottom: "1px solid #e0e0e0"}}>
            <ListItemIcon>
                <AccountCircleIcon fontSize="large"/>
            </ListItemIcon>
            <Typography></Typography>
            <ListItemSecondaryAction>
                <Checkbox/>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default CreateGroupItem
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
import {CheckBox, Edit} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

function CreateGroupItem() {
    // const [checked, setChecked] = React.useState([1]);
    //
    // const handleToggle = (value) => () => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];
    //
    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //     }
    //
    //     setChecked(newChecked);
    // };
    return (
        <ListItem style={{borderBottom:"1px solid #e0e0e0"}}>
            <ListItemIcon>
                <AccountCircleIcon fontSize="large"/>
            </ListItemIcon>
            <ListItemText primary="Contact 1"/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="check">
                    <CheckBox color="primary" checked="unchecked"/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default CreateGroupItem
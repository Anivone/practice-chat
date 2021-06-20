import React from "react";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function ChatItem() {

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <ListItem style={{borderBottom: "1px solid #e0e0e0"}} button
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}>
            <ListItemIcon>
                <AccountCircleIcon fontSize="large"/>
            </ListItemIcon>
            <ListItemText primary="Contact 1"/>
        </ListItem>
    )
}

export default ChatItem
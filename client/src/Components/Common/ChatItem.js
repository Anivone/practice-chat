import React from "react";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {ChatEntity} from "../../entities/ChatEntity";

function ChatItem({
                      _id,
                      ownerID,
                      name,
                      participants,
                      creationDate,
                      type,
                      setChat,
                  }) {

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = () => {
        const chat = new ChatEntity({
            _id,
            ownerID,
            name,
            participants,
            creationDate,
            type
        });
        console.log('chat: ', chat);

        setChat(chat);
    };

    return (
        <ListItem style={{borderBottom: "1px solid #e0e0e0"}} button
                  selected={selectedIndex === 0}
                  onClick={handleListItemClick}>
            <ListItemIcon>
                <AccountCircleIcon fontSize="large"/>
            </ListItemIcon>
            <ListItemText primary={name}/>
        </ListItem>
    )
}

export default ChatItem
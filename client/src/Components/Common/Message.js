import React from 'react'
import {Box, Typography} from "@material-ui/core";


function Message({message}) {

    const getDateTime = (dateString) => {
        const dateTime = new Date(dateString);
        const date = `${dateTime.getDay()}/${dateTime.getMonth()}/${dateTime.getFullYear()}`;
        const time = `${dateTime.getHours()}:${dateTime.getMinutes()}`;
        return date + ' ' + time;
    }

    return (
        <Box maxWidth="100%" display="flex" justifyContent="flex-end">
            <Box  color="#fafafa" maxWidth="40%" width="auto" bgcolor="#3949ab"
                  padding={2} borderRadius={35} marginRight={2}>
                <Typography variant="body1">{message.content}</Typography>
            </Box>
            <div>
                <span>{getDateTime(message.dateTime)}</span>
            </div>
        </Box>
    )
}

export default Message
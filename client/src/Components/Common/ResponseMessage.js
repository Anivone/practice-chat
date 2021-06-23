import React from 'react'
import {Box, Typography} from "@material-ui/core";


function ResponseMessage({message}) {

    const getDateTime = (dateString) => {
        const dateTime = new Date(dateString);
        const date = `${dateTime.getDay()}/${dateTime.getMonth()}/${dateTime.getFullYear()}`;
        const time = `${dateTime.getHours()}:${dateTime.getMinutes()}`;
        return date + ' ' + time;
    }

    return (
        <Box maxWidth="100%" display="flex" justifyContent="flex-start">
            <Box  color="#fafafa" maxWidth="40%"  bgcolor="#002984"
                  padding={2} borderRadius={35} marginLeft={2} display={'flex'}
            flexDirection={'column'}>
                <Typography variant="body1">{message.message}</Typography>
                <Typography variant={'caption'}>{getDateTime(message.date)}</Typography>
            </Box>
            <div>
                <span>{getDateTime(message.date)}</span>
            </div>
        </Box>
    )
}
export default ResponseMessage
import React from 'react'
import {Box, Typography} from "@material-ui/core";


function ResponseMessage({message}) {
    return (
        <Box maxWidth="100%" display="flex" justifyContent="flex-start">
            <Box  color="#fafafa" maxWidth="40%"  bgcolor="#002984"
                  padding={2} borderRadius={35} marginLeft={2}>
                <Typography variant="body1">{message}</Typography>
            </Box>
        </Box>
    )
}
export default ResponseMessage
import React from 'react'
import {Box, Typography} from "@material-ui/core";


function Message(props) {
    return (
        <Box maxWidth="100%" display="flex" justifyContent="flex-end">
            <Box  color="#fafafa" maxWidth="40%" width="auto" bgcolor="#3949ab"
                  padding={2} borderRadius={35} marginRight={2}>
                <Typography variant="body1">Lorem ipsum lolem shfpevl asdalsjd asjkd alhgsaknd aks</Typography>
            </Box>
        </Box>
    )
}

export default Message
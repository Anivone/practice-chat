import React from "react";
import {Box} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {Typography} from "@material-ui/core";

function SettingsItem() {
    return (
        <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
            <Box display="flex" justifyContent="space-between" borderBottom="1px solid #9fa8da" height="11%">
                <Box width="20%" paddingLeft="15px"><Typography variant="h5" gutterBottom
                                                                style={{marginTop: 20}}>Profile</Typography></Box>
                <IconButton>
                    <ExitToAppIcon/>
                </IconButton>
            </Box>

            <Box display="flex" width="100%" height="95%" flexDirection="column" justifyContent="space-around">
                <Box width="100%" display="flex" justifyContent="center">
                    <AccountCircleIcon style={{fontSize: 140}}/>
                </Box>
                <Box display="flex" justifyContent="center">
                    <IconButton> <AccountCircleIcon fontSize="large"
                                                    style={{color: "#e91e63"}}/></IconButton>
                    <IconButton> <AccountCircleIcon fontSize="large"
                                                    style={{color: "#ff6f00"}}/></IconButton>
                    <IconButton> <AccountCircleIcon fontSize="large"
                                                    style={{color: "black"}}/></IconButton>
                    <IconButton> <AccountCircleIcon fontSize="large"
                                                    style={{color: "green"}}/></IconButton>
                    <IconButton> <AccountCircleIcon fontSize="large"
                                                    style={{color: "#1565c0"}}/></IconButton>
                </Box>
                <Box display="flex" flexDirection="column" width="100%">
                    <Typography variant="body1" style={{paddingLeft: 10, marginBottom:10}}>Edit profile</Typography>
                    <form action="" method="post">
                        <Box height="250px" width="90%" display="flex" justifyContent="space-around"
                             flexDirection="column"
                             alignItems="center" paddingX="10px">
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth/>
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth/>
                            <TextField id="outlined-basic" label="Nickname" variant="outlined" fullWidth/>
                            <Button variant="contained" color="primary" style={{width: 150, marginTop:15}}>
                                Save
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default SettingsItem
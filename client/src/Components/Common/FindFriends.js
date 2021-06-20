import React from "react";
import {Box, FormControl, Input, InputAdornment, InputLabel, List, makeStyles, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import {Typography} from "@material-ui/core";
import FindFriendItem from "./FindFriendItem";

const useStyles = makeStyles((theme) => ({
    root:{
        width: '100%',
        margin:'0px',
        padding:'0px'
    }
}));

function FindFriends() {
    const classes = useStyles();
    return (
        <Box width="100%" display="flex" flexDirection="column" alignItems="center" height="90%">
            <Box width="100%" height="10%" display="flex" justifyContent="space-around" borderBottom="1px solid #9fa8da"
                 marginTop={1}>
                <Typography variant="h5" gutterBottom style={{marginTop: 15}}>
                    Find Friends
                </Typography>
                <TextField style={{marginTop: 20}}
                           placeholder="Search"
                           variant="standard"
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <SearchIcon/>
                                   </InputAdornment>
                               ),
                           }}
                />
            </Box>
            <List className={classes.root}>
                <FindFriendItem/>
            </List>
        </Box>
    )
}

export default FindFriends
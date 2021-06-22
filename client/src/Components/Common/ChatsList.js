import React from "react";
import {Box, InputAdornment, List, makeStyles, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {Typography} from "@material-ui/core";
import ChatItem from "./ChatItem";
import ContactItem from "./ContactItem";
import {testChats} from "../../dataTest";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0px',
        padding: '0px'
    }
}));

function ChatsItem() {
    const chats = testChats;
    const classes = useStyles();
    console.log(chats[0].name)
    return (
        <Box width="100%" display="flex" flexDirection="column" alignItems="center" height="90%">
            <Box width="100%" height="10%" display="flex" justifyContent="space-around" borderBottom="1px solid #9fa8da"
                 marginTop={1}>
                <Typography variant="h5" gutterBottom style={{marginTop: 15}}>
                    Messages
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
                {
                    chats.length > 0 ?
                        chats.map((cts, index) => {
                            let chat = (<ChatItem chatName={cts.name} key={index}/>)
                            return chat;
                        }) : null
                }


            </List>
        </Box>
    )
}

export default ChatsItem
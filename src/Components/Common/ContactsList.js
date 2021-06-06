import React from "react";
import {
    Box,
    Divider,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    List,
    makeStyles,
    TextField
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
// import 'fontsource-roboto'
import {Typography} from "@material-ui/core";
import ContactItem from "./ContactItem"


const useStyles = makeStyles((theme) => ({
    root:{
        width: '100%',
        margin:'0px',
        padding:'0px'
    }
}));

function ContactsList() {
    const classes = useStyles();
    return (
        <Box width="100%" display="flex" flexDirection="column" alignItems="center" height="90%">
            <Box width="100%" height="10%" display="flex" justifyContent="space-around" borderBottom="1px solid #9fa8da"
                 marginTop={1}>
                <Typography variant="h5" gutterBottom style={{marginTop:15}}>
                    Contacts
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
                <ContactItem/>
            </List>
        </Box>
    )
}

export default ContactsList
import React from "react";
import {
    Box,
    Button,
    InputAdornment,
    List,
    makeStyles,
    TextField
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {Typography} from "@material-ui/core";
import CreateGroupItem from "./CreateGroupItem";
import ContactItem from "./ContactItem";
import {testContacts} from "../../dataTest";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0px',
        padding: '0px'
    }
}));

function CreateGroup() {
    const contacts = testContacts;
    const classes = useStyles();
    return (
        <Box width="100%" display="flex" flexDirection="column" alignItems="center" height="90%">
            <Box width="100%" minHeight="35%" height="auto" display="flex" justifyContent="center"
                 borderBottom="1px solid #9fa8da">
                <Box width="90%" height="100%" display="flex" flexDirection="column" justifyContent="space-around"
                >
                    <Typography variant="h5" gutterBottom>
                        Create a Group
                    </Typography>
                    <TextField
                        size="small"
                        placeholder="Search"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />


                    <Button color="primary" variant="contained" style={{borderRadius: 30}}>Create group</Button>
                </Box>
            </Box>


            <List className={classes.root}>
                {
                    contacts.length > 0 ?
                        contacts.map((cts, index) => {
                            let contact = (<CreateGroupItem name={cts.contactName} surname={cts.contactSurname} key={index}/>)
                            return contact;
                        }): null
                }


            </List>
        </Box>
    )
}

export default CreateGroup
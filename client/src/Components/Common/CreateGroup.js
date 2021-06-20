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


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0px',
        padding: '0px'
    }
}));

function CreateGroup() {
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
                <CreateGroupItem/>

            </List>
        </Box>
    )
}

export default CreateGroup
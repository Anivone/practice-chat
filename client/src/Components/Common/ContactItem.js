import React from "react";
import {
    Backdrop,
    Box, Button,
    Divider, Fade,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText, Modal, TextField,
    Typography
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    editModalFade: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 170,
        height: 120
    },
    submit_btn: {
        borderRadius: 30,
        width: 100
    },
    deleteModalFade: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 300,
        height: 100
    },
    delete_btn: {
        borderRadius: 30
    }


}));

function ContactItem() {
    const classes = useStyles();
    const [openEditModal, setOpenEditModal] = React.useState(false);

    const handleOpen = () => {
        setOpenEditModal(true);
    };

    const handleClose = () => {
        setOpenEditModal(false);
    };

    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

    const handleOpenDelete = () => {
        setOpenDeleteModal(true);
    }
    const handleCloseDelete = () => {
        setOpenDeleteModal(false);
    }
    const out = () =>{
        console.log("yes");
    }

    return (
        <div>
        <ListItem style={{borderBottom: "1px solid #e0e0e0"}}>
            <ListItemIcon>
                <AccountCircleIcon fontSize="large"/>
            </ListItemIcon>
            <ListItemText primary="Contact 1"/>
            <ListItemSecondaryAction>
                <div>
                    <IconButton aria-label="edit" onClick={handleOpen}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton aria-label="delete" onClick={handleOpenDelete}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </ListItemSecondaryAction>
        </ListItem>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openEditModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openEditModal}>
                    <div className={classes.editModalFade}>
                        <form action="post">
                            <TextField noValidate autoComplete="off" label="Enter a new name">

                            </TextField>
                        </form>
                        <Button color="primary" variant="contained" className={classes.submit_btn}
                        onClick={() => {handleClose()}}>
                            Save
                        </Button>

                    </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openDeleteModal}
                onClose={handleCloseDelete}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={openDeleteModal}>
                    <div className={classes.deleteModalFade}>
                        <Typography variant="body2">Are you sure you want to delete this contact?</Typography>
                        <Box display="flex" justifyContent="space-around" width="90%">
                            <Button variant="contained" color="default" className={classes.delete_btn}
                                    onClick={handleCloseDelete}>Cancel</Button>
                            <Button variant="contained" color="secondary" className={classes.delete_btn}
                                    onClick={() =>{handleCloseDelete(); }}>Ok</Button>
                        </Box>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default ContactItem
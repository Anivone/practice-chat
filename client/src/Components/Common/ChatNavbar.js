import React from "react"
import {Backdrop, Box, Button, Fade, makeStyles, Modal, Typography} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme)=>({
    txt : {
        marginLeft:4
    },
    icon: {
        fontSize:"x-large"
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    h10:{
        height:"10%"
    }
}))
function ChatNavbar (props){
    const classes = useStyles()
    let iconColor = props.iconColor;
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

    const handleOpenDelete = () => {
        setOpenDeleteModal(true);
    }
    const handleCloseDelete = () => {
        setOpenDeleteModal(false);
    }
    return (
        <Box width="100%" minHeight="10%" bgcolor="#e8eaf6" height="100%" display="flex" paddingLeft={3}>
            <Box width="90%" display="flex">
            <Box height="80%"  display="flex" justifyContent="space-between" alignItems="center" alignSelf="center">
                <AccountCircleIcon fontSize="large"
                                   style={{color: {iconColor}}}/>
                <Typography className={classes.txt} variant="body1">{props.name}</Typography>
            </Box>
            </Box>
            <Box width="10%" height="80%" display="flex" alignItems="center" alignSelf="center">
                <IconButton><HighlightOffIcon fontSize="large" onClick={handleOpenDelete}/></IconButton>
            </Box>
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
                        <Typography variant="body2">Are you sure you want to clear this chat?</Typography>
                        <Box display="flex" justifyContent="space-around" width="90%">
                            <Button variant="contained" color="default" className={classes.delete_btn}
                                    onClick={handleCloseDelete}>Cancel</Button>
                            <Button variant="contained" color="secondary" className={classes.delete_btn}
                                    onClick={() =>{handleCloseDelete(); }}>Ok</Button>
                        </Box>
                    </div>
                </Fade>
            </Modal>
        </Box>
    )
}
export default ChatNavbar;
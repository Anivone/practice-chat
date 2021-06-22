import React, {useContext, useState} from "react";
import {Box, Button, Grid, TextField} from "@material-ui/core";
import ResponseMessage from "./ResponseMessage";
import {makeStyles} from "@material-ui/core/styles";
import {ContainerContext} from "../../context/ContainerContext";
import {MessageEntity} from "../../entities/MessageEntity";
import Message from "./Message";
import ChatNavbar from "./ChatNavbar";

const useStyles = makeStyles(() => ({
    input: {
        height: "50%",
    },
    textInput: {
        width: '92%',
    },
    submitBtn:{
        width:'8%'
    },
    btn:{
        height:'100%',
        width:'100%'
    }
}))

function ChatContainer() {
    const classes = useStyles();

    const {socketService} = useContext(ContainerContext);
    const [state, setState] = useState({
        messageList: [],
        newMessage: '',
    });

    const sendMessage = () => {
        if (state.newMessage === '') return;
        const message = new MessageEntity({
            userId: 'user',
            chatId: 'chat',
            message: state.newMessage,
            date: new Date(),
        });
        socketService.sendMessage(message);

        state.messageList.push(message);

        setState({
            ...state,
            newMessage: ''
        });
    }

    const handleChange = (evt) => {
        setState({
            ...state,
            newMessage: evt.target.value,
        })
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const submitForm = (evt) => {
        evt.preventDefault();
        sendMessage();
    }

    return (

        <Box height="100%" width="75%" display="flex" flexDirection="column" justifyContent="flex-end">
            {/*<Box>
                <Typography variant="h5" style={{color: '#e0e0e0'}} gutterBottom> Select chat to start
                    chatting</Typography>
            </Box>*/}
            <Box height="10%">
            <ChatNavbar/>
            </Box>
            <Box id="scrollable-div'" overflow="scrollable" height="90%" width="100%" display="flex"
                 flexDirection="column"
                 justifyContent="flex-end"
            >

                {
                    state.messageList.map(msg => msg.userId === 'user1'
                        ? <Message message={msg}/>
                        : <ResponseMessage message={msg}/>
                    )
                }
            </Box>
            <Box width="100%" marginTop={4}>
                <form onSubmit={submitForm}>
                    <Grid container direction={'row'} justify={'center'} alignItems={'center'}>
                        <Box display={'flex'} width="100%">
                        <Grid item className={classes.textInput}>
                            <TextField
                                id="message"
                                className={classes.input}
                                value={state.newMessage}
                                placeholder="Type your message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={1}
                                onChange={handleChange}
                                onKeyDown={onKeyDown}
                            />
                        </Grid>
                        <Grid item className={classes.submitBtn}>
                            <Button
                                variant={'contained'}
                                type={'submit'} color={'primary'} className={classes.btn}>Send !</Button>
                        </Grid>
                        </Box>
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}

export default ChatContainer
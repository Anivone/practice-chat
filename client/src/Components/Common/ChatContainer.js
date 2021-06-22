import React, {useEffect, useState} from "react";
import {Box, TextField} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import Message from "./Message";
import ResponseMessage from "./ResponseMessage";
import {makeStyles} from "@material-ui/core/styles";
import axios from 'axios'
import to from 'await-to-js';

const useStyles = makeStyles(() => ({

        input: {
            height: "50%"
        }
    })
)

async function ChatContainer(props) {
    const classes = useStyles();
    // const auth = useContext(AuthContext);

    const [messages, setMessages] = useState([]);
    const [lastChatId, setLastChatId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, response] = await to(axios.get('/api/chats/' + props.chat._id + '/messages'))
    const data = response.data;



        return (

            <Box height="100%" width="75%" display="flex" flexDirection="column" justifyContent="flex-end">

                <Box>
                    <Typography variant="h5" style={{color: '#e0e0e0'}} gutterBottom> Select chat to start
                        chatting</Typography>
                </Box>

                {/*<Box id="scrollable-div'" overflow="scrollable" height="75%" width="100%" display="flex"*/}
                {/*     flexDirection="column"*/}
                {/*     justifyContent="flex-end"*/}
                {/*>*/}
                {/*   */}
                {/*    <Message/>*/}
                {/*    <ResponseMessage/>*/}
                {/*</Box>*/}
                {/*<Box width="100%" marginTop={4}>*/}
                {/*    <form>*/}
                {/*        <TextField id="message" className={classes.input}*/}
                {/*                   placeholder="Type your message" variant="outlined" autoComplete="false" fullWidth*/}
                {/*                   multiline rows={1} />*/}
                {/*    </form>*/}
                {/*</Box>*/}
            </Box>
        )
//     } else return (<div>N</div>)
}

export default ChatContainer
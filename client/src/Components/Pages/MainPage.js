import React, {useEffect, useState} from "react";
import MainNavbar from "../Common/MainNavbar";
import ChatContainer from "../Common/ChatContainer";
import {Box} from "@material-ui/core";
import NavigationMenu from "../Common/NavigationMenu";
import ChatsList from "../Common/ChatsList";
import axios from 'axios';
import to from 'await-to-js';

function MainPage() {

    const [state, setState] = useState({
        chats: [],
    });

    const [chat, setChat] = useState(null);

    useEffect(() => {
        (async () => {
            const [err, response] = await to(axios.get('http://localhost:5000/chats/full/user'));
            if (err) throw err;

            const data = response.data;
            console.log('chats: ', data.chats);
            setState({
                ...state,
                chats: data.chats
            })
        })();
    }, []);



    return (
        <div className="main-page">
            <MainNavbar/>
            <Box display="flex" height="50vw">
                <Box borderRight="1px solid #9fa8da" height="100%" width="25%">
                    <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
                        <ChatsList chats={state.chats} setChat={setChat}/>
                        <NavigationMenu/>
                    </Box>
                </Box>
                {chat
                    ? <ChatContainer
                        chat={state.chats.find(chat => chat._id === chat._id)}
                        setChat={setChat}/>
                    : null
                }
            </Box>

        </div>
    )
}

export default MainPage
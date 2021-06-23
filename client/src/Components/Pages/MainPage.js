import React, {useEffect, useState} from "react";
import MainNavbar from "../Common/MainNavbar";
import ChatContainer from "../Common/ChatContainer";
import {Box, Switch} from "@material-ui/core";
import ChatsList from "../Common/ChatsList";
import axios from 'axios';
import to from 'await-to-js';
import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter, Route, useRouteMatch} from "react-router-dom";
import ProfileSettingsPage from "./ProfileSettingsPage";
import ContactsPage from "./ContactsPage";
import GroupsPage from "./GroupsPage";
import AddContactPage from "./AddContactPage";
import SettingsItem from "../Common/SettingsItem";
import ContactsList from "../Common/ContactsList";
import CreateGroup from "../Common/CreateGroup";
import FindFriends from "../Common/FindFriends";
import NavigationMenu from "../Common/NavigationMenu";

const useStyles = makeStyles(() => ({

    fullHeight: {
        height: '90vh'
    }
}))

function MainPage() {

    const {path} = useRouteMatch();

    console.log('path: ', path);

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

    const classes = useStyles()
    return (
        <div className={classes.fullHeight}>
            <MainNavbar/>
            <Box display="flex" height={'100%'}>
                <Box borderRight="1px solid #9fa8da" height="100%" width="25%">
                    <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
                        <Route path={path} exact>
                            <ChatsList chats={state.chats} setChat={setChat}/>}
                        </Route>
                        <Route path={path + "profile-settings"} component={SettingsItem}/>
                        <Route path={path + "contacts"} component={ContactsList}/>
                        <Route path={path + "groups"} component={CreateGroup}/>
                        <Route path={path + "add-contact"} component={FindFriends}/>

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
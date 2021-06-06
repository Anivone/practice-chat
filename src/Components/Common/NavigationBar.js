import React from "react";
import {Box} from "@material-ui/core";
import NavigationMenu from './NavigationMenu'
import SettingsItem from "./SettingsItem";
import ChatList from "./ChatsList";
import ContactsList from "./ContactsList";
import CreateGroup from "./CreateGroup";
import FindFriends from "./FindFriends";
function NavigationBar() {

    return (
        <Box borderRight="1px solid #9fa8da" height="100%" width="25%">
            <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
                <SettingsItem/>
                {/*<ChatList/>*/}
                {/*<ContactsList/>*/}
                {/*<CreateGroup/>*/}
                {/*<FindFriends/>*/}
                <NavigationMenu/>
            </Box>
        </Box>
    )
}

export default NavigationBar
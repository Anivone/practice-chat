import React from "react";
import MainNavbar from "../Common/MainNavbar";
import ChatContainer from "../Common/ChatContainer";
import {Box} from "@material-ui/core";
import NavigationMenu from "../Common/NavigationMenu";
import SettingsItem from "../Common/SettingsItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({

    fullHeight: {
        height:'92vh'
    }
}))

function ProfileSettingsPage() {
    const classes = useStyles();
    return (
        <div className={classes.fullHeight}>
            <MainNavbar/>
            <Box display="flex" height="100%">
                <Box borderRight="1px solid #9fa8da" height="100%" width="25%">
                    <Box display="flex" height="100%" flexDirection="column" justifyContent="space-between">
                        <SettingsItem/>
                        <NavigationMenu/>
                    </Box>
                </Box>
                <ChatContainer></ChatContainer>
            </Box>

        </div>
    )
}

export default ProfileSettingsPage
import React from "react";
import {
    Checkbox,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function CreateGroupItem() {
    // const [checked, setChecked] = React.useState([0]);
    //
    // const handleToggle = (value) => () => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];
    //
    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //     }
    //
    //     setChecked(newChecked);
    // };

    return (
        <ListItem /*key={value} role={undefined}*/ style={{borderBottom:"1px solid #e0e0e0"}}>
            <ListItemIcon>
                <AccountCircleIcon fontSize="large"/>
            </ListItemIcon>
            <ListItemText primary="Contact 1"></ListItemText>
            <ListItemSecondaryAction>
                {/*<IconButton edge="end" aria-label="check">*/}
                <Checkbox
                    // edge="start"
                    // checked={checked.indexOf(value) !== -1}
                    // tabIndex={-1}
                    // disableRipple
                    // inputProps={{ 'aria-labelledby': labelId }}
                />
                {/*</IconButton>*/}
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default CreateGroupItem
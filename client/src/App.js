import React from 'react';
import MainPage from './Components/Pages/MainPage'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import ProfileSettingsPage from "./Components/Pages/ProfileSettingsPage";
import ContactsPage from "./Components/Pages/ContactsPage";
import GroupsPage from "./Components/Pages/GroupsPage";
import AddContactPage from "./Components/Pages/AddContactPage";

function App() {
    return (
        <div className="mainPage">
            <Router>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/profile-settings" component={ProfileSettingsPage}/>
                    <Route path="/contacts" component={ContactsPage}/>
                    <Route path="/groups" component={GroupsPage}/>
                    <Route path="/add-contact" component={AddContactPage}/>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
import React from 'react';
import MainPage from './Components/Pages/MainPage'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import ProfileSettingsPage from "./Components/Pages/ProfileSettingsPage";
import ContactsPage from "./Components/Pages/ContactsPage";
import GroupsPage from "./Components/Pages/GroupsPage";
import AddContactPage from "./Components/Pages/AddContactPage";
import SignUpPage from "./Components/Pages/SignUpPage";
import ResetPasswordPage from "./Components/Pages/ResetPasswordPage";
import SignInPage from "./Components/Pages/SignInPage";
import NewPasswordPage from "./Components/Pages/NewPasswordPage";
import {ContainerContext} from "./context/ContainerContext";
import {SocketService} from "./services/SocketService";

function App() {
    return (
        <ContainerContext.Provider value={{
            socketService: new SocketService()
        }}>
            <div className="mainPage">
                <Router>
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/profile-settings" component={ProfileSettingsPage}/>
                        <Route path="/contacts" component={ContactsPage}/>
                        <Route path="/groups" component={GroupsPage}/>
                        <Route path="/add-contact" component={AddContactPage}/>
                        <Route path="/sign-up" component={SignUpPage}/>
                        <Route path="/sign-in" component={SignInPage}/>
                        <Route path="/reset-password" component={ResetPasswordPage}/>
                        <Route path="/new-password" component={NewPasswordPage}/>
                    </Switch>
                </Router>
            </div>
        </ContainerContext.Provider>
    );
}

export default App;
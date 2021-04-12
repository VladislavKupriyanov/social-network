import { BrowserRouter, Route } from "react-router-dom";
import { Dialogs } from "../Dialogs/Dialogs";
import { Feed } from "../Feed/Feed";
import { Friends } from "../Friends/Friends";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { Profile } from "../Profile/Profile";
import { Settings } from "../Settings/Settings";
import s from './App.module.css';

export const App = () => {
    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header />
                <div className={s.container}>
                    <Navbar />
                    <div className={s.app_content}>
                        <Route component={Profile} path='/profile' />
                        <Route component={Dialogs} path='/dialogs' />
                        <Route component={Friends} path='/friends' />
                        <Route component={Feed} path='/feed' />
                        <Route component={Settings} path='/settings' />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
import { BrowserRouter, Route } from "react-router-dom";
import { ActionTypes, RootStateType } from "../../redux/state";
import { Dialogs } from "../Dialogs/Dialogs";
import { Feed } from "../Feed/Feed";
import { Friends } from "../Friends/Friends";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { Profile } from "../Profile/Profile";
import { Settings } from "../Settings/Settings";
import s from './App.module.css';

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionTypes) => void
};

export const App: React.FC<PropsType> = ({ state, dispatch }) => {

    const profileForRender = () => {
        return (
            <Profile state={state.profilePage} dispatch={dispatch} />
        );
    };

    const dialogsForRender = () => {
        return (
            <Dialogs state={state.dialogsPage} dispatch={dispatch} />
        );
    };

    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header />
                <div className={s.container}>
                    <Navbar />
                    <div className={s.app_content}>
                        <Route render={profileForRender} path='/profile' />
                        <Route render={dialogsForRender} path='/dialogs' />
                        <Route render={Friends} path='/friends' />
                        <Route render={Feed} path='/feed' />
                        <Route render={Settings} path='/settings' />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
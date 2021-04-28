import { BrowserRouter, Route } from 'react-router-dom';
import { DialogsContainer } from '../Dialogs/DialogsContainer';
import { Feed } from '../Feed/Feed';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { ProfileContainer } from '../Profile/ProfileContainer';
import { Settings } from '../Settings/Settings';
import { UsersContainer } from '../Users/UsersContainer';
import s from './App.module.css';

export const App: React.FC = () => {
    const profileForRender = () => {
        return <ProfileContainer />;
    };

    const dialogsForRender = () => {
        return <DialogsContainer />;
    };

    const usersForRender = () => {
        return <UsersContainer />;
    };

    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header />
                <div className={s.container}>
                    <Navbar />
                    <div className={s.app_content}>
                        <Route render={profileForRender} path="/profile/:userId?" />
                        <Route render={dialogsForRender} path="/dialogs" />
                        <Route render={usersForRender} path="/users" />
                        <Route render={Feed} path="/feed" />
                        <Route render={Settings} path="/settings" />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

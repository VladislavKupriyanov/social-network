import { BrowserRouter, Route } from 'react-router-dom';
import { DialogsContainer } from '../Dialogs/DialogsContainer';
import { Feed } from '../Feed/Feed';
import { Friends } from '../Friends/Friends';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Profile } from '../Profile/Profile';
import { Settings } from '../Settings/Settings';
import s from './App.module.css';

export const App: React.FC = () => {
    const profileForRender = () => {
        return <Profile />;
    };

    const dialogsForRender = () => {
        return <DialogsContainer />;
    };

    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header />
                <div className={s.container}>
                    <Navbar />
                    <div className={s.app_content}>
                        <Route render={profileForRender} path="/profile" />
                        <Route render={dialogsForRender} path="/dialogs" />
                        <Route render={Friends} path="/friends" />
                        <Route render={Feed} path="/feed" />
                        <Route render={Settings} path="/settings" />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

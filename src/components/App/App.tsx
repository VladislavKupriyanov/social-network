import { Dialogs } from "../Dialogs/Dialogs";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { Profile } from "../Profile/Profile";
import s from './App.module.css';

export const App = () => {
    return (
        <div className={s.app}>
            <Header />
            <div className={s.container}>
                <Navbar />
                <div className={s.app_content}>
                    <Profile />
                    {/* <Dialogs /> */}
                </div>
            </div>
        </div>
    );
};
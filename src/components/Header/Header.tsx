import s from './Header.module.css';
import Logo from '../../assets/logo.png';
import { LoginBlockContainer } from './LoginBlock/LoginBlockContainer';

export const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <img alt="logo" src={Logo} className={s.logo} />
                <LoginBlockContainer />
            </div>
        </div>
    );
};

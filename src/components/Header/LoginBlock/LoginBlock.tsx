import { NavLink } from 'react-router-dom';
import s from './LoginBlock.module.css';

type PropsType = {
    isAuth: boolean;
    login: string | undefined;
    logout: () => void;
};

export const LoginBlock: React.FC<PropsType> = ({ isAuth, login, logout }) => {
    return (
        <div className={s.login_block}>
            {isAuth ? (
                <div>
                    <span>{login}</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <NavLink to="/login">Login</NavLink>
            )}
        </div>
    );
};

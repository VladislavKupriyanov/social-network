import { NavLink } from 'react-router-dom';
import s from './LoginBlock.module.css';

type PropsType = {
    isAuth: boolean;
    login: string | undefined;
};

export const LoginBlock: React.FC<PropsType> = ({ isAuth, login }) => {
    return <div className={s.login_block}>{isAuth ? <span>{login}</span> : <NavLink to="/login">Login</NavLink>}</div>;
};

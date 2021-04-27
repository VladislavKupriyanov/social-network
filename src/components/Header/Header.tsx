import s from './Header.module.css';
import Logo from '../../assets/logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

type PropsType = {
    isAuth: boolean;
    login: string | undefined;
};

export const Header: React.FC<PropsType> = ({ isAuth, login }) => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <img alt="logo" src={Logo} className={s.logo} />
                <div className={s.login_block}>
                    {isAuth ? <span>{login}</span> : <NavLink to="/login">Login</NavLink>}
                </div>
            </div>
        </div>
    );
};

import s from './Navbar.module.css';
import ProfileIcon from '../../assets/svg/profile.svg';
import MessagesIcon from '../../assets/svg/messages.svg';
import FeedIcon from '../../assets/svg/feed.svg';
import UsersIcon from '../../assets/svg/users.svg';
import SettingsIcon from '../../assets/svg/settings.svg';
import { NavLink } from 'react-router-dom';

type PropsType = {
    authUserId: number | undefined;
};

export const Navbar: React.FC<PropsType> = ({ authUserId }) => {
    let profileRef = authUserId ? `/profile/${authUserId}` : '/profile';

    const links = [
        { name: 'Моя страница', ref: profileRef, img: ProfileIcon },
        { name: 'Сообщения', ref: '/dialogs', img: MessagesIcon },
        { name: 'Пользователи', ref: '/users', img: UsersIcon },
        { name: 'Новости', ref: '/feed', img: FeedIcon },
        { name: 'Настройки', ref: '/settings', img: SettingsIcon },
    ];

    const linksElements = links.map((l, index) => {
        return (
            <li key={index}>
                <NavLink className={s.link} activeClassName={s.active} to={l.ref}>
                    <img alt="svg" className={s.icon} src={l.img} />
                    <span>{l.name}</span>
                </NavLink>
            </li>
        );
    });

    return (
        <div className={s.navbar}>
            <ul className={s.links}>{linksElements}</ul>
        </div>
    );
};

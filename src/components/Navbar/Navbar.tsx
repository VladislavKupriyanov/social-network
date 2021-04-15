import s from './Navbar.module.css';
import ProfileIcon from '../../assets/svg/profile.svg'
import MessagesIcon from '../../assets/svg/messages.svg'
import FeedIcon from '../../assets/svg/feed.svg'
import FriendsIcon from '../../assets/svg/friends.svg'
import SettingsIcon from '../../assets/svg/settings.svg'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const links = [
        { name: 'Моя страница', ref: '/profile', img: ProfileIcon },
        { name: 'Сообщения', ref: '/dialogs', img: MessagesIcon },
        { name: 'Новости', ref: '/feed', img: FeedIcon },
        { name: 'Друзья', ref: '/friends', img: FriendsIcon },
        { name: 'Настройки', ref: '/settings', img: SettingsIcon }
    ];

    const linksElements = links.map((l, index, arr) => {
        return (
            <li key={index}>
                <NavLink className={s.link} activeClassName={s.active} to={l.ref}>
                    <img alt='svg' className={s.icon} src={l.img} />
                    <span>{l.name}</span>
                </NavLink>
            </li>
        );
    });

    return (
        <div className={s.navbar}>
            <ul className={s.links}>
                {linksElements}
            </ul>
        </div>
    );
};
import s from './Navbar.module.css';

import ProfileIcon from '../../assets/svg/profile.svg'
import MessagesIcon from '../../assets/svg/messages.svg'
import FeedIcon from '../../assets/svg/feed.svg'
import FriendsIcon from '../../assets/svg/friends.svg'
import SettingsIcon from '../../assets/svg/settings.svg'

export const Navbar = () => {

    const items = [
        { name: 'Моя страница', ref: '#', img: ProfileIcon },
        { name: 'Сообщения', ref: '#', img: MessagesIcon },
        { name: 'Новости', ref: '#', img: FeedIcon },
        { name: 'Друзья', ref: '#', img: FriendsIcon },
        { name: 'Настройки', ref: '#', img: SettingsIcon }
    ];

    const itemsElements = items.map((i) => {
        return (
            <li>
                <a className={s.item} href={i.ref}>
                    <img className={s.icon} src={i.img} />
                    <span>{i.name}</span>
                </a>
            </li>
        );
    });

    return (
        <div className={s.navbar}>
            <ul className={s.items}>
                {itemsElements}
            </ul>
        </div>
    );
};
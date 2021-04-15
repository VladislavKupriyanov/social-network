import s from './Header.module.css';
import Logo from '../../assets/logo.png';

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <img alt='logo' src={Logo} className={s.logo}/>
            </div>
        </div>
    );
};
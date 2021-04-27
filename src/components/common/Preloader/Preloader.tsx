import s from './Preloader.module.css';
import preloader from '../../../assets/preloader.gif';

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="preloader" />
        </div>
    );
};

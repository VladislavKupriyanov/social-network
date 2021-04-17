import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

type PropsType = {
    id: number;
    name: string;
};

export const Dialog = (props: PropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} className={s.dialog_link} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    );
};

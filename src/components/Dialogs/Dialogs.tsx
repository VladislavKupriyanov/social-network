import s from './Dialogs.module.css';
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';
import { DialogsPageType } from '../../redux/state';


type PropsType = {
    state: DialogsPageType
}

export const Dialogs: React.FC<PropsType> = ({ state }) => {

    const dialogsElements = state.dialogs.map((d) => {
        return (
            <Dialog id={d.id} name={d.name} />
        );
    });

    const messagesElements = state.messages.map((m) => {
        return (
            <Message message={m.message} />
        )
    });

    return (
        <div className={s.dialogs}>
            <div className={s.column_dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
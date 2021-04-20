import s from './Dialogs.module.css';
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';
import { ChangeEvent } from 'react';
import { DialogsPageType, sendMessageAC, updateNewMessageTextAC } from '../../redux/dialogsReducer';

type PropsType = {
    state: DialogsPageType;
    dispatch: (action: any) => void;
};

export const Dialogs: React.FC<PropsType> = ({ state, dispatch }) => {
    const dialogsElements = state.dialogs.map((d) => {
        return <Dialog key={d.id} id={d.id} name={d.name} />;
    });

    const messagesElements = state.messages.map((m) => {
        return <Message key={m.id} message={m.message} />;
    });

    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextAC(e.currentTarget.value));
    };

    const onClickSendMessage = () => {
        if (state.newMessageText !== '') {
            dispatch(sendMessageAC());
        }
    };

    return (
        <div className={s.dialogs}>
            <div className={s.column_dialogs}>{dialogsElements}</div>
            <div className={s.messages}>
                {messagesElements}
                <textarea
                    placeholder="Напишите что-нибудь"
                    value={state.newMessageText}
                    onChange={onChangeNewMessageText}
                />
                <button onClick={onClickSendMessage}>Отправить</button>
            </div>
        </div>
    );
};

import s from './Dialogs.module.css';
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';
import { ChangeEvent } from 'react';
import { DialogType, MessageType } from '../../redux/dialogsReducer';

type PropsType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessageText: string;
    updateNewMessageText: (newMessageText: string) => void;
    sendMessage: () => void;
};

export const Dialogs: React.FC<PropsType> = ({
    dialogs,
    messages,
    newMessageText,
    updateNewMessageText,
    sendMessage,
}) => {
    const dialogsElements = dialogs.map((d) => {
        return <Dialog key={d.id} id={d.id} name={d.name} />;
    });

    const messagesElements = messages.map((m) => {
        return <Message key={m.id} message={m.message} />;
    });

    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(e.currentTarget.value);
    };

    const onClickSendMessage = () => {
        if (newMessageText !== '') {
            sendMessage();
        }
    };

    return (
        <div className={s.dialogs}>
            <div className={s.column_dialogs}>{dialogsElements}</div>
            <div className={s.messages}>
                {messagesElements}
                <textarea placeholder="Напишите что-нибудь" value={newMessageText} onChange={onChangeNewMessageText} />
                <button onClick={onClickSendMessage}>Отправить</button>
            </div>
        </div>
    );
};

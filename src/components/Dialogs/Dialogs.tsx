import s from './Dialogs.module.css';
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';
import { DialogType, MessageType } from '../../redux/dialogsReducer';
import { AddMessageDialogReduxForm, AddMessageDialogFormDataType } from './AddMessageDialogForm';

type PropsType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    sendMessage: (newMessage: string) => void;
};

export const Dialogs: React.FC<PropsType> = ({ dialogs, messages, sendMessage }) => {
    const dialogsElements = dialogs.map((d) => {
        return <Dialog key={d.id} id={d.id} name={d.name} />;
    });

    const messagesElements = messages.map((m) => {
        return <Message key={m.id} message={m.message} />;
    });

    const onSendMessage = (values: AddMessageDialogFormDataType) => {
        sendMessage(values.newMessage);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.column_dialogs}>{dialogsElements}</div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageDialogReduxForm onSubmit={onSendMessage} />
            </div>
        </div>
    );
};

import { sendMessageAC, updateNewMessageTextAC } from '../../redux/dialogsReducer';
import { store } from '../../redux/store';
import { Dialogs } from './Dialogs';

export const DialogsContainer: React.FC = () => {
    const state = store.getState();

    const updateNewMessageText = (newMessageText: string) => {
        store.dispatch(updateNewMessageTextAC(newMessageText));
    };

    const sendMessage = () => {
        store.dispatch(sendMessageAC());
    };

    return (
        <Dialogs
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
            sendMessage={sendMessage}
            updateNewMessageText={updateNewMessageText}
        />
    );
};

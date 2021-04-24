import { connect } from 'react-redux';
import { sendMessageAC, updateNewMessageTextAC } from '../../redux/dialogsReducer';
import { RootStateType } from '../../redux/store';
import { Dialogs } from './Dialogs';

const mstp = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    };
};

const mdtp = (dispatch: any) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        updateNewMessageText: (newMessageText: string) => {
            dispatch(updateNewMessageTextAC(newMessageText));
        },
    };
};

export const DialogsContainer = connect(mstp, mdtp)(Dialogs);

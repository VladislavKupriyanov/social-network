import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import { RootStateType } from '../../redux/store';
import { Dialogs } from './Dialogs';

const mstp = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    };
};

const mdtp = { sendMessage, updateNewMessageText };

export const DialogsContainer = compose(withAuthRedirect, connect(mstp, mdtp))(Dialogs);

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessage } from '../../redux/dialogsReducer';
import { RootStateType } from '../../redux/store';
import { Dialogs } from './Dialogs';

const mstp = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    };
};

const mdtp = { sendMessage };

export const DialogsContainer = compose<React.ComponentType>(withAuthRedirect, connect(mstp, mdtp))(Dialogs);

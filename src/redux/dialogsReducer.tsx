import { DialogsPageType } from './store';

export type DialogsActionsTypes = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageTextAC>;

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const sendMessageAC = () => {
    return { type: SEND_MESSAGE } as const;
};

export const updateNewMessageTextAC = (newMessageText: string) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText } as const;
};

export const dialogsReducer = (state: DialogsPageType, action: DialogsActionsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
};

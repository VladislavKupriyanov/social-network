export type DialogType = {
    id: number;
    name: string;
};

export type MessageType = {
    id: number;
    message: string;
};

export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessageText: string;
};

export type DialogsActionsTypes = ReturnType<typeof sendMessage> | ReturnType<typeof updateNewMessageText>;

const initialState: DialogsPageType = {
    dialogs: [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Artem' },
        { id: 4, name: 'Zhenya' },
        { id: 5, name: 'Maxim' },
        { id: 6, name: 'Kirill' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'What?' },
        { id: 5, message: 'Who?' },
        { id: 6, message: 'Yo!' },
    ],
    newMessageText: '',
};

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const dialogsReducer = (state = initialState, action: DialogsActionsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: state.newMessageText }],
                newMessageText: '',
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return { ...state, newMessageText: action.newMessageText };

        default:
            return state;
    }
};

export const sendMessage = () => {
    return { type: SEND_MESSAGE } as const;
};

export const updateNewMessageText = (newMessageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText,
    } as const;
};

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
};

export type DialogsActionsTypes = ReturnType<typeof sendMessage>;

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
};

const SEND_MESSAGE = 'SEND_MESSAGE';

export const dialogsReducer = (state = initialState, action: DialogsActionsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: action.newMessage }],
            };
        default:
            return state;
    }
};

export const sendMessage = (newMessage: string) => {
    return { type: SEND_MESSAGE, newMessage } as const;
};

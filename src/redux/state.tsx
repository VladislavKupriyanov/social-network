export type PostType = {
    id: number;
    post: string;
    likeCount: number;
};

export type DialogType = {
    id: number;
    name: string;
};

export type MessageType = {
    id: number;
    message: string;
};

export type ProfilePageType = {
    posts: Array<PostType>;
    newPostText: string;
};

export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessageText: string;
};

export type RootStateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
};

export type ActionTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>;

export type StoreType = {
    _state: RootStateType;
    getState: () => RootStateType;
    _onChange: () => void;
    subscribe: (observer: () => void) => void;
    dispatch: (action: ActionTypes) => void;
};

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                    likeCount: 10,
                },
                {
                    id: 2,
                    post: 'Omnis, similique? In ullam incidunt est aperiam?',
                    likeCount: 11,
                },
                {
                    id: 3,
                    post:
                        'Repellendus dolores iure, voluptate nam quos quia asperiores, explicabo maxime est blanditiis, dolorum ratione delectus?',
                    likeCount: 11,
                },
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
    },

    getState() {
        return this._state;
    },

    _onChange() {},

    subscribe(observer: () => void) {
        this._onChange = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: this._state.profilePage.posts.length + 1,
                post: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._onChange();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._onChange();
        } else if (action.type === SEND_MESSAGE) {
            const newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._onChange();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._onChange();
        }
    },
};

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const addPostAC = () => {
    return { type: ADD_POST } as const;
};

export const updateNewPostTextAC = (newPostNext: string) => {
    return { type: UPDATE_NEW_POST_TEXT, newPostText: newPostNext } as const;
};

export const sendMessageAC = () => {
    return { type: SEND_MESSAGE } as const;
};

export const updateNewMessageTextAC = (newMessageText: string) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText } as const;
};

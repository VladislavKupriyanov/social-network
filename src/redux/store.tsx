import { dialogsReducer, DialogsActionsTypes } from './dialogsReducer';
import { profileReducer, ProfileActionsTypes } from './profileReducer';

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

export type ActionTypes = any;

export type StoreType = {
    _state: RootStateType;
    getState: () => RootStateType;
    _callSubscriber: () => void;
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

    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber();
    },
};
